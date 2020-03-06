import React from 'react'
import propTypes from '@dhis2/prop-types'

import { statusPropType } from '../common-prop-types.js'
import { ToggleField } from '../ToggleField.js'
import { Checkbox } from '../Checkbox/Checkbox.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {CheckboxField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkboxfield--default|Storybook}
 */

const CheckboxField = ({
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
}) => (
    <ToggleField
        value={value}
        label={label}
        name={name}
        className={className}
        toggleComponent={Checkbox}
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
        required={required}
        helpText={helpText}
        validationText={validationText}
        dataTest={dataTest}
    />
)

CheckboxField.defaultProps = {
    dataTest: 'dhis2-uicore-checkboxfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [value]
 * @prop {string} [label]
 *
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 *
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {string} [dataTest]
 */
CheckboxField.propTypes = {
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

export { CheckboxField }
