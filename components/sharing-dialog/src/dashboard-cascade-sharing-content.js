import { Button } from '@dhis2-ui/button'
import { CircularLoader } from '@dhis2-ui/loader'
import { NoticeBox } from '@dhis2-ui/notice-box'
import { Tooltip } from '@dhis2-ui/tooltip'
import {
    useDataQuery,
    useDataMutation,
    useOnlineStatus,
} from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16, IconCheckmark16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { cascadeSharingStyles } from './sharing-dialog.styles.js'

const dashboardQuery = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'itemCount',
        },
    },
}

const getCascadeSharingMutation = id => ({
    resource: `dashboards/cascadeSharing/${id}`,
    type: 'create',
})

export const DashboardCascadeSharingContent = ({ sharingSettings }) => {
    const { offline } = useOnlineStatus()

    const { data: queryResponse } = useDataQuery(dashboardQuery, {
        variables: { id: sharingSettings.id },
    })

    const mutation = useMemo(
        () => getCascadeSharingMutation(sharingSettings.id),
        []
    )

    const [mutate, { loading, error, data: mutationResponse }] =
        useDataMutation(mutation)

    const usersGroupsCount =
        Object.keys(sharingSettings.users).length +
        Object.keys(sharingSettings.groups).length

    const renderApplySharingButton = () => (
        <Button
            type="button"
            disabled={offline || loading || !usersGroupsCount}
            secondary
            onClick={() => mutate()}
        >
            {i18n.t('Apply sharing to dashboard items')}
        </Button>
    )

    const getInfoMessage = () => {
        let message

        if (usersGroupsCount > 0) {
            message = i18n.t(
                'All {{itemsCount}} items on this dashboard will be potentially updated with sharing settings from {{usersGroupsCount}} users and groups. Public access is not affected.',
                {
                    itemsCount: queryResponse.dashboard.itemCount,
                    usersGroupsCount,
                }
            )
        } else {
            message = i18n.t(
                "There aren't any sharing settings to apply to dashboard items. Public access cannot be applied to items."
            )
        }

        return (
            <>
                <style jsx>{cascadeSharingStyles}</style>
                <div className="box box-info">
                    <IconInfo16 color={colors.grey900} />
                    <span className="box-text">{message}</span>
                </div>
            </>
        )
    }

    const getResultMessage = () => {
        let message

        if (mutationResponse?.errorReports.length === 0) {
            if (mutationResponse?.countUpdatedDashboardItems === 0) {
                message = i18n.t(
                    'No dashboard items were updated because they already have the sharing settings.'
                )

                return <NoticeBox>{message}</NoticeBox>
            } else if (
                mutationResponse?.countUpdatedDashboardItems ===
                queryResponse?.dashboard.itemCount
            ) {
                message = i18n.t(
                    'Successfully updated sharing for {{updatedDashboardItemsCount}} dashboard items.',
                    {
                        updatedDashboardItemsCount:
                            queryResponse.dashboard.itemCount,
                    }
                )
            } else if (
                mutationResponse?.countUpdatedDashboardItems <
                queryResponse?.dashboard.itemCount
            ) {
                // split in 2 because of nesting with plurals not working
                message =
                    i18n.t(
                        '{{updatedDashboardItemsCount}} dashboard item was updated.',
                        {
                            updatedDashboardItemsCount:
                                mutationResponse.countUpdatedDashboardItems,
                            defaultValue:
                                '{{updatedDashboardItemsCount}} dashboard item was updated.',
                            defaultValue_plural:
                                '{{updatedDashboarItemsCount}} dashboard items were updated.',
                        }
                    ) +
                    ' ' +
                    i18n.t(
                        '{{ignoredDashboardItemsCount}} dashboard item already has the sharing settings or has public access.',
                        {
                            ignoredDashboardItemsCount:
                                queryResponse.dashboard.itemCount -
                                mutationResponse.countUpdatedDashboardItems,
                            defaultValue:
                                '{{ignoredDashboardItemsCount}} dashboard item already has the sharing settings or has public access.',
                            defaultValue_plural:
                                '{{ignoredDashboardItemsCount}} dashboard items already have the sharing settings or have public access.',
                        }
                    )
            }

            return (
                <>
                    <style jsx>{cascadeSharingStyles}</style>
                    <div className="box box-success">
                        <IconCheckmark16 color={colors.grey700} />
                        <span className="box-text">{message}</span>
                    </div>
                </>
            )
        } else {
            if (mutationResponse?.countUpdatedDashboardItems === 0) {
                message = i18n.t(
                    'No dashboard items were updated. Check that you have permission to change sharing for all items.'
                )
            } else if (
                mutationResponse?.countUpdatedDashboardItems &&
                queryResponse?.dashboard.itemsCount
            ) {
                message = i18n.t(
                    '{{count}} dashboard items were updated, but {{ignoredDashboardItemsCount}} could not be updated. Check that you have permission to change sharing for all items.',
                    {
                        count: mutationResponse.countUpdatedDashboardItems,
                        ignoredDashboardItemsCount:
                            queryResponse.dashboard.itemCount -
                            mutationResponse.countUpdatedDashboardItems,
                        defaultValue:
                            '{{count}} dashboard item was updated, but {{ignoredDashboardItemsCount}} could not be updated. Check that you have permission to change sharing for all items.',
                        defaultValue_plural:
                            '{{count}} dashboard items were updated, but {{ignoredDashboardItemsCount}} could not be updated. Check that you have permission to change sharing for all items.',
                    }
                )
            }

            return <NoticeBox warning>{message}</NoticeBox>
        }
    }

    return (
        <>
            <style jsx>{cascadeSharingStyles}</style>
            <div className="title">
                {i18n.t('Apply dashboard sharing settings to dashboard items')}
            </div>
            <div className="description">
                {i18n.t(
                    "Dashboard sharing settings for viewers will be applied to dashboard items. Users and groups that can view this dashboard will be able to view dashboard items. Public sharing for items will not be applied or changed. Applying sharing can not be undone and needs to be done each time you update a dashboard's sharing settings or items."
                )}
            </div>
            {queryResponse?.dashboard.itemCount && getInfoMessage()}
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
                            'There was a problem updating dashboard items. No dashboard items were updated. Try again, or contact a system administrator'
                        )}
                    </NoticeBox>
                )}
                {mutationResponse && getResultMessage()}
            </div>
        </>
    )
}

DashboardCascadeSharingContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
}
