import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, FieldSet } from '@dhis2/ui-core'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @module
 * @param {FieldGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FieldGroup } from '@dhis2/ui'
 *
 * @example import { FieldGroup } from '@dhis2/ui-widgets'
 */
const FieldGroup = ({
    children,
    className,
    disabled,
    helpText,
    validationText,
    label,
    name,
    required,
    dataTest,
    valid,
    error,
    warning,
}) => (
    <FieldSet classname={className} dataTest={dataTest}>
        <Field
            label={label}
            disabled={disabled}
            required={required}
            helpText={helpText}
            validationText={validationText}
            error={error}
            warning={warning}
            valid={valid}
            name={name}
        >
            {children}
        </Field>
    </FieldSet>
)

FieldGroup.defaultProps = {
    dataTest: 'dhis2-uiwidgets-fieldsetfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop {string} [helpText]
 * @prop {string} [label]
 * @prop {string} [name]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
FieldGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Disables the form controls within */
    disabled: PropTypes.bool,
    /** Applies 'error' styling to validation text for feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    /** Useful instructions for the user */
    helpText: PropTypes.string,
    /** Labels the Field Group */
    label: PropTypes.string,
    /** Name associate with the Field Group. Passed in object as argument to event handlers */
    name: PropTypes.string,
    /** Adds an asterisk to indicate this field is required */
    required: PropTypes.bool,
    /** Applies 'valid' styling to validation text for feedback. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Adds text at the bottom of the field to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses */
    validationText: PropTypes.string,
    /** Applies 'warning' styling to validation text for feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
}

export { FieldGroup }
