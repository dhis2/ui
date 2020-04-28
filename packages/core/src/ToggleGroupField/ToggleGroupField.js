import propTypes from '@dhis2/prop-types'
import React from 'react'

import { sharedPropTypes } from '@dhis2/ui-constants'
import { ToggleGroup } from '../ToggleGroup/ToggleGroup.js'
import { Field } from '../Field/Field.js'
import { FieldSet } from '../FieldSet/FieldSet.js'
import { Legend } from '../Legend/Legend.js'
import { Help } from '../Help/Help.js'

/**
 * @module
 * @param {ToggleGroupField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { ToggleGroupField } from '@dhis2/ui'
 *
 * @example import { ToggleGroupField } from '@dhis2/ui-widgets'
 */
const ToggleGroupField = ({
    children,
    className,
    label,
    helpText,
    validationText,
    required,
    dataTest,
    valid,
    error,
    warning,
}) => (
    <Field classname={className} dataTest={dataTest}>
        <FieldSet>
            {label && <Legend required={required}>{label}</Legend>}

            <ToggleGroup>{children}</ToggleGroup>

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
        </FieldSet>
    </Field>
)

ToggleGroupField.defaultProps = {
    dataTest: 'dhis2-uicore-togglegroupfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 *
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
ToggleGroupField.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
}

export { ToggleGroupField }
