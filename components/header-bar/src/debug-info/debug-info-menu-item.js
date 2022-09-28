import { MenuItem } from '@dhis2-ui/menu'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { useDebugInfo } from './use-debug-info.js'

export const DebugInfoMenuItem = ({ hideProfileMenu, showDebugInfoModal }) => {
    const debugInfo = useDebugInfo()

    const openDebugModal = () => {
        hideProfileMenu()
        showDebugInfoModal()
    }

    const debugInfoLabel = (
        <div className="root">
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
                .root {
                    color: ${colors.grey700};
                    font-style: italic;
                    font-size: 14px;
                    line-height: 17px;
                }
                .instance-info {
                    margin-bottom: 4px;
                }
                .version {
                    white-space: no-wrap;
                }
            `}</style>
        </div>
    )

    return (
        <MenuItem
            dense
            onClick={openDebugModal}
            label={debugInfoLabel}
            dataTest="dhis2-ui-headerbar-instanceandappinfo"
        />
    )
}

DebugInfoMenuItem.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
    showDebugInfoModal: PropTypes.func.isRequired,
}
