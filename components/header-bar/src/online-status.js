import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './online-status.styles.js'

/** A badge to display online/offline status in the header bar */
export function OnlineStatus({ status, info, mobile }) {
    // Convert to title case
    const displayStatus = status.replace(/(^|\s)\S/g, c => c.toUpperCase())

    return (
        <div
            className={cx('container', mobile ? 'mobile' : 'desktop')}
            data-test="headerbar-online-status"
        >
            {info && !mobile && <span className="info">{info}</span>}
            <div className={cx('icon', status)}></div>
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
    /** Connection status */
    status: PropTypes.oneOf(['online', 'offline', 'reconnecting']),
}
