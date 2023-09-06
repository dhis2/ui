import * as React from 'react'

export interface EventPayload {
    value: string | undefined | null
    name: string | undefined | null
    checked: boolean
}

type CheckboxEventHandler<Event extends React.SyntheticEvent> = (
    arg0: EventPayload,
    event: Event
) => void

type CheckboxFocusHandler = CheckboxEventHandler<
    React.FocusEvent<HTMLInputElement>
>
type CheckboxChangeHandler = CheckboxEventHandler<
    React.ChangeEvent<HTMLInputElement>
>
type CheckboxKeyHandler = CheckboxEventHandler<
    React.KeyboardEvent<HTMLInputElement>
>

export interface CheckboxProps {
    checked?: boolean
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    indeterminate?: boolean
    initialFocus?: boolean
    label?: React.ReactNode
    name?: string
    tabIndex?: string
    valid?: boolean
    value?: string
    warning?: any
    onBlur?: CheckboxFocusHandler
    /**
     * Called with signature `(object, event)`
     */
    onChange?: CheckboxChangeHandler
    onFocus?: CheckboxFocusHandler
    onKeyDown?: CheckboxKeyHandler
}

export class Checkbox extends React.Component<CheckboxProps, any> {
    render(): JSX.Element
}

export interface CheckboxFieldProps {
    checked?: boolean
    className?: string
    dataTest?: string
    /**
     * Smaller dimensions for information-dense layouts
     */
    dense?: boolean
    /**
     * Disables the checkbox
     */
    disabled?: boolean
    /**
     * Applies 'error' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    /**
     * Useful instructions for the user
     */
    helpText?: string
    initialFocus?: boolean
    /**
     * Labels the checkbox
     */
    label?: React.ReactNode
    /**
     * Name associate with the checkbox. Passed in object as argument to event handlers
     */
    name?: string
    /**
     * Adds an asterisk to indicate this field is required
     */
    required?: boolean
    tabIndex?: string
    /**
     * Applies 'valid' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Adds text below the checkbox to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses
     */
    validationText?: string
    /**
     * Value associated with the checkbox. Passed in object as argument to event handlers
     */
    value?: string
    /**
     * Applies 'warning' styling to checkbox and validation text for feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onBlur?: CheckboxFocusHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onChange?: CheckboxChangeHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onFocus?: CheckboxFocusHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onKeyDown?: CheckboxKeyHandler
}

export const CheckboxField: React.FC<CheckboxFieldProps>
