import React from 'react'
import { Field } from '../field/index.ts'
import { FieldSet } from '../field-set/index.ts'

export interface FieldGroupProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Disables the form controls within */
    disabled?: boolean
    /** Applies 'error' styling to validation text for feedback. Mutually exclusive with `warning` and `valid` props */
    error?: boolean
    /** Useful instructions for the user */
    helpText?: string
    /** Labels the Field Group */
    label?: string
    /** Name associate with the Field Group. Passed in object as argument to event handlers */
    name?: string
    /** Adds an asterisk to indicate this field is required */
    required?: boolean
    /** Applies 'valid' styling to validation text for feedback. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Adds text at the bottom of the field to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses */
    validationText?: string
    /** Applies 'warning' styling to validation text for feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
}

const FieldGroup = ({
    children,
    className,
    disabled,
    helpText,
    validationText,
    label,
    name,
    required,
    dataTest = 'dhis2-uiwidgets-fieldsetfield',
    valid,
    error,
    warning,
}: FieldGroupProps) => (
    <FieldSet {...({ classname: className } as Record<string, unknown>)} dataTest={dataTest}>
        <Field
            label={label}
            disabled={disabled}
            required={required}
            helpText={helpText}
            validationText={validationText}
            error={error}
            warning={warning}
            valid={valid}
            name={name}
        >
            {children}
        </Field>
    </FieldSet>
)

export { FieldGroup }
