import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import React from 'react'
import { TextArea } from '../text-area/index.ts'

export interface TextAreaFieldProps {
    /** Grow the text area in response to overflow instead of adding a scroll bar */
    autoGrow?: boolean
    className?: string
    dataTest?: string
    /** Compact mode */
    dense?: boolean
    /** Disables the textarea and makes in non-interactive */
    disabled?: boolean
    /** Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error?: boolean
    /** Adds useful help text below the textarea */
    helpText?: string
    /** Grabs initial focus on the page */
    initialFocus?: boolean
    /** Sets the width of the textarea. Minimum 220px. Any valid CSS measurement can be used */
    inputWidth?: string
    /** Labels the textarea */
    label?: string
    /** Adds a loading spinner */
    loading?: boolean
    /** Name associated with the text area. Passed in object argument to event handlers. */
    name?: string
    /** Placeholder text for an empty textarea */
    placeholder?: string
    /** Makes the textarea read-only */
    readOnly?: boolean
    /** Adds an asterisk to the label to indicate this field is required */
    required?: boolean
    /** [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
    /** Initial height of the textarea, in lines of text */
    rows?: number
    tabIndex?: string
    /** Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Validation text below the textarea to provide validation feedback. Changes appearance depending on validation status */
    validationText?: string
    /** Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers. */
    value?: string
    /** Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur?: (payload: { name?: string; value: string }, event: React.FocusEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange?: (payload: { name?: string; value: string }, event: React.ChangeEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus?: (payload: { name?: string; value: string }, event: React.FocusEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onKeyDown?: (payload: { name?: string; value: string }, event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const TextAreaField = ({
    className,
    onChange,
    onFocus,
    onKeyDown,
    onBlur,
    initialFocus,
    dense,
    required,
    label,
    disabled,
    placeholder,
    name,
    valid,
    error,
    warning,
    loading,
    value,
    tabIndex,
    helpText,
    validationText,
    autoGrow,
    readOnly,
    resize = 'vertical',
    rows = 4,
    inputWidth,
    dataTest = 'dhis2-uiwidgets-textareafield',
}: TextAreaFieldProps) => (
    <Field
        className={className}
        dataTest={dataTest}
        disabled={disabled}
        required={required}
        name={name}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
        label={label}
    >
        <Box width={inputWidth} minWidth="220px">
            <TextArea
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                onChange={onChange}
                name={name}
                value={value || ''}
                placeholder={placeholder}
                disabled={disabled}
                valid={valid}
                warning={warning}
                error={error}
                loading={loading}
                dense={dense}
                tabIndex={tabIndex}
                initialFocus={initialFocus}
                autoGrow={autoGrow}
                readOnly={readOnly}
                resize={resize}
                rows={rows}
            />
        </Box>
    </Field>
)

export { TextAreaField }
