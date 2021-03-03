import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
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
            checked = false,
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
                    type="checkbox"
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
                        cursor: pointer;
                        pointer-events: all;
                        user-select: none;
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
                        pointer-events: none;
                        position: absolute;
                    }

                    .icon {
                        pointer-events: none;
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
    dataTest: 'dhis2-uicore-switch',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [value]
 * @prop {Node} [label]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {string} [name]
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
    checked: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Makes the switch smaller for information-dense layouts */
    dense: PropTypes.bool,
    /** Disables the switch */
    disabled: PropTypes.bool,
    /** Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types */
    error: sharedPropTypes.statusPropType,
    /** Grab initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Label for the switch. Can be a string or an element, for example an image */
    label: PropTypes.node,
    /** Name associated with the switch. Passed to event handlers in object */
    name: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types */
    valid: sharedPropTypes.statusPropType,
    /** Value associated with the switch. Passed to event handlers in object */
    value: PropTypes.string,
    /** Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onFocus: PropTypes.func,
}

export { Switch }
