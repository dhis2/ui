import { mutuallyExclusive } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'
import { Actions, actionsPropType } from './actions.js'
import styles, { ANIMATION_TIME } from './alert-bar.styles.js'
import { Dismiss } from './dismiss.js'
import { Icon, iconPropType } from './icon.js'
import { Message } from './message.js'

const AlertBar = ({
    actions,
    children,
    className,
    critical,
    dataTest,
    duration,
    hidden,
    icon,
    permanent,
    dismissable,
    success,
    warning,
    onHidden,
}) => {
    const [inViewport, setInViewport] = useState(!hidden)
    const [inDOM, setInDOM] = useState(!hidden)
    const showTimeout = useRef(null)
    const displayTimeout = useRef(null)
    const hideTimeout = useRef(null)
    const displayStartTime = useRef(null)
    const displayTimeRemaining = useRef(null)
    const info = !critical && !success && !warning
    const shouldAutoHide = !(permanent || warning || critical)
    const show = () => {
        setInDOM(true)
        setInViewport(true)
    }
    const hide = () => {
        setInDOM(true)
        setInViewport(false)
    }
    const remove = () => {
        setInDOM(false)
        setInViewport(false)
        onHidden && onHidden({}, null)
    }
    const clearAllTimeouts = () => {
        clearTimeout(showTimeout.current)
        clearTimeout(displayTimeout.current)
        clearTimeout(hideTimeout.current)
    }
    const runHideAnimation = () => {
        clearAllTimeouts()
        hide()
        hideTimeout.current = setTimeout(remove, ANIMATION_TIME)
    }
    const startDisplayTimeout = () => {
        if (shouldAutoHide) {
            clearAllTimeouts()
            displayStartTime.current = Date.now()
            displayTimeRemaining.current = duration
            displayTimeout.current = setTimeout(
                runHideAnimation,
                displayTimeRemaining.current
            )
        }
    }
    const runShowAnimation = () => {
        clearAllTimeouts()
        show()
        showTimeout.current = setTimeout(startDisplayTimeout, ANIMATION_TIME)
    }
    const pauseDisplayTimeout = () => {
        if (shouldAutoHide) {
            clearAllTimeouts()
            const elapsedTime = Date.now() - displayStartTime.current
            displayTimeRemaining.current -= elapsedTime
        }
    }
    const resumeDisplayTimeout = () => {
        if (shouldAutoHide) {
            clearAllTimeouts()
            displayTimeout.current = setTimeout(
                runHideAnimation,
                displayTimeRemaining.current
            )
        }
    }

    useEffect(() => {
        // Additional check on inDOM prevents the AlertBar from briefly showing
        // when it is mounted with a hidden prop set to true
        if (hidden && inDOM) {
            runHideAnimation()
        }
        if (!hidden) {
            runShowAnimation()
        }

        return clearAllTimeouts
    }, [hidden])

    return !inDOM ? null : (
        <div
            className={cx(className, {
                info,
                success,
                warning,
                critical,
                inViewport,
            })}
            data-test={dataTest}
            onMouseEnter={pauseDisplayTimeout}
            onMouseLeave={resumeDisplayTimeout}
        >
            <Icon
                dataTest={`${dataTest}-icon`}
                icon={icon}
                critical={critical}
                success={success}
                warning={warning}
                info={info}
            />
            <Message>{children}</Message>
            <Actions
                actions={actions}
                hide={runHideAnimation}
                dataTest={dataTest}
            />
            {dismissable && <Dismiss
                onClick={runHideAnimation}
                dataTest={`${dataTest}-dismiss`}
            />}

            <style jsx>{styles}</style>
        </div>
    )
}

const alertTypePropType = mutuallyExclusive(
    ['success', 'warning', 'critical'],
    PropTypes.bool
)

AlertBar.defaultProps = {
    duration: 8000,
    dataTest: 'dhis2-uicore-alertbar',
    icon: true,
    dismissable: true,
}

AlertBar.propTypes = {
    /** An array of 0-2 action objects 
`[{label: "Save", onClick: clickHandler}]`*/
    actions: actionsPropType,
    /** The message string for the alert */
    children: PropTypes.string,
    className: PropTypes.string,
    /** Alert bars with `critical` will not autohide */
    critical: alertTypePropType,
    dataTest: PropTypes.string,
    /** How long you want the notification to display, in `ms`, when it's not permanent */
    duration: PropTypes.number,
    /** AlertBar will be hidden on creation when this is set to true */
    hidden: PropTypes.bool,
    /**
     * A specific icon to override the default icon in the bar.
     * If `false` is provided, no icon will be shown.
     */
    icon: iconPropType,
    /** When set, AlertBar will not autohide */
    permanent: PropTypes.bool,
    dismissable: PropTypes.bool,
    success: alertTypePropType,
    /** Alert bars with `warning` will not autohide */
    warning: alertTypePropType,
    onHidden: PropTypes.func,
}

export { AlertBar }
