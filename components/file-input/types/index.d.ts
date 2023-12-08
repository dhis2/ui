import * as React from 'react'

export interface FileInputEventPayload {
    files: FileList
    name?: string
}

type FileInputEventHandler<Event extends React.SyntheticEvent> = (
    arg0: FileInputEventPayload,
    event: Event
) => void

type FileInputFocusHandler = FileInputEventHandler<
    React.FocusEvent<HTMLInputElement>
>
type FileInputChangeHandler = FileInputEventHandler<
    React.ChangeEvent<HTMLInputElement>
>
type FileInputKeyHandler = FileInputEventHandler<
    React.KeyboardEvent<HTMLInputElement>
>

export interface FileInputProps {
    /**
     * The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
     */
    accept?: string
    buttonLabel?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    /**
     * Input status. Mutually exclusive with `warning` and `valid`
     */
    error?: boolean
    initialFocus?: boolean
    /**
     * Button size. Mutually exclusive with `small`
     */
    large?: boolean
    /**
     * The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)
     */
    multiple?: boolean
    name?: string
    /**
     * Button size. Mutually exclusive with `large`
     */
    small?: boolean
    tabIndex?: string
    /**
     * Input status. Mutually exclusive with `warning` and `error`
     */
    valid?: boolean
    /**
     * Input status. Mutually exclusive with `valid` and `error`
     */
    warning?: boolean
    /**
     * Called with signature `(object, event)`
     */
    onBlur?: FileInputFocusHandler
    /**
     * Called with signature `(object, event)`
     */
    onChange?: FileInputChangeHandler
    /**
     * Called with signature `(object, event)`
     */
    onFocus?: FileInputFocusHandler
    /**
     * Called with signature `(object, event)`
     */
    onKeyDown?: FileInputKeyHandler
}

export class FileInput extends React.Component<FileInputProps, any> {
    render(): JSX.Element
}

type TranslateableProp = string | ((arg: any) => string)

export interface FileInputFieldProps {
    /**
     * The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
     */
    accept?: string
    /**
     * Text on the button
     */
    buttonLabel?: TranslateableProp
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Disables the button
     */
    disabled?: boolean
    /**
     * Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    /**
     * Useful guiding text for the user
     */
    helpText?: string
    initialFocus?: boolean
    /**
     * A descriptive label above the button
     */
    label?: string
    /**
     * Size of the button. Mutually exclusive with the `small` prop
     */
    large?: boolean
    /**
     * The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)
     */
    multiple?: boolean
    /**
     * Name associated with input. Passed to event handler callbacks
     */
    name?: string
    /**
     * Placeholder below the button
     */
    placeholder?: TranslateableProp
    /**
     * Adds an asterisk to indicate this field is required
     */
    required?: boolean
    /**
     * Size of the button. Mutually exclusive with the `large` prop
     */
    small?: boolean
    tabIndex?: string
    /**
     * Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Text below the button that provides validation feedback
     */
    validationText?: string
    /**
     * Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    onBlur?: FileInputFocusHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onChange?: FileInputChangeHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onFocus?: FileInputFocusHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onKeyDown?: FileInputKeyHandler
}

export const FileInputField: React.FC<FileInputFieldProps>

export interface FileInputFieldWithListProps {
    /**
     * The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
     */
    accept?: string
    /**
     * Text on the button
     */
    buttonLabel?: TranslateableProp
    className?: string
    dataTest?: string
    /**
     * Disables the button
     */
    disabled?: boolean
    /**
     * Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props
     */
    error?: boolean
    files?: File[]
    /**
     * Useful guiding text for the user
     */
    helpText?: string
    initialFocus?: boolean
    /**
     * A descriptive label above the button
     */
    label?: string
    /**
     * Size of the button. Mutually exclusive with the `small` prop
     */
    large?: boolean
    /**
     * The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)
     */
    multiple?: boolean
    /**
     * Name associated with input. Passed to event handler callbacks
     */
    name?: string
    /**
     * Placeholder below the button
     */
    placeholder?: TranslateableProp
    /**
     * Text used for the button that removes a file from the list
     */
    removeText?: TranslateableProp
    /**
     * Adds an asterisk to indicate this field is required
     */
    required?: boolean
    /**
     * Size of the button. Mutually exclusive with the `large` prop
     */
    small?: boolean
    tabIndex?: string
    /**
     * Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props
     */
    valid?: boolean
    /**
     * Text below the button that provides validation feedback
     */
    validationText?: string
    /**
     * Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props
     */
    warning?: boolean
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onBlur?: FileInputFocusHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onChange: FileInputChangeHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onFocus?: FileInputFocusHandler
    /**
     * Called with signature `({ name: string, files: [] }, event)`
     */
    onKeyDown?: FileInputKeyHandler
}

export class FileInputFieldWithList extends React.Component<
    FileInputFieldWithListProps,
    any
> {
    render(): JSX.Element
}

export interface FileListItemProps {
    onRemove: (arg0: {}, event: React.MouseEvent<HTMLSpanElement>) => void
    cancelText?: string
    className?: string
    dataTest?: string
    label?: string
    loading?: boolean
    removeText?: string
    onCancel?: (arg0: {}, event: React.MouseEvent<HTMLSpanElement>) => void
}

export const FileListItem: React.FC<FileListItemProps>

export interface FileListPlaceholderProps {
    children?: string
    dataTest?: string
}

export const FileListPlaceholder: React.FC<FileListPlaceholderProps>

export interface FileListProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const FileList: React.FC<FileListProps>
