import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { Field } from './Field.js'
import { Help } from './Help.js'
import { AddRequired } from './ToggleField/AddRequired.js'

const ToggleField = ({
    value,
    label,
    name,
    className,
    tabIndex,
    onChange,
    onFocus,
    onBlur,
    checked,
    disabled,
    valid,
    warning,
    error,
    dense,
    initialFocus,
    required,
    helpText,
    validationText,
    dataTest,
    toggleComponent: ToggleComponent,
}) => (
    <Field className={className} dataTest={dataTest}>
        <ToggleComponent
            value={value}
            label={
                <AddRequired
                    label={label}
                    required={required}
                    dataTest={dataTest}
                />
            }
            name={name}
            tabIndex={tabIndex}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            checked={checked}
            disabled={disabled}
            valid={valid}
            warning={warning}
            error={error}
            dense={dense}
            initialFocus={initialFocus}
        />

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
    </Field>
)

ToggleField.defaultProps = {
    dataTest: 'dhis2-uicore-togglefield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {string} [value]
 * @prop {Node} [label]
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {function} toggleComponent
 * @prop {string} [dataTest]
 */
ToggleField.propTypes = {
    toggleComponent: propTypes.func.isRequired,
    checked: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    label: propTypes.node,
    name: propTypes.string,
    required: propTypes.bool,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    value: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { ToggleField }
