import React, { Component } from 'react'
import { FileInputField } from '../file-input-field/index.ts'
import i18n from '../locales/index.js'
import { FileListItemWithRemove } from './file-list-item-with-remove.tsx'

// TODO: i18n
const translate = (
    prop: string | ((...args: unknown[]) => string),
    interpolationObject?: Record<string, unknown>
) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

interface FileInputFieldWithListProps {
    /** Called with signature `({ name: string, files: [File] }, event)` */
    onChange: (
        payload: { files: File[]; name?: string },
        event: React.SyntheticEvent
    ) => void
    /** The `accept` attribute of the native file input */
    accept?: string
    /** Text on the button */
    buttonLabel?: string | (() => string)
    className?: string
    dataTest?: string
    /** Disables the button */
    disabled?: boolean
    /** Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props */
    error?: boolean
    files?: File[]
    /** Useful guiding text for the user */
    helpText?: string
    initialFocus?: boolean
    /** A descriptive label above the button */
    label?: string
    /** Size of the button. Mutually exclusive with the `small` prop */
    large?: boolean
    /** The `multiple` attribute of the native file input */
    multiple?: boolean
    /** Name associated with input. Passed to event handler callbacks */
    name?: string
    /** Placeholder below the button */
    placeholder?: string | (() => string)
    /** Text used for the button that removes a file from the list */
    removeText?: string | (() => string)
    /** Adds an asterisk to indicate this field is required */
    required?: boolean
    /** Size of the button. Mutually exclusive with the `large` prop */
    small?: boolean
    tabIndex?: string
    /** Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Text below the button that provides validation feedback */
    validationText?: string
    /** Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Called with signature `({ name: string, files: [] }, event)` */
    onBlur?: (
        payload: { files: FileList; name?: string },
        event: React.FocusEvent
    ) => void
    /** Called with signature `({ name: string, files: [] }, event)` */
    onFocus?: (
        payload: { files: FileList; name?: string },
        event: React.FocusEvent
    ) => void
    /** Called with signature `({ name: string, files: [] }, event)` */
    onKeyDown?: (
        payload: { files: FileList; name?: string },
        event: React.KeyboardEvent
    ) => void
}

class FileInputFieldWithList extends Component<FileInputFieldWithListProps> {
    static defaultProps = {
        accept: '*',
        dataTest: 'dhis2-uiwidgets-fileinputfield',

        buttonLabel: () => i18n.t('Upload a file'),
        placeholder: () => i18n.t('No file uploaded yet'),
        removeText: () => i18n.t('Remove'),
    }

    handleChange = (
        { files: fileList }: { files: FileList },
        event: React.SyntheticEvent
    ) => {
        const { onChange, name } = this.props

        onChange({ files: this.updateFileArray(fileList), name: name }, event)
    }

    updateFileArray(fileList: FileList): File[] {
        const { multiple, files } = this.props
        // Spread immutable FileList instance onto array
        const newFiles = [...fileList]

        if (!multiple) {
            return newFiles
        }

        return (files || [])
            .filter(
                (file) =>
                    !newFiles.some(
                        (x) =>
                            x.name === file.name &&
                            x.lastModified === file.lastModified &&
                            x.size === file.size &&
                            x.type === file.type
                    )
            )
            .concat(newFiles)
    }

    handleRemove = (
        { file: fileToRemove }: { file: File },
        event: React.SyntheticEvent
    ) => {
        const { files, onChange, name } = this.props

        onChange(
            {
                files: (files || []).filter((file) => file !== fileToRemove),
                name,
            },
            event
        )
    }

    render() {
        const {
            accept,
            buttonLabel = FileInputFieldWithList.defaultProps.buttonLabel,
            className,
            dataTest = 'dhis2-uiwidgets-fileinputfieldwithlist',
            disabled,
            error,
            files = [],
            helpText,
            initialFocus,
            label,
            large,
            multiple,
            name,
            onBlur,
            onFocus,
            onKeyDown,
            placeholder = FileInputFieldWithList.defaultProps.placeholder,
            removeText = FileInputFieldWithList.defaultProps.removeText,
            required,
            small,
            tabIndex,
            valid,
            validationText,
            warning,
        } = this.props

        return (
            <FileInputField
                accept={accept}
                buttonLabel={translate(buttonLabel)}
                className={className}
                dataTest={dataTest}
                disabled={disabled || (!multiple && files.length >= 1)}
                error={error}
                helpText={helpText}
                initialFocus={initialFocus}
                label={label}
                large={large}
                multiple={multiple}
                name={name}
                onBlur={onBlur}
                onChange={this.handleChange}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                placeholder={translate(placeholder)}
                required={required}
                small={small}
                tabIndex={tabIndex}
                valid={valid}
                validationText={validationText}
                warning={warning}
            >
                {files.length > 0 &&
                    files.map((file) => (
                        <FileListItemWithRemove
                            key={file.name}
                            label={file.name}
                            removeText={translate(removeText)!}
                            onRemove={this.handleRemove}
                            file={file}
                        />
                    ))}
            </FileInputField>
        )
    }
}

export { FileInputFieldWithList }
export type { FileInputFieldWithListProps }
