import { Field } from '@dhis2-ui/field'
import { Required } from '@dhis2-ui/required'
import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { Switch } from '../index.js'

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

const SwitchField = ({
    value,
    label,
    name,
    className,
    tabIndex,
    onChange,
    onFocus,
    onKeyDown,
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
        required={required}
        name={name}
        disabled={disabled}
    >
        <Switch
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
            onKeyDown={onKeyDown}
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

SwitchField.defaultProps = {
    dataTest: 'dhis2-uiwidgets-switchfield',
}

SwitchField.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Smaller dimensions for information-dense layouts */
    dense: PropTypes.bool,
    /** Disables the switch */
    disabled: PropTypes.bool,
    /** Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    /** Useful instructions for the user */
    helpText: PropTypes.string,
    initialFocus: PropTypes.bool,
    /** Labels the switch */
    label: PropTypes.node,
    /** Name associate with the switch. Passed in object as argument to event handlers */
    name: PropTypes.string,
    /** Adds an asterisk to indicate this field is required */
    required: PropTypes.bool,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses */
    validationText: PropTypes.string,
    /** Value associated with the switch. Passed in object as argument to event handlers */
    value: PropTypes.string,
    /** Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onBlur: PropTypes.func,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onChange: PropTypes.func,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onFocus: PropTypes.func,
    /** Called with signature ({ name: string, value: string, checked: bool }, event) */
    onKeyDown: PropTypes.func,
}

export { SwitchField }
