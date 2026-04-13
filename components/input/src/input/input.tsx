import { theme, colors, spacers } from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import { StatusIcon } from '@dhis2-ui/status-icon'
import cx from 'classnames'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { inputTypes, InputType } from './inputTypes.ts'

export { inputTypes }
export type { InputType }

interface InputEventPayload {
    value: string
    name?: string
}

export interface InputProps {
    /** Add an aria-controls attribute to the input element **/
    ariaControls?: string
    /** Add an aria-haspopup attribute to the input element **/
    ariaHaspopup?:
        | boolean
        | 'false'
        | 'true'
        | 'menu'
        | 'listbox'
        | 'tree'
        | 'grid'
        | 'dialog'
    /** Add an aria-label attribute to the input element **/
    ariaLabel?: string
    /** The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete) */
    autoComplete?: string
    className?: string
    /** Makes the input field clearable */
    clearable?: boolean
    dataTest?: string
    /** Makes the input smaller */
    dense?: boolean
    /** Disables the input */
    disabled?: boolean
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error?: boolean
    /** The input grabs initial focus on the page */
    initialFocus?: boolean
    /** Adds a loading indicator beside the input */
    loading?: boolean
    /** The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'` */
    max?: string
    /** The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'` */
    min?: string
    /** Name associated with the input. Passed to event handler callbacks in object */
    name?: string
    /** Placeholder text for the input */
    placeholder?: string
    /** Add prefix icon */
    prefixIcon?: React.ReactElement
    /** Makes the input read-only */
    readOnly?: boolean
    /** Sets a role attribute on the input */
    role?: string
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` */
    step?: string
    tabIndex?: string
    /** The native input `type` attribute */
    type?: InputType
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid?: boolean
    /** Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object */
    value?: string
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Defines the width of the input. Can be any valid CSS measurement */
    width?: string
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur?: (
        payload: InputEventPayload,
        event: React.FocusEvent<HTMLInputElement>
    ) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange?: (
        payload: InputEventPayload,
        event?: React.ChangeEvent<HTMLInputElement>
    ) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus?: (
        payload: InputEventPayload,
        event: React.FocusEvent<HTMLInputElement>
    ) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onKeyDown?: (
        payload: InputEventPayload,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => void
}

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

export class Input extends Component<InputProps> {
    static defaultProps = {
        type: 'text' as const,
        dataTest: 'dhis2-uicore-input',
    }

    inputRef = React.createRef<HTMLInputElement>()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current?.focus()
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(e), e)
        }
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    createHandlerPayload(
        e: React.SyntheticEvent<HTMLInputElement>
    ): InputEventPayload {
        return {
            value: (e.target as HTMLInputElement).value,
            name: this.props.name,
        }
    }

    render() {
        const {
            role,
            ariaLabel,
            ariaControls,
            ariaHaspopup,
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
                    aria-label={ariaLabel}
                    aria-controls={ariaControls}
                    aria-haspopup={ariaHaspopup}
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
                    tabIndex={tabIndex != null ? Number(tabIndex) : undefined}
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
