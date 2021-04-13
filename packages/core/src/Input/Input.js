import { theme, colors, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { StatusIcon } from '../Icons/index.js'

const styles = css`
    .input {
        display: flex;
        align-items: center;
    }

    input {
        box-sizing: border-box;

        font-size: 14px;
        line-height: 16px;
        user-select: text;

        color: ${colors.grey900};
        background-color: white;

        padding: 12px 11px 10px;

        outline: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 1px 2px 0 rgba(48, 54, 60, 0.1);
        text-overflow: ellipsis;
    }

    input.dense {
        padding: 8px 11px 6px;
    }

    input:focus {
        border-color: ${colors.teal400};
    }

    input.valid {
        border-color: ${theme.valid};
    }

    input.warning {
        border-color: ${theme.warning};
    }

    input.error {
        border-color: ${theme.error};
    }

    input.read-only {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        cursor: text;
    }

    input.disabled {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .status-icon {
        flex-shrink: 0;
        flex-grow: 0;
        margin-left: ${spacers.dp4};
    }
`

/**
 * @module
 * @param {Input.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Input } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/inputfield--default|Storybook}
 */
export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    handleChange = e => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = e => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = e => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(e), e)
        }
    }

    createHandlerPayload(e) {
        return {
            value: e.target.value,
            name: this.props.name,
        }
    }

    render() {
        const {
            role,
            className,
            type,
            dense,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            max,
            min,
            step,
            dataTest,
            list,
        } = this.props

        return (
            <div className={cx('input', className)} data-test={dataTest}>
                <input
                    role={role}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.inputRef}
                    type={type}
                    value={value}
                    max={max}
                    min={min}
                    step={step}
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    className={cx({
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                    list={list}
                />

                <div className="status-icon">
                    <StatusIcon
                        error={error}
                        valid={valid}
                        loading={loading}
                        warning={warning}
                    />
                </div>

                <style jsx>{styles}</style>
                <style jsx>{`
                    input {
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    dataTest: 'dhis2-uicore-input',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [role]
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 *
 * @prop {string} [max] The native `max` attribute
 * @prop {string} [min] The native `min` attribute
 * @prop {string} [step] The native `step` attribute
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [readOnly]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {string} [dataTest]
 */
Input.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Makes the input smaller */
    dense: PropTypes.bool,
    /** Disables the input */
    disabled: PropTypes.bool,
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error: sharedPropTypes.statusPropType,
    /** The input grabs initial focus on the page */
    initialFocus: PropTypes.bool,
    /** The [native `list` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeflist) */
    list: PropTypes.string,
    /** Adds a loading indicator beside the input */
    loading: PropTypes.bool,
    /** The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax), for use when `type` is `'number'` */
    max: PropTypes.string,
    /** The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin), for use when `type` is `'number'` */
    min: PropTypes.string,
    /** Name associated with the input. Passed to event handler callbacks in object */
    name: PropTypes.string,
    /** Placeholder text for the input */
    placeholder: PropTypes.string,
    /** Makes the input read-only */
    readOnly: PropTypes.bool,
    /** Sets a role attribute on the input */
    role: PropTypes.string,
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefstep), for use when `type` is `'number'` */
    step: PropTypes.string,
    tabIndex: PropTypes.string,
    /** The native input `type` attribute */
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'email',
        'url',
        'tel',
        'date',
        'datetime',
        'datetime-local',
        'month',
        'week',
        'time',
        'search',
    ]),
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object */
    value: PropTypes.string,
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus: PropTypes.func,
}
