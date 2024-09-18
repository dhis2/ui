import {
    useDhis2ConnectionStatus,
    useOnlineStatusMessage,
} from '@dhis2/app-runtime'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from './locales/index.js'
import styles from './online-status.styles.js'

/** A badge to display online/offline status in the header bar */
export function OnlineStatus({ dense }) {
    const { isConnected: online } = useDhis2ConnectionStatus()
    const { onlineStatusMessage } = useOnlineStatusMessage()

    const displayStatus = online ? i18n.t('Online') : i18n.t('Offline')

    return (
        <div
            className={cx('container', dense ? 'bar' : 'badge')}
            data-test="headerbar-online-status"
        >
            {onlineStatusMessage && !dense && (
                <span className="info unselectable">{onlineStatusMessage}</span>
            )}
            <div className={cx('icon', online ? 'online' : 'offline')}></div>
            <span className="label unselectable">{displayStatus}</span>
            {onlineStatusMessage && dense && (
                <span className="info-dense unselectable">
                    {onlineStatusMessage}
                </span>
            )}
            <style jsx>{styles}</style>
        </div>
    )
}
OnlineStatus.propTypes = {
    /** If true, displays as a sub-bar instead of a badge */
    dense: PropTypes.bool,
}
