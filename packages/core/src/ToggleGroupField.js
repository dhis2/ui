import propTypes from '@dhis2/prop-types'
import React from 'react'

import { ToggleGroup } from './ToggleGroup.js'
import { Field } from './Field.js'
import { FieldSet } from './FieldSet.js'
import { Legend } from './Legend.js'
import { Help } from './Help.js'
import { statusPropType } from './common-prop-types.js'

const ToggleGroupField = ({
    children,
    value,
    onChange,
    name,
    disabled,
    valid,
    warning,
    error,
    dense,
    className,
    label,
    helpText,
    validationText,
    required,
    dataTest,
}) => (
    <Field classname={className} dataTest={dataTest}>
        <FieldSet>
            {label && <Legend required={required}>{label}</Legend>}

            <ToggleGroup
                onChange={onChange}
                name={name}
                value={value}
                className={className}
                disabled={disabled}
                valid={valid}
                warning={warning}
                error={error}
                dense={dense}
            >
                {children}
            </ToggleGroup>

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
 * @prop {function} [onChange]
 * @prop {string} name
 * @prop {string|Array.<String>} [value]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 *
 * @prop {string} [label]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 */
ToggleGroupField.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    required: propTypes.bool,
    valid: statusPropType,
    validationText: propTypes.string,
    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]),
    warning: statusPropType,
    onChange: propTypes.func,
}

export { ToggleGroupField }
