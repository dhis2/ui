import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styles from './button.styles.js'

/**
 * @module
 * @param {Button.PropTypes} props
 *
 * @returns {React.Component}
 *
 * @example import { Button } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/button.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/button-basic--default|Storybook}
 */
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
}) => {
    const ref = useRef()

    useEffect(() => {
        if (initialFocus && ref.current) ref.current.focus()
    }, [initialFocus, ref.current])

    const handleClick = event => onClick && onClick({ value, name }, event)
    const handleBlur = event => onBlur && onBlur({ value, name }, event)
    const handleFocus = event => onFocus && onFocus({ value, name }, event)

    const iconOnly = icon && !children
    const buttonClassName = cx(className, {
        primary,
        secondary,
        destructive,
        small,
        large,
        'icon-only': iconOnly,
        toggled,
    })

    return (
        <button
            ref={ref}
            name={name}
            className={buttonClassName}
            data-test={dataTest}
            disabled={disabled}
            tabIndex={tabIndex}
            type={type}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
        >
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} [children] The children to render in the button
 * @prop {function} [onClick] The click handler
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 *
 * @prop {string} [className]
 * @prop {string} [name]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {string} [type=button] Type of button: `submit`, `reset`, or
 * `button`
 *
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 *
 * @prop {boolean} [disabled] Disable the button
 * @prop {Element} [icon]
 *
 * @prop {string} [dataTest]
 * @prop {boolean} [initialFocus] Grants the button the initial focus
 * state
 */
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
     * Indicates that the button makes potentially dangerous
     * deletions or data changes.
     * Mutually exclusive with `primary` and `secondary` props
     */
    destructive: sharedPropTypes.buttonVariantPropType,
    /** Applies a greyed-out appearance and makes the button non-interactive  */
    disabled: PropTypes.bool,
    /** An icon element to display inside the button */
    icon: PropTypes.element,
    /** Use this variant to capture the initial focus on the page. */
    initialFocus: PropTypes.bool,
    /** Makes the button large. Mutually exclusive with `small` */
    large: sharedPropTypes.sizePropType,
    /**
     * Sets `name` attribute on button element.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    name: PropTypes.string,
    /**
     * Applies 'primary' button appearance.
     * Mutually exclusive with `destructive` and `secondary` props
     */
    primary: sharedPropTypes.buttonVariantPropType,
    /**
     * Applies 'secondary' button appearance.
     * Mutually exclusive with `primary` and `destructive` props
     */
    secondary: sharedPropTypes.buttonVariantPropType,
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
}
