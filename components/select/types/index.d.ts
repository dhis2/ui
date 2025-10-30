import * as React from 'react'
import { LayerBackdropClickEvent } from '@dhis2-ui/layer'
import { CheckboxProps } from '@dhis2-ui/checkbox'

interface BaseEventPayload {
    selected: string | string[]
}

export interface SingleSelectEventPayload extends BaseEventPayload {
    selected: string
}

export interface MultiSelectEventPayload extends BaseEventPayload {
    selected: string[]
}

type SelectEventHandler<
    T extends BaseEventPayload,
    Event extends React.SyntheticEvent
> = (payload: T, event: Event) => void

export type SelectOnBlurHandler<T extends BaseEventPayload> =
    SelectEventHandler<T, LayerBackdropClickEvent>
export type SelectOnFocusHandler<T extends BaseEventPayload> =
    SelectEventHandler<T, React.FocusEvent<HTMLDivElement>>
export type SelectKeyHandler<T extends BaseEventPayload> = SelectEventHandler<
    T,
    React.KeyboardEvent<HTMLDivElement>
>
export type SelectChangeHandler<T extends BaseEventPayload> =
    SelectEventHandler<T, React.MouseEvent>

type TranslateableProp = string | ((interpolationObject: any) => string)

/**
 * ====================
 *
 * <MultiSelect />
 *
 * ====================
 **/

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

/**
 * ====================
 *
 * <MultiSelectField />
 *
 * ====================
 **/

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

/**
 * ====================
 *
 * <MultiSelectOption />
 *
 * ====================
 **/

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

/**
 * ====================
 *
 * <SingleSelect />
 *
 * ====================
 **/

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

/**
 * ====================
 *
 * <SimpleSingleSelect />
 *
 * ====================
 **/

type SimpleSingleSelectCustomOptionProp = (props: {
    value: string
    label: string
    index: number
    disabled: boolean
    highlighted: boolean
}) => JSX.Element

export interface SimpleSingleSelectProps {
    /** necessary for IDs that are required for accessibility **/
    idPrefix: string.isRequired

    /** An array of options **/
    options: Array<{
        label: string
        value: string
        component?: SimpleSingleSelectCustomOptionProp
        disabled?: boolean
    }>

    /** A callback that will be called with the new value or an empty string **/
    onChange: (value: string) => void

    /** Will focus the select initially **/
    autoFocus?: boolean

    /** Additional class names that will be applied to the root element **/
    className?: string

    /** This will allow us to put an aria-label on the clear button **/
    clearText?: string

    /** Whether a clear button should be displayed or not **/
    clearable?: boolean

    /** Allows to override what's rendered inside the `button[role="option"]`.
     * Can be overriden on an individual option basis **/
    customOption?: SimpleSingleSelectCustomOptionProp

    /** A value for a `data-test` attribute on the root element **/
    dataTest?: string

    /** Renders a select with lower height **/
    dense?: boolean

    /** Disables all interactions with the select (except focussing) **/
    disabled?: boolean

    /** Text or component to display when there are no options **/
    empty?: React.ReactNode

    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    error?: boolean

    /** Help text that will be displayed below the input **/
    filterHelpText?: string

    /** Value will be used as aria-label attribute on the filter input **/
    filterLabel?: string

    /** Placeholder for the filter input **/
    filterPlaceholder?: string

    /** Value of the filter input **/
    filterValue?: string

    /** Whether the select should display a filter input **/
    filterable?: boolean

    /** Should contain the id of the element that labels the select, if applicable **/
    labelledBy?: string

    /** Will show a loading indicator at the end of the options-list **/
    loading?: boolean

    /** Text that will be displayed next to the loading indicator **/
    menuLoadingText?: string

    /** Allows to modify the max height of the menu **/
    menuMaxHeight?: string

    /** String that will be displayed when the select is being filtered but the options array is empty **/
    noMatchText?: string

    /** For a11y: How aggressively the user should be updated about changes in options **/
    optionUpdateStrategy?: 'off' | 'polite' | 'assertive'

    /** String to show when there's no value and no valueLabel **/
    placeholder?: string

    /** String that will be displayed before the label of the selected option **/
    prefix?: string

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex?: number | string

    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    valid?: boolean

    /** As of now, this component does not support being uncontrolled **/
    value?: string

    /**
     * When the option is not in the options list (e.g. not loaded or list is
     * filtered), but a selected value needs to be displayed, then this prop can
     * be used to supply the text to be shown.
     **/
    valueLabel?: string

    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    warning?: boolean

    /** Will be called when the combobox is loses focus **/
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void

    /** Will be called when the last option is scrolled into the visible area **/
    onEndReached?: () => void

    /** Will be called when the filter value changes **/
    onFilterChange?: (value: string) => void

    /** Will be called when the combobox is being focused **/
    onFocus?: (e: React.FocusEvent<HTMLElement>) => void
}

export const SimpleSingleSelect: React.FC<SimpleSingleSelectProps>

/**
 * ====================
 *
 * <SingleSelectField />
 *
 * ====================
 **/

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

/**
 * ====================
 *
 * <SingleSelectOption />
 *
 * ====================
 **/

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
