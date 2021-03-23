import propTypes from '@dhis2/prop-types'
import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { SwitchRegular } from '../Icons/index.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {Switch.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Switch } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switch--default|Storybook}
 */
class Switch extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current.focus()
        }
    }

    handleChange = e => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
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
            checked: !this.props.checked,
        }
    }

    render() {
        const {
            ariaLabel,
            checked,
            className,
            disabled,
            error,
            label,
            name,
            tabIndex,
            valid,
            value,
            warning,
            dense,
            dataTest,
            role,
        } = this.props

        const classes = cx({
            checked,
            disabled,
            valid,
            error,
            warning,
            dense,
        })

        return (
            <label
                className={cx(className, {
                    disabled,
                    dense,
                })}
                data-test={dataTest}
            >
                <input
                    aria-label={ariaLabel}
                    type="checkbox"
                    role={role}
                    ref={this.ref}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />

                <div className={cx('icon', { dense })}>
                    <SwitchRegular className={classes} />
                </div>

                {label}

                <style jsx>{`
                    label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        color: ${colors.grey900};
                        font-size: 16px;
                        line-height: 20px;
                    }

                    label.dense {
                        font-size: 14px;
                        line-height: 16px;
                    }

                    label.disabled {
                        cursor: not-allowed;
                        color: ${theme.disabled};
                    }

                    input {
                        opacity: 0;
                        position: absolute;

                        /* The same size as the icon */
                        height: 18px;
                        width: 35px;

                        /* The same offset as the icon, 2px border, 1px padding */
                        margin-left: 3px;
                    }

                    label.dense input {
                        /* The same size as the dense icon */
                        height: 14px;
                        width: 27px;
                    }

                    .icon {
                        user-select: none;
                        margin-right: 5px;
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 14px;
                    }

                    label.dense .icon {
                        margin-right: 3px;
                        border-radius: 12px;
                    }

                    input:focus + .icon {
                        border-color: ${colors.blue600};
                    }
                `}</style>
            </label>
        )
    }
}

Switch.defaultProps = {
    checked: false,
    dataTest: 'dhis2-uicore-switch',
    role: 'switch',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [ariaLabel]
 * @prop {string} [value]
 * @prop {Node} [label]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {string} [name]
 * @prop {string} [role]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [checked]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {string} [dataTest]
 */
Switch.propTypes = {
    ariaLabel: propTypes.string,
    checked: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    initialFocus: propTypes.bool,
    label: propTypes.node,
    name: propTypes.string,
    role: propTypes.string,
    tabIndex: propTypes.string,
    valid: sharedPropTypes.statusPropType,
    value: propTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { Switch }
