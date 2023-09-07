import * as React from 'react'

type RadioEventPayload = {
    value?: string
    name?: string
    checked: boolean
}

type RadioEventHandler<Event extends React.SyntheticEvent> = (
    payload: RadioEventPayload,
    event: Event
) => void

type RadioFocusHandler = RadioEventHandler<React.FocusEvent<HTMLInputElement>>
type RadioChangeHandler = RadioEventHandler<React.ChangeEvent<HTMLInputElement>>
type RadioKeyHandler = RadioEventHandler<React.KeyboardEvent<HTMLInputElement>>

export interface RadioProps {
    checked?: boolean
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    /**
     * Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props
     */
    error?: boolean
    initialFocus?: boolean
    label?: React.ReactNode
    /**
     * Name associated with this element. Passed in object to event handler functions
     */
    name?: string
    tabIndex?: string
    /**
     * Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props
     */
    valid?: boolean
    /**
     * Value associated with this element. Passed in object to event handler functions
     */
    value?: string
    /**
     * Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with the signature `({ name: string, value: string, checked: bool }, event)`
     */
    onBlur?: RadioFocusHandler
    /**
     * Called with the signature `({ name: string, value: string, checked: bool }, event)`
     */
    onChange?: RadioChangeHandler
    /**
     * Called with the signature `({ name: string, value: string, checked: bool }, event)`
     */
    onFocus?: RadioFocusHandler
    /**
     * Called with the signature `({ name: string, value: string, checked: bool }, event)`
     */
    onKeyDown?: RadioKeyHandler
}

export class Radio extends React.Component<RadioProps, any> {
    render(): JSX.Element
}
