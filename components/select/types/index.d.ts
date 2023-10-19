import * as React from 'react'
import { LayerBackdropClickEvent } from '@dhis2-ui/layer'
import { CheckboxProps } from '@dhis2-ui/checkbox'

interface BaseEventPayload {
    selected: string | string[]
}
interface SingleSelectEventPayload extends BaseEventPayload {
    selected: string
}
interface MultiSelectEventPayload extends BaseEventPayload {
    selected: string[]
}

type SelectEventHandler<
    T extends BaseEventPayload,
    Event extends React.SyntheticEvent
> = (payload: T, event: Event) => void

type SelectOnBlurHandler<T extends BaseEventPayload> = SelectEventHandler<
    T,
    LayerBackdropClickEvent
>
type SelectOnFocusHandler<T extends BaseEventPayload> = SelectEventHandler<
    T,
    React.FocusEvent<HTMLDivElement>
>
type SelectKeyHandler<T extends BaseEventPayload> = SelectEventHandler<
    T,
    React.KeyboardEvent<HTMLDivElement>
>
type SelectChangeHandler<T extends BaseEventPayload> = SelectEventHandler<
    T,
    React.MouseEvent
>

export interface MultiSelectProps {
    children?: React.ReactNode
    className?: string
    /**
     * Required if `clearable` prop is `true`
     */
    clearText?: string
    /**
     * Adds a 'clear' option to the menu
     */
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    empty?: React.ReactNode
    error?: boolean
    filterPlaceholder?: string
    /**
     * Adds a 'filter' field to the menu
     */
    filterable?: boolean
    initialFocus?: boolean
    inputMaxHeight?: string
    loading?: boolean
    loadingText?: string
    maxHeight?: string
    /**
     * Required if `filterable` prop is `true`
     */
    noMatchText?: string
    placeholder?: string
    prefix?: string
    selected?: string[]
    tabIndex?: string
    valid?: boolean
    warning?: boolean
    onBlur?: SelectOnBlurHandler<MultiSelectEventPayload>
    onChange?: SelectChangeHandler<MultiSelectEventPayload>
    onFocus?: SelectOnFocusHandler<MultiSelectEventPayload>
    onKeyDown?: SelectKeyHandler<MultiSelectEventPayload>
}

export const MultiSelect: React.FC<MultiSelectProps>

type TranslateableProp = string | ((interpolationObject: any) => string)

export interface MultiSelectFieldProps {
    /**
     * Should be `MultiSelectOption` components
     */
    children?: React.ReactNode
    className?: string
    /**
     * Label for the button that clears selections
     */
    clearText?: TranslateableProp
    /**
     * Adds a button to the MultiSelect that clears selections when pressed
     */
    clearable?: boolean
    dataTest?: string
    /**
     * Makes the MultiSelect smaller
     */
    dense?: boolean
    /**
     * Disables the MultiSelect
     */
    disabled?: boolean
    /**
     * Text to display when there are no options
     */
    empty?: TranslateableProp | React.ReactNode
    /**
     * Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props
     */
    error?: boolean
    /**
     * Placeholder text to show in the filter field when it is empty
     */
    filterPlaceholder?: TranslateableProp | React.ReactNode
    /**
     * Adds a field to filter options
     */
    filterable?: boolean
    /**
     * Useful guiding text to display below the MultiSelect
     */
    helpText?: string
    /**
     * Grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Constrains the height of the input
     */
    inputMaxHeight?: string
    /**
     * Sets the width of the input. Can be any valid CSS measurement
     */
    inputWidth?: string
    /**
     * Text for the label above the MultiSelect
     */
    label?: string
    /**
     * Applies a loading appearance to the dropdown options
     */
    loading?: boolean
    /**
     * Text to display when `loading` is true
     */
    loadingText?: TranslateableProp
    /**
     * Constrains height of the MultiSelect
     */
    maxHeight?: string
    /**
     * Text to display when there are no filter results
     */
    noMatchText?: TranslateableProp
    /**
     * Placeholder text when the MultiSelect is empty
     */
    placeholder?: string
    /**
     * Leading text to prefix selections
     */
    prefix?: string
    /**
     * Indicates that a selection is required
     */
    required?: boolean
    /**
     * Selected items in the MultiSelect (each string should refer to the item's `value` attribute)
     */
    selected?: string[]
    tabIndex?: string
    /**
     * Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props
     */
    valid?: boolean
    /**
     * Text to provide form validation feedback. Receives styles according to validation status
     */
    validationText?: string
    /**
     * Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props
     */
    warning?: boolean
    /**
     * Called with signature `({ selected: [String] }, event)`
     */
    onBlur?: MultiSelectProps['onBlur']
    /**
     * Called with signature `({ selected: [String] }, event)`
     */
    onChange?: MultiSelectProps['onChange']
    /**
     * Called with signature `({ selected: [String] }, event)`
     */
    onFocus?: MultiSelectProps['onFocus']
    /**
     * Called with signature `({ selected: [String] }, event)`
     */
    onKeyDown?: MultiSelectProps['onKeyDown']
}

export class MultiSelectField extends React.Component<
    MultiSelectFieldProps,
    any
> {
    render(): JSX.Element
}

export interface MultiSelectOptionProps {
    label: string
    value: string
    active?: boolean
    className?: string
    dataTest?: string
    disabled?: boolean
    onClick?: CheckboxProps['onChange']
}

export const MultiSelectOption: React.FC<MultiSelectOptionProps>

export interface SingleSelectProps {
    children?: React.ReactNode
    className?: string
    /**
     * Text on button that clears selection. Required if `clearable` prop is true
     */
    clearText?: string
    /**
     * Adds a button to clear selection
     */
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    /**
     * Text or component to display when there are no options
     */
    empty?: React.ReactNode
    /**
     * Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    filterPlaceholder?: string
    /**
     * Adds a filter field to add text to filter options
     */
    filterable?: boolean
    initialFocus?: boolean
    inputMaxHeight?: string
    loading?: boolean
    loadingText?: string
    maxHeight?: string
    /**
     * Text to show when filter returns no results. Required if `filterable` prop is true
     */
    noMatchText?: string
    placeholder?: string
    prefix?: string
    selected?: string
    tabIndex?: string
    /**
     * Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    onBlur?: SelectOnBlurHandler<SingleSelectEventPayload>
    onChange?: SelectChangeHandler<SingleSelectEventPayload>
    onFocus?: SelectOnFocusHandler<SingleSelectEventPayload>
    onKeyDown?: SelectKeyHandler<SingleSelectEventPayload>
}

export const SingleSelect: React.FC<SingleSelectProps>

export interface SingleSelectFieldProps {
    /**
     * Should be `SingleSelectOption` components
     */
    children?: React.ReactNode
    className?: string
    /**
     * Label for the button that clears selections
     */
    clearText?: TranslateableProp
    /**
     * Adds a button to the SingleSelect that clears selections when pressed
     */
    clearable?: boolean
    dataTest?: string
    /**
     * Makes the SingleSelect smaller
     */
    dense?: boolean
    /**
     * Disables the SingleSelect
     */
    disabled?: boolean
    /**
     * Text to display when there are no options
     */
    empty?: TranslateableProp | React.ReactNode
    /**
     * Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props
     */
    error?: boolean
    /**
     * Placeholder text to show in the filter field when it is empty
     */
    filterPlaceholder?: TranslateableProp | React.ReactNode
    /**
     * Adds a field to filter options
     */
    filterable?: boolean
    /**
     * Useful guiding text to display below the SingleSelect
     */
    helpText?: string
    /**
     * Grabs initial focus on the page
     */
    initialFocus?: boolean
    /**
     * Constrains the height of the input
     */
    inputMaxHeight?: string
    /**
     * Sets the width of the input. Can be any valid CSS measurement
     */
    inputWidth?: string
    /**
     * Text for the label above the SingleSelect
     */
    label?: string
    /**
     * Applies a loading appearance to the dropdown options
     */
    loading?: boolean
    /**
     * Text to display when `loading` is true
     */
    loadingText?: TranslateableProp
    /**
     * Constrains height of the SingleSelect
     */
    maxHeight?: string
    /**
     * Text to display when there are no filter results
     */
    noMatchText?: TranslateableProp
    /**
     * Placeholder text when the SingleSelect is empty
     */
    placeholder?: string
    /**
     * Leading text to prefix selections
     */
    prefix?: string
    /**
     * Indicates that a selection is required
     */
    required?: boolean
    /**
     * Selected item in the SingleSelect (the string should refer to the item's `value` attribute)
     */
    selected?: string
    tabIndex?: string
    /**
     * Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props
     */
    valid?: boolean
    /**
     * Text to provide form validation feedback. Receives styles according to validation status
     */
    validationText?: string
    /**
     * Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props
     */
    warning?: boolean
    /**
     * Called with signature `({ selected: string }, event)`
     */
    onBlur?: SingleSelectProps['onBlur']
    /**
     * Called with signature `({ selected: string }, event)`
     */
    onChange?: SingleSelectProps['onChange']
    /**
     * Called with signature `({ selected: string }, event)`
     */
    onFocus?: SingleSelectProps['onFocus']
    /**
     * Called with signature `({ selected: string }, event)`
     */
    onKeyDown?: SingleSelectProps['onKeyDown']
}

export class SingleSelectField extends React.Component<
    SingleSelectFieldProps,
    any
> {
    render(): JSX.Element
}

export interface SingleSelectOptionProps {
    label: string
    value: string
    active?: boolean
    className?: string
    dataTest?: string
    disabled?: boolean
    onClick?: (arg0: {}, event: React.MouseEvent<HTMLDivElement>) => void
}

export const SingleSelectOption: React.FC<SingleSelectOptionProps>
