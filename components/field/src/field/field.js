import { Box } from '@dhis2-ui/box'
import { Help } from '@dhis2-ui/help'
import { Label } from '@dhis2-ui/label'
import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const Field = ({
    children,
    disabled,
    className,
    helpText,
    label,
    name,
    validationText,
    required,
    dataTest,
    valid,
    error,
    warning,
}) => (
    <Box className={className} dataTest={dataTest}>
        {label && (
            <Label
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

Field.defaultProps = {
    dataTest: 'dhis2-uicore-field',
}

Field.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Disabled status, shown when mouse is over label */
    disabled: PropTypes.bool,
    /** Field status. Mutually exclusive with `valid` and `warning` props */
    error: sharedPropTypes.statusPropType,
    /** Useful text within the field */
    helpText: PropTypes.string,
    /** Label at the top of the field */
    label: PropTypes.string,
    /** `name` will become the target of the `for`/`htmlFor` attribute on the `<label>` element */
    name: PropTypes.string,
    /** Inidcates this field is required */
    required: PropTypes.bool,
    /** Field status. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Feedback given related to validation status of field */
    validationText: PropTypes.string,
    /** Field status. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
}

export { Field }
