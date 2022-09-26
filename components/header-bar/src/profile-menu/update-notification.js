import { MenuItem } from '@dhis2-ui/menu'
import { useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { useHeaderBarContext } from '../header-bar-context.js'
import i18n from '../locales/index.js'

export function UpdateNotification({ hideProfileMenu }) {
    const { appName } = useConfig()
    const { updateAvailable, onApplyAvailableUpdate } = useHeaderBarContext()
    console.log(updateAvailable)
    const onClick = () => {
        hideProfileMenu()
        onApplyAvailableUpdate?.()
    }

    const updateNotificationLabel = (
        <div className="root">
            <div className="badge" />
            <div className="spacer" />
            <div className="message">
                {i18n.t(`New {{appName}} version available`, { appName })}
                <br />
                {i18n.t('Click to reload')}
            </div>
            <style jsx>{`
                .root {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 14px;
                    line-height: 17px;
                }
                .badge {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin: 0 8px;
                    border-radius: 6px;
                    background-color: ${colors.blue600};
                }
                .spacer {
                    display: inline-block;
                    width: 8px;
                }
                .message {
                    display: inline-block;
                }
            `}</style>
        </div>
    )

    return updateAvailable ? (
        <MenuItem dense onClick={onClick} label={updateNotificationLabel} />
    ) : null
}

UpdateNotification.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
}
