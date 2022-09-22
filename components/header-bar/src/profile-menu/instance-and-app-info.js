import { MenuItem } from '@dhis2-ui/menu'
import { useAlert, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const menuItemWithBorderTopStyles = resolve`
    li {
        color: ${colors.grey700};
        font-style: italic;
        font-size: 14px;
        line-height: 17px;
        user-select: auto;
    }
`

const useDebugInfo = () => {
    const { appName, appVersion, systemInfo } = useConfig()

    return {
        dhis2_version: systemInfo?.version || 'unknown',
        dhis2_revision: systemInfo?.revision || 'unknown',
        app_name: appName || 'App',
        app_version: appVersion?.full || 'unknown',
    }
}

const formatDebugInfo = (debugInfo) =>
    Object.keys(debugInfo)
        .map((key) => `${key}: ${debugInfo[key]}`)
        .join('\n')

export const InstanceAndAppInfo = ({ hideProfileMenu }) => {
    const {
        show: showClipboardAlert,
    } = useAlert('Debug information copied to clipboard', { duration: 3000 })
    const debugInfo = useDebugInfo()

    const copyDebugInfo = () => {
        navigator.clipboard.writeText(formatDebugInfo(debugInfo))
        hideProfileMenu()
        showClipboardAlert()
    }

    const debugInfoLabel = (
        <>
            <div
                className="instance-info version"
                data-test="dhis2-ui-headerbar-instanceinfo"
            >
                {`DHIS2 ${debugInfo.dhis2_version}`}
            </div>
            {debugInfo.app_name && debugInfo.app_version && (
                <div className="version" data-test="dhis2-ui-headerbar-appinfo">
                    {`${debugInfo.app_name} ${debugInfo.app_version}`}
                </div>
            )}
            <style jsx>{`
                .instance-info {
                    margin-bottom: 4px;
                }
                .version {
                    white-space: no-wrap;
                }
            `}</style>
        </>
    )

    return <>
        <MenuItem
            className={menuItemWithBorderTopStyles.className}
            onClick={copyDebugInfo}
            label={debugInfoLabel}
            dataTest="dhis2-ui-headerbar-instanceandappinfo"
        />
        {menuItemWithBorderTopStyles.styles}
    </>
}

InstanceAndAppInfo.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
}
