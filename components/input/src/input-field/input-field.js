import { sharedPropTypes } from '@dhis2/ui-constants'
import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import PropTypes from 'prop-types'
import React from 'react'
import { Input, inputTypes } from '../input/index.js'

class InputField extends React.Component {
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
                    />
                </Box>
            </Field>
        )
    }
}

const InputFieldProps = {
    /** The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete) */
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Makes the input smaller */
    dense: PropTypes.bool,
    /** Disables the input */
    disabled: PropTypes.bool,
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error: sharedPropTypes.statusPropType,
    /** Guiding text for how to use this input */
    helpText: PropTypes.string,
    /** The input grabs initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Defines the width of the input. Can be any valid CSS measurement */
    inputWidth: PropTypes.string,
    /** Label text for the input */
    label: PropTypes.string,
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
    /** Makes the input read-only */
    readOnly: PropTypes.bool,
    /** Indicates this input is required */
    required: PropTypes.bool,
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` */
    step: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Type of input */
    type: PropTypes.oneOf(inputTypes),
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Text below input for validation feedback. Receives styles depending on validation status */
    validationText: PropTypes.string,
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
    /** Called with signature `({ name: string, value: string }, event)` */
    onKeyDown: PropTypes.func,
}

InputField.propTypes = InputFieldProps

export { InputField, InputFieldProps }
