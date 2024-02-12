import { CircularLoader } from '@dhis2-ui/loader'
import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styles from './button.styles.js'

export const Button = ({
    children,
    className,
    dataTest,
    destructive,
    disabled,
    icon,
    initialFocus,
    large,
    name,
    primary,
    secondary,
    small,
    tabIndex,
    toggled,
    type,
    value,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    loading,
    ...otherProps
}) => {
    const ref = useRef()

    useEffect(() => {
        if (initialFocus && ref.current) {
            ref.current.focus()
        }
    }, [initialFocus, ref.current])

    const handleClick = (event) => onClick && onClick({ value, name }, event)
    const handleBlur = (event) => onBlur && onBlur({ value, name }, event)
    const handleFocus = (event) => onFocus && onFocus({ value, name }, event)
    const handleKeyDown = (event) =>
        onKeyDown && onKeyDown({ value, name }, event)

    const iconOnly = icon && !children
    const buttonClassName = cx(className, {
        primary,
        secondary,
        destructive,
        small,
        large,
        'icon-only': iconOnly,
        toggled,
        loading: loading,
    })

    return (
        <button
            ref={ref}
            name={name}
            className={buttonClassName}
            data-test={dataTest}
            disabled={disabled || loading}
            tabIndex={tabIndex}
            type={type}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            {...otherProps}
        >
            {loading && (
                <span className="loader">
                    {destructive || primary ? (
                        <CircularLoader extrasmall invert />
                    ) : (
                        <CircularLoader extrasmall />
                    )}
                </span>
            )}
            {icon && <span className="button-icon">{icon}</span>}
            {children}
            <style jsx>{styles}</style>
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    dataTest: 'dhis2-uicore-button',
}

Button.propTypes = {
    /** Component to render inside the button */
    children: PropTypes.node,
    /** A className that will be passed to the `<button>` element */
    className: PropTypes.string,
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest: PropTypes.string,
    /**
     * Applies 'destructive' button appearance, implying a dangerous action.
     */
    destructive: PropTypes.bool,
    /** Applies a greyed-out appearance and makes the button non-interactive  */
    disabled: PropTypes.bool,
    /** An icon element to display inside the button */
    icon: PropTypes.element,
    /** Use this variant to capture the initial focus on the page. */
    initialFocus: PropTypes.bool,
    /** Makes the button large. Mutually exclusive with `small` */
    large: sharedPropTypes.sizePropType,
    /** Sets the button into a loading state */
    loading: PropTypes.bool,
    /**
     * Sets `name` attribute on button element.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    name: PropTypes.string,
    /**
     * Applies 'primary' button appearance, implying the most important action.
     */
    primary: PropTypes.bool,
    /**
     * Applies 'secondary' button appearance.
     */
    secondary: PropTypes.bool,
    /** Makes the button small. Mutually exclusive with `large` prop */
    small: sharedPropTypes.sizePropType,
    /** Tab index for focusing the button with a keyboard */
    tabIndex: PropTypes.string,
    /** Changes appearance of button to an on/off state */
    toggled: PropTypes.bool,
    /** Sets `type` attribute on `<button>` element */
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    /**
     * Value associated with the button.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    value: PropTypes.string,
    /**
     * Callback to trigger on de-focus (blur).
     * Called with same args as `onClick`
     * */
    onBlur: PropTypes.func,
    /**
     * Callback to trigger on click.
     * Called with args `({ value, name }, event)`
     * */
    onClick: PropTypes.func,

    /** Callback to trigger on focus. Called with same args as `onClick` */
    onFocus: PropTypes.func,
    /** Callback to trigger on key-down. Called with same args as `onClick` */
    onKeyDown: PropTypes.func,
}
