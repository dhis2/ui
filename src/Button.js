import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'

import { buttonVariantPropType, sizePropType } from './common-prop-types.js'
import styles from './Button/styles.js'

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
export class Button extends Component {
    buttonRef = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.buttonRef.current.focus()
        }
    }

    handleClick = e => {
        if (this.props.onClick) {
            this.props.onClick(this.createHandlerPayload(), e)
        }
    }

    handleBlur = e => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(), e)
        }
    }

    handleFocus = e => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(), e)
        }
    }

    createHandlerPayload() {
        return {
            value: this.props.value,
            name: this.props.name,
        }
    }

    render() {
        const {
            children,
            className,
            dataTest,
            destructive,
            disabled,
            icon,
            large,
            name,
            primary,
            secondary,
            small,
            tabIndex,
            type,
            value,
        } = this.props

        return (
            <button
                className={cx(className, {
                    primary,
                    secondary,
                    destructive,
                    small,
                    large,
                    'icon-only': icon && !children,
                    icon,
                })}
                data-test={dataTest}
                disabled={disabled}
                name={name}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                ref={this.buttonRef}
                tabIndex={tabIndex}
                type={type}
                value={value}
            >
                {icon && <span className="button-icon">{icon}</span>}
                {children}

                <style jsx>{styles}</style>
            </button>
        )
    }
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
    destructive: buttonVariantPropType,
    disabled: propTypes.bool,
    icon: propTypes.element,
    initialFocus: propTypes.bool,
    large: sizePropType,
    name: propTypes.string,
    primary: buttonVariantPropType,
    secondary: buttonVariantPropType,
    small: sizePropType,
    tabIndex: propTypes.string,
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    value: propTypes.string,
    onBlur: propTypes.func,
    onClick: propTypes.func,
    onFocus: propTypes.func,
}
