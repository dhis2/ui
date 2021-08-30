import { useOnlineStatus } from '@dhis2/app-runtime'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from './locales/index.js'
import styles from './online-status.styles.js'

/** A badge to display online/offline status in the header bar */
export function OnlineStatus({ info, mobile }) {
    const { online } = useOnlineStatus()
    const displayStatus = online ? i18n.t('Online') : i18n.t('Offline')

    return (
        <div
            className={cx('container', mobile ? 'mobile' : 'desktop')}
            data-test="headerbar-online-status"
        >
            {info && !mobile && <span className="info">{info}</span>}
            <div className={cx('icon', online ? 'online' : 'offline')}></div>
            <span className="label">{displayStatus}</span>
            {info && mobile && <span className="info-mobile">{info}</span>}
            <style jsx>{styles}</style>
        </div>
    )
}
OnlineStatus.propTypes = {
    /** Additional text to display beside badge */
    info: PropTypes.string,
    /** If true, uses mobile styles */
    mobile: PropTypes.bool,
}
