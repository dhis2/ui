import { Button } from '@dhis2-ui/button'
import { CircularLoader } from '@dhis2-ui/loader'
import { NoticeBox } from '@dhis2-ui/notice-box'
import { Tooltip } from '@dhis2-ui/tooltip'
import {
    useDataQuery,
    useDataMutation,
    useOnlineStatus,
} from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16, IconCheckmark16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import i18n from '../locales/index.js'

const dashboardQuery = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

const getVisualizationsCount = (queryResponse) => {
    return queryResponse?.dashboard.dashboardItems?.length > 0
        ? queryResponse.dashboard.dashboardItems.filter((item) =>
              ['VISUALIZATION', 'MAP', 'EVENT_CHART', 'EVENT_REPORT'].includes(
                  item.type
              )
          ).length
        : 0
}

const getCascadeSharingMutation = (id) => ({
    resource: `dashboards/cascadeSharing/${id}`,
    type: 'create',
})

export const CascadeTab = ({ id, entityAmount }) => {
    const { offline } = useOnlineStatus()

    const { data: queryResponse } = useDataQuery(dashboardQuery, {
        variables: { id },
    })

    const visualizationsCount = getVisualizationsCount(queryResponse)

    const mutation = useMemo(() => getCascadeSharingMutation(id), [])

    const [mutate, { loading, error, data: mutationResponse }] =
        useDataMutation(mutation)

    const renderApplySharingButton = () => (
        <Button
            type="button"
            disabled={offline || loading || !entityAmount}
            secondary
            onClick={() => mutate()}
        >
            {i18n.t('Apply sharing to dashboard visualizations')}
        </Button>
    )

    const getInfoMessage = () => {
        let message

        if (entityAmount > 0) {
            const messagePart1 = i18n.t(
                '{{count}} visualization on this dashboard will potentially get updated sharing settings.',
                {
                    count: visualizationsCount,
                    defaultValue:
                        '{{count}} visualization on this dashboard will potentially get updated sharing settings.',
                    defaultValue_plural:
                        'All {{count}} visualizations on this dashboard will potentially get updated sharing settings.',
                }
            )
            message =
                messagePart1 +
                ' ' +
                i18n.t(
                    'These updated sharing settings will apply to {{count}} user or group.',
                    {
                        count: entityAmount,
                        defaultValue:
                            'These updated sharing settings will apply to {{count}} user or group.',
                        defaultValue_plural:
                            'These updated sharing settings will apply to {{count}} users or groups.',
                    }
                )
        } else {
            message = i18n.t(
                'There are no users, groups or roles to apply sharing settings for.'
            )
        }

        return (
            <div className="box-block">
                <div className="box box-info">
                    <IconInfo16 color={colors.grey900} />
                    <span className="box-text">{message}</span>
                </div>
                <style jsx>{`
                    .title {
                        font-size: 16px;
                        color: ${colors.grey900};
                        font-weight: 500;
                    }

                    .description {
                        margin: 8px 0 13px 0;
                        font-size: 14px;
                        line-height: 19px;
                        color: ${colors.grey800};
                    }

                    .box-block {
                        display: block;
                    }

                    .box {
                        display: inline-flex;
                        margin-bottom: 14px;
                        border-radius: 3px;
                        padding: 8px 8px 6px 8px;
                    }
                    .box-text {
                        padding-left: 6px;
                        font-size: 14px;
                        color: ${colors.grey900};
                        line-height: 19px;
                    }

                    .box-info {
                        background-color: ${colors.grey200};
                    }

                    .box-success {
                        background-color: ${colors.green100};
                    }

                    .result-box {
                        margin-top: 14px;
                    }

                    .loading {
                        display: flex;
                        align-items: center;
                        color: ${colors.grey800};
                        font-size: 14px;
                        line-height: 19px;
                    }
                `}</style>
            </div>
        )
    }

    const getResultMessage = () => {
        let message

        if (mutationResponse?.errorReports.length === 0) {
            const updatedItems = mutationResponse.countUpdatedDashboardItems
            if (updatedItems === 0) {
                message = i18n.t(
                    'No visualizations were updated because sharing settings are already sufficient.'
                )

                return <NoticeBox>{message}</NoticeBox>
            } else if (updatedItems === visualizationsCount) {
                message = i18n.t(
                    'Successfully updated sharing for {{count}} visualization.',
                    {
                        count: visualizationsCount,
                        defaultValue:
                            'Successfully updated sharing for {{count}} visualization.',
                        defaultValue_plural:
                            'Successfully updated sharing for {{count}} visualizations.',
                    }
                )
            } else if (updatedItems < visualizationsCount) {
                // split in 2 because of nesting with plurals not working
                message =
                    i18n.t('{{count}} visualization was updated.', {
                        count: updatedItems,
                        defaultValue: '{{count}} visualization was updated.',
                        defaultValue_plural:
                            '{{count}} visualizations were updated.',
                    }) +
                    ' ' +
                    i18n.t(
                        '{{count}} visualization already has sufficient sharing settings.',
                        {
                            count: visualizationsCount - updatedItems,
                            defaultValue:
                                '{{count}} visualization already has sufficient sharing settings.',
                            defaultValue_plural:
                                '{{count}} visualizations already have sufficient sharing settings.',
                        }
                    )
            }

            return (
                <div className="box-block">
                    <div className="box box-success">
                        <IconCheckmark16 color={colors.grey700} />
                        <span className="box-text">{message}</span>
                    </div>
                    <style jsx>{`
                        .title {
                            font-size: 16px;
                            color: ${colors.grey900};
                            font-weight: 500;
                        }

                        .description {
                            margin: 8px 0 13px 0;
                            font-size: 14px;
                            line-height: 19px;
                            color: ${colors.grey800};
                        }

                        .box-block {
                            display: block;
                        }

                        .box {
                            display: inline-flex;
                            margin-bottom: 14px;
                            border-radius: 3px;
                            padding: 8px 8px 6px 8px;
                        }
                        .box-text {
                            padding-left: 6px;
                            font-size: 14px;
                            color: ${colors.grey900};
                            line-height: 19px;
                        }

                        .box-info {
                            background-color: ${colors.grey200};
                        }

                        .box-success {
                            background-color: ${colors.green100};
                        }

                        .result-box {
                            margin-top: 14px;
                        }

                        .loading {
                            display: flex;
                            align-items: center;
                            color: ${colors.grey800};
                            font-size: 14px;
                            line-height: 19px;
                        }
                    `}</style>
                </div>
            )
        } else {
            const messageCheckPermissions = i18n.t(
                'Check that you have permission to change sharing for all visualizations.'
            )
            if (mutationResponse?.countUpdatedDashboardItems === 0) {
                message =
                    i18n.t('No visualizations were updated.') +
                    ' ' +
                    messageCheckPermissions
            } else if (
                mutationResponse?.countUpdatedDashboardItems &&
                queryResponse?.dashboard.itemsCount
            ) {
                const messagePart1 = i18n.t(
                    '{{count}} visualization was updated',
                    {
                        count: mutationResponse.countUpdatedDashboardItems,
                        defaultValue: '{{count}} visualization was updated',
                        defaultValue_plural:
                            '{{count}} visualizations were updated.',
                    }
                )
                message =
                    messagePart1 +
                    ' ' +
                    i18n.t('{{count}} visualization could not be updated.', {
                        count:
                            visualizationsCount -
                            mutationResponse.countUpdatedDashboardItems,
                        defaultValue:
                            '{{count}} visualization could not be updated.',
                        defaultValue_plural:
                            '{{count}} visualizations could not be updated.',
                    }) +
                    ' ' +
                    messageCheckPermissions
            }

            return <NoticeBox warning>{message}</NoticeBox>
        }
    }

    return (
        <>
            <div className="title">
                {i18n.t('Apply dashboard sharing settings to visualizations')}
            </div>
            <div className="description">
                {i18n.t(
                    'Applying the same sharing settings makes sure that users, groups and roles that have access to the dashboard also have at least "View only" access to its visualizations (charts, tables, maps, event charts, event reports).'
                )}
            </div>
            <div className="description">
                {i18n.t(
                    'If a user, group, or role already has "View and edit" access to a visualization, this won\'t be reduced to "View only". "All users" access level won\'t be updated or changed.'
                )}
            </div>
            <div className="description">
                {i18n.t(
                    "Applying sharing can't be undone, and needs to done again if new visualizations are added to the dashboard or its sharing settings are changed."
                )}
            </div>
            {visualizationsCount && getInfoMessage()}
            {offline ? (
                <Tooltip content={i18n.t('Not available offline')}>
                    {renderApplySharingButton()}
                </Tooltip>
            ) : (
                renderApplySharingButton()
            )}
            {loading && (
                <div className="loading">
                    <CircularLoader small />{' '}
                    <span>{i18n.t('Updating sharing settings...')}</span>
                </div>
            )}
            <div className="result-box">
                {error && (
                    <NoticeBox error>
                        {i18n.t(
                            'There was a problem updating dashboard visualizations. No visualizations were updated. Try again, or contact a system administrator.'
                        )}
                    </NoticeBox>
                )}
                {mutationResponse && getResultMessage()}
            </div>
            <style jsx>{`
                .title {
                    font-size: 16px;
                    color: ${colors.grey900};
                    font-weight: 500;
                }

                .description {
                    margin: 8px 0 13px 0;
                    font-size: 14px;
                    line-height: 19px;
                    color: ${colors.grey800};
                }

                .box-block {
                    display: block;
                }

                .box {
                    display: inline-flex;
                    margin-bottom: 14px;
                    border-radius: 3px;
                    padding: 8px 8px 6px 8px;
                }
                .box-text {
                    padding-left: 6px;
                    font-size: 14px;
                    color: ${colors.grey900};
                    line-height: 19px;
                }

                .box-info {
                    background-color: ${colors.grey200};
                }

                .box-success {
                    background-color: ${colors.green100};
                }

                .result-box {
                    margin-top: 14px;
                }

                .loading {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey800};
                    font-size: 14px;
                    line-height: 19px;
                }
            `}</style>
        </>
    )
}

CascadeTab.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
