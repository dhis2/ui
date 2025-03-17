import { theme, colors, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import { StatusIcon } from '@dhis2-ui/status-icon'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { inputTypes } from './inputTypes.js'

const styles = css`
    .input {
        display: inline-flex;
        align-items: center;
        position: relative;
        gap: ${spacers.dp8};
    }

    input {
        box-sizing: border-box;

        font-size: 14px;
        line-height: 16px;
        user-select: text;

        color: ${colors.grey900};
        background-color: white;

        padding: 11px 12px;
        max-height: 40px;

        outline: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
        text-overflow: ellipsis;
    }

    input.dense {
        max-height: 32px;
        padding: 7px 8px;
    }

    input:focus {
        outline: none;
        box-shadow: inset 0 0 0 2px ${theme.focus};
        border-color: ${theme.focus};
    }

    input::placeholder {
        color: ${colors.grey600};
        opacity: 1;
    }

    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='time']::-webkit-inner-spin-button,
    input[type='time']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-webkit-inner-spin-button,
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
        height: 14px;
        padding-top: 1px;
        padding-bottom: 1px;
    }

    input[type='date']::-webkit-datetime-edit-fields-wrapper,
    input[type='datetime-local']::-webkit-datetime-edit-fields-wrapper,
    input[type='time']::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
    }

    input.warning {
        border-color: ${theme.warning};
    }

    input.error {
        border-color: ${theme.error};
    }

    input.read-only {
        background-color: ${colors.grey050};
        border-color: ${colors.grey300};
        box-shadow: none;
        cursor: text;
    }

    input.disabled {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        color: ${theme.disabled};
        cursor: not-allowed;
    }
`

export class Input extends Component {
    static defaultProps = {
        type: 'text',
        dataTest: 'dhis2-uicore-input',
    }

    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = (e) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = (e) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(e), e)
        }
    }

    handleKeyDown = (e) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.createHandlerPayload(e), e)
        }
    }

    handleClear = () => {
        if (this.props.onChange) {
            this.props.onChange({
                value: '',
                name: this.props.name,
            })
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
            type = 'text',
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
            autoComplete,
            dataTest = 'dhis2-uicore-input',
            clearable,
            prefixIcon,
            width,
        } = this.props

        const statusIcon = error || loading || valid || warning
        const clearButtonPadding = statusIcon ? '40px' : '10px'

        return (
            <div
                className={cx(
                    'input',
                    className,
                    { 'input-prefix-icon': prefixIcon },
                    { 'input-clearable': clearable }
                )}
                data-test={dataTest}
            >
                {prefixIcon && <span className="prefix">{prefixIcon}</span>}
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
                    autoComplete={autoComplete}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    className={cx({
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                />
                {clearable && value?.length ? (
                    <button
                        type="button"
                        onClick={this.handleClear}
                        className="clear-button"
                    >
                        <IconCross16 color={colors.white} />
                    </button>
                ) : null}
                <StatusIcon
                    error={error}
                    valid={valid}
                    loading={loading}
                    warning={warning}
                />

                <style jsx>{styles}</style>
                <style jsx>{`
                    .input {
                        width: ${width || `100%`};
                    }

                    input {
                        width: 100%;
                    }

                    .input-prefix-icon input {
                        padding-inline-start: 30px;
                    }

                    .input-clearable input {
                        padding-inline-end: 30px;
                    }

                    .prefix {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        pointer-events: none;
                        inset-inline-start: 10px;
                        padding: 0;
                        color: ${colors.grey600};
                    }

                    .clear-button {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        cursor: pointer;
                        height: 16px;
                        width: 16px;
                        border-radius: 50%;
                        inset-inline-end: ${clearButtonPadding};
                        background: ${colors.grey500};
                        padding: 1px;
                    }
                `}</style>
            </div>
        )
    }
}

Input.propTypes = {
    /** The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete) */
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    /** Makes the input field clearable */
    clearable: PropTypes.bool,
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
    /** The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'` */
    max: PropTypes.string,
    /** The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'` */
    min: PropTypes.string,
    /** Name associated with the input. Passed to event handler callbacks in object */
    name: PropTypes.string,
    /** Placeholder text for the input */
    placeholder: PropTypes.string,
    /** Add prefix icon */
    prefixIcon: PropTypes.element,
    /** Makes the input read-only */
    readOnly: PropTypes.bool,
    /** Sets a role attribute on the input */
    role: PropTypes.string,
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` */
    step: PropTypes.string,
    tabIndex: PropTypes.string,
    /** The native input `type` attribute */
    type: PropTypes.oneOf(inputTypes),
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object */
    value: PropTypes.string,
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Defines the width of the input. Can be any valid CSS measurement */
    width: PropTypes.string,
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onKeyDown: PropTypes.func,
}
