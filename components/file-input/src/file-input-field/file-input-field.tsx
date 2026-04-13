import { Field } from '@dhis2-ui/field'
import { Label } from '@dhis2-ui/label'
import React from 'react'
import { FileInput } from '../file-input/index.ts'
import { FileList, FileListPlaceholder } from '../file-list/index.ts'
import i18n from '../locales/index.js'

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

const defaultButtonLabel = () => i18n.t('Upload a file')
const defaultPlaceholder = () => i18n.t('No file uploaded yet')

interface FileInputFieldProps {
    /** The `accept` attribute of the native file input */
    accept?: string
    /** Text on the button */
    buttonLabel?: string | (() => string)
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Disables the button */
    disabled?: boolean
    /** Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props */
    error?: boolean
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
    /** Adds an asterisk to indicate this field is required */
    required?: boolean
    /** Size of the button. Mutually exclusive with the `large` prop */
    small?: boolean
    tabIndex?: string
    /** Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Text below the button that provides validation feedback */
    validationText?: string
    /** Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    onBlur?: (
        payload: { files: FileList; name?: string },
        event: React.FocusEvent
    ) => void
    /** Called with signature `({ name: string, files: [] }, event)` */
    onChange?: (
        payload: { files: FileList; name?: string },
        event: React.ChangeEvent
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

const FileInputField = ({
    accept = '*',
    buttonLabel = defaultButtonLabel,
    children,
    className,
    dataTest = 'dhis2-uiwidgets-fileinputfield',
    disabled,
    error,
    helpText,
    initialFocus,
    label,
    large,
    multiple,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    placeholder = defaultPlaceholder,
    required,
    small,
    tabIndex,
    valid,
    validationText,
    warning,
}: FileInputFieldProps) => (
    <Field
        className={className}
        dataTest={dataTest}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
    >
        {label && (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        )}

        <FileInput
            accept={accept}
            buttonLabel={translate(buttonLabel)}
            className={className}
            disabled={disabled}
            error={error}
            initialFocus={initialFocus}
            large={large}
            multiple={multiple}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            small={small}
            tabIndex={tabIndex}
            valid={valid}
            warning={warning}
        />

        <FileList>
            {children ? (
                children
            ) : (
                <FileListPlaceholder>
                    {translate(placeholder)}
                </FileListPlaceholder>
            )}
        </FileList>
    </Field>
)

export { FileInputField }
export type { FileInputFieldProps }
