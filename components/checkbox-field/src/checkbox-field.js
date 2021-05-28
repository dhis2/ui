import { Checkbox } from '@dhis2-ui/checkbox'
import { Field } from '@dhis2-ui/field'
import { Required } from '@dhis2-ui/required'
import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const AddRequired = ({ label, required, dataTest }) => (
    <React.Fragment>
        {label}
        {required && <Required dataTest={`${dataTest}-required`} />}
    </React.Fragment>
)
AddRequired.propTypes = {
    dataTest: PropTypes.string,
    label: PropTypes.node,
    required: PropTypes.bool,
}

/**
 * @module
 * @param {CheckboxField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { CheckboxField } from '@dhis2/ui-widgets'
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
    <Field
        className={className}
        dataTest={dataTest}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
        disabled={disabled}
    >
        <Checkbox
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
    </Field>
)

CheckboxField.defaultProps = {
    dataTest: 'dhis2-uiwidgets-checkboxfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [value]
 * @prop {Node} [label]
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
    checked: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Smaller dimensions for information-dense layouts */
    dense: PropTypes.bool,
    /** Disables the checkbox */
    disabled: PropTypes.bool,
    /** Applies 'error' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    /** Useful instructions for the user */
    helpText: PropTypes.string,
    initialFocus: PropTypes.bool,
    /** Labels the checkbox */
    label: PropTypes.node,
    /** Name associate with the checkbox. Passed in object as argument to event handlers */
    name: PropTypes.string,
    /** Adds an asterisk to indicate this field is required */
    required: PropTypes.bool,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Adds text below the checkbox to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses */
    validationText: PropTypes.string,
    /** Value associated with the checkbox. Passed in object as argument to event handlers */
    value: PropTypes.string,
    /** Applies 'warning' styling to checkbox and validation text for feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onBlur: PropTypes.func,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onChange: PropTypes.func,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onFocus: PropTypes.func,
}

export { CheckboxField }
