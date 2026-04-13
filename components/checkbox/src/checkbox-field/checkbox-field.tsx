import { Field } from '@dhis2-ui/field'
import { Required } from '@dhis2-ui/required'
import React from 'react'
import { Checkbox } from '../checkbox/index.ts'

interface AddRequiredProps {
    label?: React.ReactNode
    required?: boolean
    dataTest?: string
}

const AddRequired = ({ label, required, dataTest }: AddRequiredProps) => (
    <React.Fragment>
        {label}
        {required && <Required dataTest={`${dataTest}-required`} />}
    </React.Fragment>
)

export interface CheckboxFieldProps {
    value?: string
    label?: React.ReactNode
    name?: string
    className?: string
    tabIndex?: string
    onChange?: (payload: { name?: string; value?: string; checked: boolean }, event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (payload: { name?: string; value?: string; checked: boolean }, event: React.FocusEvent<HTMLInputElement>) => void
    onKeyDown?: (payload: { name?: string; value?: string; checked: boolean }, event: React.KeyboardEvent<HTMLInputElement>) => void
    onBlur?: (payload: { name?: string; value?: string; checked: boolean }, event: React.FocusEvent<HTMLInputElement>) => void
    checked?: boolean
    disabled?: boolean
    valid?: boolean
    warning?: boolean
    error?: boolean
    dense?: boolean
    initialFocus?: boolean
    required?: boolean
    helpText?: string
    validationText?: string
    dataTest?: string
}

const CheckboxField = ({
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
    dataTest = 'dhis2-uiwidgets-checkboxfield',
}: CheckboxFieldProps) => (
    <Field
        className={className}
        dataTest={dataTest}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
        disabled={disabled}
    >
        <Checkbox
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

export { CheckboxField }
