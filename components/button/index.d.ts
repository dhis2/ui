import * as React from 'react'

export type ButtonType = 'submit' | 'reset' | 'button'

export interface ButtonEventPayload {
    value?: string
    name?: string
}

type ButtonEventHandler<Event extends React.SyntheticEvent> = (
    arg0: ButtonEventPayload,
    event: Event
) => void

type ButtonOpenEventHandler<
    Event extends React.SyntheticEvent = React.MouseEvent<HTMLButtonElement>
> = (arg0: ButtonEventPayload & { open: boolean }, event: Event) => void

export interface ButtonProps {
    /**
     * Component to render inside the button
     */
    children?: React.ReactNode
    /**
     * A className that will be passed to the `<button>` element
     */
    className?: string
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest?: string
    /**
     * Indicates that the button makes potentially dangerous
     * deletions or data changes.
     * Mutually exclusive with `primary` and `secondary` props
     */
    destructive?: boolean
    /**
     * Applies a greyed-out appearance and makes the button non-interactive
     */
    disabled?: boolean
    /**
     * An icon element to display inside the button
     */
    icon?: React.ReactElement
    /**
     * Use this variant to capture the initial focus on the page.
     */
    initialFocus?: boolean
    /**
     * Makes the button large. Mutually exclusive with `small`
     */
    large?: boolean
    /**
     * Sets the button into a loading state
     */
    loading?: boolean
    /**
     * Sets `name` attribute on button element.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    name?: string
    /**
     * Applies 'primary' button appearance.
     * Mutually exclusive with `destructive` and `secondary` props
     */
    primary?: boolean
    /**
     * Applies 'secondary' button appearance.
     * Mutually exclusive with `primary` and `destructive` props
     */
    secondary?: boolean
    /**
     * Makes the button small. Mutually exclusive with `large` prop
     */
    small?: boolean
    /**
     * Tab index for focusing the button with a keyboard
     */
    tabIndex?: string
    /**
     * Changes appearance of button to an on/off state
     */
    toggled?: boolean
    /**
     * Sets `type` attribute on `<button>` element
     */
    type?: ButtonType
    /**
     * Value associated with the button.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    value?: string
    /**
     * Callback to trigger on de-focus (blur).
     * Called with same args as `onClick`
     */
    onBlur?: ButtonEventHandler<React.FocusEvent<HTMLButtonElement>>
    /**
     * Callback to trigger on click.
     * Called with args `({ value, name }, event)`
     */
    onClick?: ButtonEventHandler<React.MouseEvent<HTMLButtonElement>>
    /**
     * Callback to trigger on focus. Called with same args as `onClick`
     */
    onFocus?: ButtonEventHandler<React.FocusEvent<HTMLButtonElement>>
    /**
     * Callback to trigger on key-down. Called with same args as `onClick`
     */
    onKeyDown?: ButtonEventHandler<React.KeyboardEvent<HTMLButtonElement>>
}

export const Button: React.FC<ButtonProps>

export interface ButtonStripProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Horizontal alignment for buttons. Mutually exclusive with `middle` prop
     */
    end?: boolean
    /**
     * Horizontal alignment. Mutually exclusive with `end` prop
     */
    middle?: boolean
}

export const ButtonStrip: React.FC<ButtonStripProps>

export type DropdownButtonType = 'submit' | 'reset' | 'button'

export interface DropdownButtonProps {
    /**
     * Children to render inside the buton
     */
    children?: React.ReactNode
    className?: string
    /**
     * Component to show/hide when button is clicked
     */
    component?: React.ReactElement<any>
    dataTest?: string
    /**
     * Button variant. Mutually exclusive with `primary` and `secondary` props
     */
    destructive?: boolean
    /**
     * Make the button non-interactive
     */
    disabled?: boolean
    icon?: React.ReactElement<any>
    /**
     * Grants button initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Button size. Mutually exclusive with `small` prop
     */
    large?: boolean
    name?: string
    /**
     * Controls popper visibility. When implementing this prop the component becomes a controlled component
     */
    open?: boolean
    /**
     * Button variant. Mutually exclusive with `destructive` and `secondary` props
     */
    primary?: boolean
    /**
     * Button variant. Mutually exclusive with `primary` and `destructive` props
     */
    secondary?: boolean
    /**
     * Button size. Mutually exclusive with `large` prop
     */
    small?: boolean
    tabIndex?: string
    /**
     * Type of button. Can take advantage of different default behavior
     */
    type?: DropdownButtonType
    value?: string
    /**
     * Callback triggered on click.
     * Called with signature `({ name: string, value: string, open: bool }, event)`
     * Is required when using the `open` prop to override the internal
     * state.
     */
    onClick?: ButtonOpenEventHandler
}

export class DropdownButton extends React.Component<DropdownButtonProps, any> {
    render(): JSX.Element
}

export type SplitButtonType = 'submit' | 'reset' | 'button'

export interface SplitButtonProps {
    children?: string
    className?: string
    /**
     * Component to render when the dropdown is opened
     */
    component?: React.ReactElement<any>
    dataTest?: string
    /**
     * Applies 'destructive' appearance to indicate purpose. Mutually exclusive with `primary` and `secondary` props
     */
    destructive?: boolean
    /**
     * Disables the button and makes it uninteractive
     */
    disabled?: boolean
    /**
     * An icon to add inside the button
     */
    icon?: React.ReactElement<any>
    /**
     * Grants the button the initial focus
     */
    initialFocus?: boolean
    /**
     * Changes button size. Mutually exclusive with `small` prop
     */
    large?: boolean
    name?: string
    /**
     * Applies 'primary' appearance to indicate purpose. Mutually exclusive with `destructive` and `secondary` props
     */
    primary?: boolean
    /**
     * Applies 'secondary' appearance to indicate purpose. Mutually exclusive with `primary` and `destructive` props
     */
    secondary?: boolean
    /**
     * Changes button size. Mutually exclusive with `large` prop
     */
    small?: boolean
    tabIndex?: string
    /**
     * Type of button. Applied to html `button` element
     */
    type?: SplitButtonType
    /**
     * Value associated with the button. Passed in object to onClick handler
     */
    value?: string
    onClick?: ButtonOpenEventHandler
}

export class SplitButton extends React.Component<SplitButtonProps, any> {
    render(): JSX.Element
}
