import { Field } from '@dhis2-ui/field'
import { Required } from '@dhis2-ui/required'
import React from 'react'
import { Switch } from '../switch/index.ts'

interface AddRequiredProps {
    dataTest?: string
    label?: React.ReactNode
    required?: boolean
}

const AddRequired = ({ label, required, dataTest }: AddRequiredProps) => (
    <React.Fragment>
        {label}
        {required && <Required dataTest={`${dataTest}-required`} />}
    </React.Fragment>
)

interface SwitchFieldHandlerPayload {
    value?: string
    name?: string
    checked: boolean
}

export interface SwitchFieldProps {
    checked?: boolean
    className?: string
    dataTest?: string
    /** Smaller dimensions for information-dense layouts */
    dense?: boolean
    /** Disables the switch */
    disabled?: boolean
    /** Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props */
    error?: boolean
    /** Useful instructions for the user */
    helpText?: string
    initialFocus?: boolean
    /** Labels the switch */
    label?: React.ReactNode
    /** Name associate with the switch. Passed in object as argument to event handlers */
    name?: string
    /** Adds an asterisk to indicate this field is required */
    required?: boolean
    tabIndex?: number
    /** Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses */
    validationText?: string
    /** Value associated with the switch. Passed in object as argument to event handlers */
    value?: string
    /** Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onBlur?: (payload: SwitchFieldHandlerPayload, event: React.FocusEvent<HTMLInputElement>) => void
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onChange?: (payload: SwitchFieldHandlerPayload, event: React.ChangeEvent<HTMLInputElement>) => void
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onFocus?: (payload: SwitchFieldHandlerPayload, event: React.FocusEvent<HTMLInputElement>) => void
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onKeyDown?: (payload: SwitchFieldHandlerPayload, event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SwitchField = ({
    value,
    label,
    name,
    className,
    tabIndex,
    onChange,
    onFocus,
    onKeyDown,
    onBlur,
    checked,
    disabled,
    valid,
    warning,
    error,
    dense,
    initialFocus,
    required,
    helpText,
    validationText,
    dataTest = 'dhis2-uiwidgets-switchfield',
}: SwitchFieldProps) => (
    <Field
        className={className}
        dataTest={dataTest}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
        required={required}
        name={name}
        disabled={disabled}
    >
        <Switch
            value={value}
            label={
                <AddRequired
                    label={label}
                    required={required}
                    dataTest={dataTest}
                />
            }
            name={name}
            tabIndex={tabIndex}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            checked={checked}
            disabled={disabled}
            valid={valid}
            warning={warning}
            error={error}
            dense={dense}
            initialFocus={initialFocus}
        />
    </Field>
)

export { SwitchField }
