import {
    useConfig,
    useOnlineStatus,
    useOnlineStatusMessage,
} from '@dhis2/app-runtime'
import cx from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from './locales/index.js'
import styles from './online-status.styles.js'

const useOnlineStatusInfo = ({ online, lastOnline, onlineStatusMessage }) => {
    const { headerbar } = useConfig()

    if (
        headerbar?.onlineStatusInfo === 'LAST_ONLINE' &&
        !online &&
        lastOnline
    ) {
        return i18n.t('Last online {{relativeTime}}', {
            relativeTime: moment(lastOnline).fromNow(),
        })
    }

    if (onlineStatusMessage) {
        return onlineStatusMessage
    }

    return null
}

/** A badge to display online/offline status in the header bar */
export function OnlineStatus({ dense }) {
    const { online, lastOnline } = useOnlineStatus()
    const { onlineStatusMessage } = useOnlineStatusMessage()

    const info = useOnlineStatusInfo({
        online,
        lastOnline,
        onlineStatusMessage,
    })

    const displayStatus = online ? i18n.t('Online') : i18n.t('Offline')

    return (
        <div
            className={cx('container', dense ? 'bar' : 'badge')}
            data-test="headerbar-online-status"
        >
            {info && !dense && (
                <span className="info unselectable">{info}</span>
            )}
            <div className={cx('icon', online ? 'online' : 'offline')}></div>
            <span className="label unselectable">{displayStatus}</span>
            {info && dense && (
                <span className="info-dense unselectable">{info}</span>
            )}
            <style jsx>{styles}</style>
        </div>
    )
}
OnlineStatus.propTypes = {
    /** If true, displays as a sub-bar instead of a badge */
    dense: PropTypes.bool,
}
