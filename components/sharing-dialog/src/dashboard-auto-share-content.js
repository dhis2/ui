import { Button } from '@dhis2-ui/button'
import { CircularLoader } from '@dhis2-ui/loader'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16, IconWarning16 } from '@dhis2/ui-icons'
import React from 'react'
import { ACCESS_NONE } from './sharing-constants.js'
import { autoShareStyles } from './sharing-dialog.styles'

export const DashboardAutoShareContent = ({ sharingSettings }) => {
    // TODO use dataEngine for the actual query and use the loading state from there
    const loading = false

    return (
        <>
            <style jsx>{autoShareStyles}</style>
            <div className="title">
                {i18n.t('Auto-sharing dashboard items')}
            </div>
            <div className="description">
                {i18n.t(
                    "Auto-share will apply the current dashboard sharing settings to all dashboard items. All dashboard items will be updated, and users and groups with access to this dashboard will have the same access level for all dashboard items. Auto-share can not be undone. Auto-share needs to be performed each time you update a dashboard's sharing settings or items."
                )}
            </div>
            <div className="info-box">
                <IconInfo16 color={colors.grey900} />
                <span className="info-box-text">
                    24 dashboard items will be updated with sharing settings
                    from 8 users and groups.
                </span>
            </div>
            {sharingSettings.public !== ACCESS_NONE && (
                <div className="warning-box">
                    <IconWarning16 color={colors.red500} />
                    <span className="warning-box-text">
                        Warning: This dashboard has public access. Auto-sharing
                        will give public access to all 24 dashboard items.
                    </span>
                </div>
            )}
            <Button type="button" disabled={loading} secondary>
                {i18n.t('Auto-share dashboard items')}
            </Button>
            <div className="result-box">
                {loading && (
                    <div className="loading">
                        <CircularLoader small />{' '}
                        <span>{i18n.t('Auto-sharing dashboard items')}</span>
                    </div>
                )}
            </div>
        </>
    )
}

DashboardAutoShareContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
}
