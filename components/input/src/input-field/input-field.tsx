import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import React from 'react'
import { Input, InputType, inputTypes } from '../input/index.ts'

export { inputTypes }

interface InputEventPayload {
    value: string
    name?: string
}

export interface InputFieldProps {
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
    /** Guiding text for how to use this input */
    helpText?: string
    /** The input grabs initial focus on the page */
    initialFocus?: boolean
    /** Defines the width of the input. Can be any valid CSS measurement */
    inputWidth?: string
    /** Label text for the input */
    label?: string
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
    /** Indicates this input is required */
    required?: boolean
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` */
    step?: string
    tabIndex?: string
    /** Type of input */
    type?: InputType
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid?: boolean
    /** Text below input for validation feedback. Receives styles depending on validation status */
    validationText?: string
    /** Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object */
    value?: string
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
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

class InputField extends React.Component<InputFieldProps> {
    static defaultProps = {
        dataTest: 'dhis2-uiwidgets-inputfield',
    }

    render() {
        const {
            className,
            onChange,
            onFocus,
            onKeyDown,
            onBlur,
            initialFocus,
            type,
            dense,
            required,
            label,
            disabled,
            readOnly,
            placeholder,
            name,
            max,
            min,
            step,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
            inputWidth,
            autoComplete,
            clearable,
            prefixIcon,
            dataTest = 'dhis2-uiwidgets-inputfield',
        } = this.props

        return (
            <Field
                className={className}
                dataTest={dataTest}
                error={error}
                warning={warning}
                valid={valid}
                helpText={helpText}
                validationText={validationText}
                label={label}
                name={name}
                disabled={disabled}
                required={required}
            >
                <Box width={inputWidth} minWidth="72px">
                    <Input
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        onBlur={onBlur}
                        onChange={onChange}
                        name={name}
                        type={type}
                        value={value || ''}
                        placeholder={placeholder}
                        disabled={disabled}
                        max={max}
                        min={min}
                        step={step}
                        valid={valid}
                        warning={warning}
                        error={error}
                        loading={loading}
                        dense={dense}
                        tabIndex={tabIndex}
                        initialFocus={initialFocus}
                        readOnly={readOnly}
                        autoComplete={autoComplete}
                        clearable={clearable}
                        prefixIcon={prefixIcon}
                        width={inputWidth}
                    />
                </Box>
            </Field>
        )
    }
}

export { InputField }
