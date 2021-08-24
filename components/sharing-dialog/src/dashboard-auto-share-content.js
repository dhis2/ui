import { Button } from '@dhis2-ui/button'
import { CircularLoader } from '@dhis2-ui/loader'
import { NoticeBox } from '@dhis2-ui/notice-box'
import { useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16, IconCheckmark16 } from '@dhis2/ui-icons'
import React, { useMemo } from 'react'
import { autoShareStyles } from './sharing-dialog.styles.js'

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

export const DashboardAutoShareContent = ({ sharingSettings }) => {
    const { data: queryResponse } = useDataQuery(dashboardQuery, {
        variables: { id: sharingSettings.id },
    })

    const mutation = useMemo(
        () => getCascadeSharingMutation(sharingSettings.id),
        []
    )

    const [
        mutate,
        { loading, error, data: mutationResponse },
    ] = useDataMutation(mutation)

    const usersGroupsCount =
        Object.keys(sharingSettings.users).length +
        Object.keys(sharingSettings.groups).length

    return (
        <>
            <style jsx>{autoShareStyles}</style>
            <div className="title">
                {i18n.t('Apply dashboard sharing settings to dashboard items')}
            </div>
            <div className="description">
                {i18n.t(
                    "All dashboard items will be updated. Users and groups with access to this dashboard will have the same access level for all dashboard items. Public sharing will not be applied to dashboard items. Applying sharing can not be undone, and needs to be performed each time you update a dashboard's sharing settings or items."
                )}
            </div>
            <div className="box box-info">
                <IconInfo16 color={colors.grey900} />
                <span className="box-text">
                    {usersGroupsCount > 0
                        ? i18n.t(
                              `
            {{dashboardItemsCount}} dashboard items will be updated with sharing settings
                    from {{usersGroupsCount}} users and groups. Public access is not affected.`,
                              {
                                  dashboardItemsCount:
                                      queryResponse?.dashboard.itemCount,
                                  usersGroupsCount,
                              }
                          )
                        : i18n.t(
                              "There aren't any sharing settings to apply to dashboard items. Public access cannot be applied to items."
                          )}
                </span>
            </div>
            <Button
                type="button"
                disabled={loading || !usersGroupsCount}
                secondary
                onClick={() => mutate()}
            >
                {i18n.t('Apply sharing to dashboard items')}
            </Button>
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
                {mutationResponse &&
                    mutationResponse?.countUpdatedDashboardItems !==
                        queryResponse?.dashboard.itemCount && (
                        <NoticeBox warning>
                            {i18n.t(
                                '{{updatedDashboardItemsCount}} dashboard items were updated, but {{ignoredDashboardItemsCount}} could not be updated. Check that you have permission to change sharing for all items.',
                                {
                                    updatedDashboardItemsCount:
                                        mutationResponse.countUpdatedDashboardItems,
                                    ignoredDashboardItemsCount:
                                        queryResponse.dashboard.itemCount -
                                        mutationResponse.countUpdatedDashboardItems,
                                }
                            )}
                        </NoticeBox>
                    )}
                {mutationResponse &&
                    mutationResponse?.countUpdatedDashboardItems ===
                        queryResponse?.dashboard.itemCount && (
                        <div className="box box-success">
                            <IconCheckmark16 color={colors.grey700} />
                            <span className="box-text">
                                {i18n.t(
                                    'Successfully updated sharing for {{updatedDashboardItemsCount}} dashboard items',
                                    {
                                        updatedDashboardItemsCount:
                                            mutationResponse.countUpdatedDashboardItems,
                                    }
                                )}
                            </span>
                        </div>
                    )}
            </div>
        </>
    )
}

DashboardAutoShareContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
}
