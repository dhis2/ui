import propTypes from '@dhis2/prop-types'
import React from 'react'

import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, FieldSet, Legend } from '@dhis2/ui-core'

/**
 * @module
 * @param {FieldSetField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FieldSetField } from '@dhis2/ui'
 *
 * @example import { FieldSetField } from '@dhis2/ui-widgets'
 */
const FieldSetField = ({
    children,
    className,
    disabled,
    helpText,
    validationText,
    label,
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
        >
            {children}
        </Field>
    </FieldSet>
)

FieldSetField.defaultProps = {
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
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
FieldSetField.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
}

export { FieldSetField }
