import propTypes from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, FieldSet } from '@dhis2/ui-core'
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
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    required: propTypes.bool,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
}

export { FieldGroup }
