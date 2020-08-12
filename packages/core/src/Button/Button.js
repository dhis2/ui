import { sharedPropTypes } from '@dhis2/ui-constants'
import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'

import styles from './Button.styles.js'

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
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    destructive: sharedPropTypes.buttonVariantPropType,
    disabled: propTypes.bool,
    icon: propTypes.element,
    initialFocus: propTypes.bool,
    large: sharedPropTypes.sizePropType,
    name: propTypes.string,
    primary: sharedPropTypes.buttonVariantPropType,
    secondary: sharedPropTypes.buttonVariantPropType,
    small: sharedPropTypes.sizePropType,
    tabIndex: propTypes.string,
    toggled: propTypes.bool,
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    value: propTypes.string,
    onBlur: propTypes.func,
    onClick: propTypes.func,
    onFocus: propTypes.func,
}
