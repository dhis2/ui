import * as React from 'react'

export type InputType =
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'url'
    | 'tel'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'search'

export interface ValueNameObject {
    value: string | undefined | null
    name: string | undefined | null
}

type InputEventHandler<Event extends React.SyntheticEvent> = (
    arg0: ValueNameObject,
    event: Event
) => void

type InputFocusHandler = InputEventHandler<React.FocusEvent<HTMLInputElement>>
type InputChangeHandler = InputEventHandler<React.ChangeEvent<HTMLInputElement>>
type InputKeyHandler = InputEventHandler<React.KeyboardEvent<HTMLInputElement>>

export interface InputProps {
    /**
     * The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)
     */
    autoComplete?: string
    className?: string
    dataTest?: string
    /**
     * Makes the input smaller
     */
    dense?: boolean
    /**
     * Disables the input
     */
    disabled?: boolean
    /**
     * Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    /**
     * The input grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Adds a loading indicator beside the input
     */
    loading?: boolean
    /**
     * The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`
     */
    max?: string
    /**
     * The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`
     */
    min?: string
    /**
     * Name associated with the input. Passed to event handler callbacks in object
     */
    name?: string
    /**
     * Placeholder text for the input
     */
    placeholder?: string
    /**
     * Makes the input read-only
     */
    readOnly?: boolean
    /**
     * Sets a role attribute on the input
     */
    role?: string
    /**
     * The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'`
     */
    step?: string
    tabIndex?: string
    /**
     * The native input `type` attribute
     */
    type?: InputType
    /**
     * Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props
     */
    valid?: boolean
    /**
     * Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object
     */
    value?: string
    /**
     * Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onBlur?: InputFocusHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onChange?: InputChangeHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onFocus?: InputFocusHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onKeyDown?: InputKeyHandler
}

export class Input extends React.Component<InputProps, any> {
    render(): JSX.Element
}

export interface InputFieldProps {
    /**
     * The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)
     */
    autoComplete?: string
    className?: string
    dataTest?: string
    /**
     * Makes the input smaller
     */
    dense?: boolean
    /**
     * Disables the input
     */
    disabled?: boolean
    /**
     * Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    /**
     * Guiding text for how to use this input
     */
    helpText?: string
    /**
     * The input grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Defines the width of the input. Can be any valid CSS measurement
     */
    inputWidth?: string
    /**
     * Label text for the input
     */
    label?: string
    /**
     * Adds a loading indicator beside the input
     */
    loading?: boolean
    /**
     * The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`
     */
    max?: string
    /**
     * The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`
     */
    min?: string
    /**
     * Name associated with the input. Passed to event handler callbacks in object
     */
    name?: string
    /**
     * Placeholder text for the input
     */
    placeholder?: string
    /**
     * Makes the input read-only
     */
    readOnly?: boolean
    /**
     * Indicates this input is required
     */
    required?: boolean
    /**
     * The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'`
     */
    step?: string
    tabIndex?: string
    /**
     * Type of input
     */
    type?: InputType
    /**
     * Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props
     */
    valid?: boolean
    /**
     * Text below input for validation feedback. Receives styles depending on validation status
     */
    validationText?: string
    /**
     * Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object
     */
    value?: string
    /**
     * Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onBlur?: InputFocusHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onChange?: InputChangeHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onFocus?: InputFocusHandler
    /**
     * Called with signature `({ name: string, value: string }, event)`
     */
    onKeyDown?: InputKeyHandler
}

export class InputField extends React.Component<InputFieldProps, any> {
    render(): JSX.Element
}
