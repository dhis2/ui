import * as React from 'react'

export interface SwitchEventPayload {
    value?: string
    name?: string
    checked: boolean
}

type SwitchEventHandler<Event extends React.SyntheticEvent> = (
    arg0: SwitchEventPayload,
    event: Event
) => void

type SwitchFocusHandler = SwitchEventHandler<React.FocusEvent<HTMLInputElement>>
type SwitchChangeHandler = SwitchEventHandler<
    React.ChangeEvent<HTMLInputElement>
>
type SwitchKeyHandler = SwitchEventHandler<
    React.KeyboardEvent<HTMLInputElement>
>

export interface SwitchProps {
    /**
     * Sets an aria-label attribute on the input
     */
    ariaLabel?: string
    checked?: boolean
    className?: string
    dataTest?: string
    /**
     * Makes the switch smaller for information-dense layouts
     */
    dense?: boolean
    /**
     * Disables the switch
     */
    disabled?: boolean
    /**
     * Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types
     */
    error?: boolean
    /**
     * Grab initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Label for the switch. Can be a string or an element, for example an image
     */
    label?: React.ReactNode
    /**
     * Name associated with the switch. Passed to event handlers in object
     */
    name?: string
    /**
     * Sets a role attribute on the input
     */
    role?: string
    tabIndex?: string
    /**
     * Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types
     */
    valid?: boolean
    /**
     * Value associated with the switch. Passed to event handlers in object
     */
    value?: string
    /**
     * Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types
     */
    warning?: boolean
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onBlur?: SwitchFocusHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onChange?: SwitchChangeHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onFocus?: SwitchFocusHandler
    /**
     * Called with signature `({ name: string, value: string, checked: bool }, event)`
     */
    onKeyDown?: SwitchKeyHandler
}

export class Switch extends React.Component<SwitchProps, any> {
    render(): JSX.Element
}

export interface SwitchFieldProps {
    checked?: boolean
    className?: string
    dataTest?: string
    /**
     * Smaller dimensions for information-dense layouts
     */
    dense?: boolean
    /**
     * Disables the switch
     */
    disabled?: boolean
    /**
     * Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    /**
     * Useful instructions for the user
     */
    helpText?: string
    initialFocus?: boolean
    /**
     * Labels the switch
     */
    label?: React.ReactNode
    /**
     * Name associate with the switch. Passed in object as argument to event handlers
     */
    name?: string
    /**
     * Adds an asterisk to indicate this field is required
     */
    required?: boolean
    tabIndex?: string
    /**
     * Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses
     */
    validationText?: string
    /**
     * Value associated with the switch. Passed in object as argument to event handlers
     */
    value?: string
    /**
     * Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature ({ name: string, value: string, checked: bool }, event)
     */
    onBlur?: SwitchFocusHandler
    /**
     * Called with signature ({ name: string, value: string, checked: bool }, event)
     */
    onChange?: SwitchChangeHandler
    /**
     * Called with signature ({ name: string, value: string, checked: bool }, event)
     */
    onFocus?: SwitchFocusHandler
    /**
     * Called with signature ({ name: string, value: string, checked: bool }, event)
     */
    onKeyDown?: SwitchKeyHandler
}

export const SwitchField: React.FC<SwitchFieldProps>
