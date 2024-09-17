import * as React from 'react'

export type TextAreaResize = 'none' | 'both' | 'horizontal' | 'vertical'

export interface TextAreaEventPayload {
    value?: string
    name?: string
}

export type TextAreaEventHandler<Event extends React.SyntheticEvent> = (
    payload: TextAreaEventPayload,
    event: Event
) => void

type TextAreaFocusHandler = TextAreaEventHandler<
    React.FocusEvent<HTMLInputElement>
>
type TextAreaChangeHandler = TextAreaEventHandler<
    React.ChangeEvent<HTMLInputElement>
>
type TextAreaKeyHandler = TextAreaEventHandler<
    React.KeyboardEvent<HTMLInputElement>
>

export interface TextAreaProps {
    /**
     * Grow the text area in response to overflow instead of adding a scroll bar
     */
    autoGrow?: boolean
    className?: string
    dataTest?: string
    /**
     * Compact mode
     */
    dense?: boolean
    /**
     * Disables the textarea and makes in non-interactive
     */
    disabled?: boolean
    /**
     * Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    /**
     * Grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Adds a loading spinner
     */
    loading?: boolean
    /**
     * Name associated with the text area. Passed in object argument to event handlers.
     */
    name?: string
    /**
     * Placeholder text for an empty textarea
     */
    placeholder?: string
    /**
     * Makes the textarea read-only
     */
    readOnly?: boolean
    /**
     * [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element
     */
    resize?: TextAreaResize
    /**
     * Initial height of the textarea, in lines of text
     */
    rows?: number
    tabIndex?: string
    /**
     * Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.
     */
    value?: string
    /**
     * Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Width of the text area. Can be any valid CSS measurement
     */
    width?: string
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onBlur?: TextAreaFocusHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onChange?: TextAreaChangeHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onFocus?: TextAreaFocusHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onKeyDown?: TextAreaKeyHandler
}

export class TextArea extends React.Component<TextAreaProps, any> {
    render(): JSX.Element
}

export interface TextAreaFieldProps {
    /**
     * Grow the text area in response to overflow instead of adding a scroll bar
     */
    autoGrow?: boolean
    className?: string
    dataTest?: string
    /**
     * Compact mode
     */
    dense?: boolean
    /**
     * Disables the textarea and makes in non-interactive
     */
    disabled?: boolean
    /**
     * Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    /**
     * Adds useful help text below the textarea
     */
    helpText?: string
    /**
     * Grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Sets the width of the textarea. Minimum 220px. Any valid CSS measurement can be used
     */
    inputWidth?: string
    /**
     * Labels the textarea
     */
    label?: string
    /**
     * Adds a loading spinner
     */
    loading?: boolean
    /**
     * Name associated with the text area. Passed in object argument to event handlers.
     */
    name?: string
    /**
     * Placeholder text for an empty textarea
     */
    placeholder?: string
    /**
     * Makes the textarea read-only
     */
    readOnly?: boolean
    /**
     * Adds an asterisk to the label to indicate this field is required
     */
    required?: boolean
    /**
     * [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element
     */
    resize?: TextAreaResize
    /**
     * Initial height of the textarea, in lines of text
     */
    rows?: number
    tabIndex?: string
    /**
     * Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Validation text below the textarea to provide validation feedback. Changes appearance depending on validation status
     */
    validationText?: string
    /**
     * Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.
     */
    value?: string
    /**
     * Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onBlur?: TextAreaFocusHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onChange?: TextAreaChangeHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onFocus?: TextAreaFocusHandler
    /**
     * Called with signature ({ name: string, value: string }, event)
     */
    onKeyDown?: TextAreaKeyHandler
}

export const TextAreaField: React.FC<TextAreaFieldProps>
