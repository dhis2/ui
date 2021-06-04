import { theme, colors, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'

// TODO: use ui-icons
function Valid({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.valid};
                }
            `}</style>
        </svg>
    )
}

Valid.propTypes = {
    className: PropTypes.string,
}

function Warning({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.warning};
                }
            `}</style>
        </svg>
    )
}

Warning.propTypes = {
    className: PropTypes.string,
}

function Error({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.error};
                }
            `}</style>
        </svg>
    )
}

Error.propTypes = {
    className: PropTypes.string,
}

function Info({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.info};
                }
            `}</style>
        </svg>
    )
}

Info.propTypes = {
    className: PropTypes.string,
}

function Loading({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="22 22 44 44"
            className={className}
        >
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
            <style jsx>{`
                svg {
                    fill: ${theme.primary600};
                    color: ${theme.primary600};
                    width: 24px;
                    height: 24px;
                    animation: anim-rotate 1.4s linear infinite;
                }

                .circle {
                    stroke: currentColor;
                    stroke-dasharray: 80px, 200px;
                    stroke-dashoffset: 0;
                    animation: anim-dash 1.4s ease-in-out infinite;
                }

                @keyframes anim-rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes anim-dash {
                    0% {
                        stroke-dasharray: 1px, 200px;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -15px;
                    }
                    100% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -120px;
                    }
                }
            `}</style>
        </svg>
    )
}

Loading.propTypes = {
    className: PropTypes.string,
}

const StatusIcon = ({
    error,
    warning,
    valid,
    loading,
    info,
    className,
    defaultTo,
}) => {
    if (error) {
        return <Error className={className} />
    }
    if (warning) {
        return <Warning className={className} />
    }
    if (valid) {
        return <Valid className={className} />
    }
    if (loading) {
        return <Loading className={className} />
    }
    if (info) {
        return <Info className={className} />
    }

    return defaultTo
}

StatusIcon.defaultProps = {
    defaultTo: null,
}

StatusIcon.propTypes = {
    className: PropTypes.string,
    defaultTo: PropTypes.element,
    error: PropTypes.bool,
    info: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

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
