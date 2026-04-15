import { Box } from '@dhis2-ui/box'
import { Help } from '@dhis2-ui/help'
import { Label } from '@dhis2-ui/label'
import React from 'react'

export interface FieldProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Disabled status, shown when mouse is over label */
    disabled?: boolean
    /** Field status. Mutually exclusive with `valid` and `warning` props */
    error?: boolean
    /** Useful text within the field */
    helpText?: string
    /** Label at the top of the field */
    label?: string
    /** id passed to the label element */
    labelId?: string
    /** `name` will become the target of the `for`/`htmlFor` attribute on the `<label>` element */
    name?: string
    /** Indicates this field is required */
    required?: boolean
    /** Field status. Mutually exclusive with `error` and `warning` props */
    valid?: boolean
    /** Feedback given related to validation status of field */
    validationText?: string
    /** Field status. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
}

const Field = ({
    children,
    className,
    disabled,
    helpText,
    label,
    labelId,
    name,
    validationText,
    required,
    dataTest = 'dhis2-uicore-field',
    valid,
    error,
    warning,
}: FieldProps) => (
    <Box className={className} dataTest={dataTest}>
        {label && (
            <Label
                {...({ id: labelId } as Record<string, unknown>)}
                dataTest={`${dataTest}-label`}
                required={required}
                disabled={disabled}
                htmlFor={name}
            >
                {label}
            </Label>
        )}

        <Box dataTest={`${dataTest}-content`} marginTop={label ? '2px' : '0'}>
            {children}
        </Box>

        {helpText && <Help dataTest={`${dataTest}-help`}>{helpText}</Help>}

        {validationText && (
            <Help
                error={error}
                warning={warning}
                valid={valid}
                dataTest={`${dataTest}-validation`}
            >
                {validationText}
            </Help>
        )}
    </Box>
)

export { Field }
