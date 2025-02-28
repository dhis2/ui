import { useConfig } from '@dhis2/app-runtime'
import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { useHeaderBarContext } from '../header-bar-context.js'
import i18n from '../locales/index.js'

export function UpdateNotification({ hideProfileMenu }) {
    const { appName } = useConfig()
    const { updateAvailable, onApplyAvailableUpdate } = useHeaderBarContext()
    const onClick = () => {
        hideProfileMenu()
        onApplyAvailableUpdate?.()
    }

    const updateNotificationLabel = (
        <div className="root">
            <div className="badge" />
            <div className="spacer" />
            <div className="message">
                {appName
                    ? i18n.t(
                          'New {{appName}} version available — Reload to update',
                          { appName }
                      )
                    : i18n.t('New app version available — Reload to update')}
            </div>
            <style jsx>{`
                .root {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    font-size: 12px;
                    line-height: 15px;
                    color: ${colors.grey700};
                }
                .badge {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    margin: 0;
                    margin-block-start: 3px;
                    border-radius: 6px;
                    background-color: ${colors.blue600};
                    flex-shrink: 0;
                }
                .spacer {
                    display: inline-block;
                    width: 6px;
                    flex-shrink: 0;
                }
                .message {
                    display: inline-block;
                    text-align: start;
                }
            `}</style>
        </div>
    )

    return updateAvailable ? (
        <button
            onClick={onClick}
            aria-label={i18n.t('New app version available — Reload to update')}
            data-test="dhis2-ui-headerbar-updatenotification"
        >
            {updateNotificationLabel}
            <style jsx>{`
                button {
                    display: flex;
                    align-items: center;
                    background: ${colors.grey050};
                    border: none;
                    padding: ${spacers.dp8} ${spacers.dp12};
                    width: 100%;
                    cursor: pointer;
                    font-size: 12px;
                    line-height: 15px;
                    color: ${colors.grey700};
                }
                    button:hover {
                        background: ${colors.grey200};
            `}</style>
        </button>
    ) : null
}

UpdateNotification.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
}
