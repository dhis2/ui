import cx from 'classnames'
import React, { useRef, useState, useEffect } from 'react'
import { Actions } from './actions.tsx'
import type { AlertBarAction } from './actions.tsx'
import styles, { ANIMATION_TIME } from './alert-bar.styles.ts'
import { Dismiss } from './dismiss.tsx'
import { Icon } from './icon.tsx'
import { Message } from './message.tsx'

export interface AlertBarProps {
    /** An array of 0-2 action objects `[{label: "Save", onClick: clickHandler}]` */
    actions?: AlertBarAction[]
    /** The message string for the alert */
    children?: string
    className?: string
    /** Alert bars with `critical` will not autohide */
    critical?: boolean
    dataTest?: string
    /** How long you want the notification to display, in `ms`, when it's not permanent */
    duration?: number
    /** AlertBar will be hidden on creation when this is set to true */
    hidden?: boolean
    /**
     * A specific icon to override the default icon in the bar.
     * If `false` is provided, no icon will be shown.
     */
    icon?: boolean | React.ReactElement
    /** When set, AlertBar will not autohide */
    permanent?: boolean
    success?: boolean
    /** Alert bars with `warning` will not autohide */
    warning?: boolean
    onHidden?: (payload: Record<string, never>, event: null) => void
}

const AlertBar = ({
    actions,
    children,
    className,
    critical,
    dataTest = 'dhis2-uicore-alertbar',
    duration = 8000,
    hidden,
    icon = true,
    permanent,
    success,
    warning,
    onHidden,
}: AlertBarProps) => {
    const [inViewport, setInViewport] = useState(!hidden)
    const [inDOM, setInDOM] = useState(!hidden)
    const showTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const displayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const displayStartTime = useRef<number | null>(null)
    const displayTimeRemaining = useRef<number | null>(null)
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
        clearTimeout(showTimeout.current as ReturnType<typeof setTimeout>)
        clearTimeout(displayTimeout.current as ReturnType<typeof setTimeout>)
        clearTimeout(hideTimeout.current as ReturnType<typeof setTimeout>)
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
            const elapsedTime = Date.now() - (displayStartTime.current as number)
            displayTimeRemaining.current =
                (displayTimeRemaining.current as number) - elapsedTime
        }
    }
    const resumeDisplayTimeout = () => {
        if (shouldAutoHide) {
            clearAllTimeouts()
            displayTimeout.current = setTimeout(
                runHideAnimation,
                displayTimeRemaining.current as number
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
            <Message>{children as string}</Message>
            <Actions
                actions={actions}
                hide={runHideAnimation}
                dataTest={dataTest}
            />
            <Dismiss
                onClick={runHideAnimation}
                dataTest={`${dataTest}-dismiss`}
            />

            <style jsx>{styles}</style>
        </div>
    )
}

export { AlertBar }
