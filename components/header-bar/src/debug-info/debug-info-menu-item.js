import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
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
                {debugInfo.dhis2_version
                    ? i18n.t('DHIS2 {{dhis2Version}}', {
                          dhis2Version: debugInfo.dhis2_version,
                      })
                    : i18n.t('DHIS2 version unknown')}
            </div>
            <div className="version" data-test="dhis2-ui-headerbar-appinfo">
                {debugInfo.app_name
                    ? debugInfo.app_version
                        ? `${debugInfo.app_name} ${debugInfo.app_version}`
                        : i18n.t('{{appName}} version unknown', {
                              appName: debugInfo.app_name,
                          })
                    : debugInfo.app_version
                    ? i18n.t('App {{appVersion}}', {
                          appVersion: debugInfo.app_version,
                      })
                    : i18n.t('App version unknown')}
                {}
            </div>
            <style jsx>{`
                .root {
                    color: ${colors.grey700};
                    font-size: 12px;
                    line-height: 15px;
                }
                .instance-info {
                    margin-block-end: ${spacers.dp4};
                    word-break: break-all;
                }
                .version {
                    word-break: break-all;
                }
                .debug-info-menu-item {
                    padding: 0;
                }
            `}</style>
        </div>
    )

    return (
        <button
            onClick={openDebugModal}
            data-test="dhis2-ui-headerbar-debuginfo"
        >
            {debugInfoLabel}
            <style jsx>{`
                button {
                    width: 100%;
                    margin-block-start: ${spacers.dp4};
                    padding: ${spacers.dp8} ${spacers.dp12};
                    background-color: ${colors.grey050};
                    border: none;
                    border-block-start: 1px solid ${colors.grey300};
                    cursor: pointer;
                    text-align: left;
                }
                button:hover {
                    background-color: ${colors.grey200};
                }
            `}</style>
        </button>
    )
}

DebugInfoMenuItem.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
    showDebugInfoModal: PropTypes.func.isRequired,
}
