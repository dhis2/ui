import * as React from 'react'

export interface FieldProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Disabled status, shown when mouse is over label
     */
    disabled?: boolean
    /**
     * Field status. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    /**
     * Useful text within the field
     */
    helpText?: string
    /**
     * Label at the top of the field
     */
    label?: string
    /**
     * `name` will become the target of the `for`/`htmlFor` attribute on the `<label>` element
     */
    name?: string
    /**
     * Inidcates this field is required
     */
    required?: boolean
    /**
     * Field status. Mutually exclusive with `error` and `warning` props
     */
    valid?: boolean
    /**
     * Feedback given related to validation status of field
     */
    validationText?: string
    /**
     * Field status. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
}

export const Field: React.FC<FieldProps>

export interface FieldGroupProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Disables the form controls within
     */
    disabled?: boolean
    /**
     * Applies 'error' styling to validation text for feedback. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    /**
     * Useful instructions for the user
     */
    helpText?: string
    /**
     * Labels the Field Group
     */
    label?: string
    /**
     * Name associate with the Field Group. Passed in object as argument to event handlers
     */
    name?: string
    /**
     * Adds an asterisk to indicate this field is required
     */
    required?: boolean
    /**
     * Applies 'valid' styling to validation text for feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Adds text at the bottom of the field to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses
     */
    validationText?: string
    /**
     * Applies 'warning' styling to validation text for feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
}

export const FieldGroup: React.FC<FieldGroupProps>

export interface FieldSetProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const FieldSet: React.FC<FieldSetProps>
