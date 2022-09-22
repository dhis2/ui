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
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'inline-block',
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: colors.blue700,
                    marginRight: 16,
                }}
            />
            <div style={{ display: 'inline-block' }}>
                {i18n.t(`New ${appName} version available`)}
                <br />
                {i18n.t('Click to reload')}
            </div>
        </div>
    )

    return updateAvailable ? (
        <MenuItem dense onClick={onClick} label={updateNotificationLabel} />
    ) : null
}

UpdateNotification.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
}
