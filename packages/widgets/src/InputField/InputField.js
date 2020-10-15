import propTypes from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, Input, Box } from '@dhis2/ui-core'
import React from 'react'

/**
 * @module
 * @param {InputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { InputField } from '@dhis2/ui-widgets'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/inputfield--no-placeholder-no-value|Storybook}
 */
class InputField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            initialFocus,
            type,
            dense,
            required,
            label,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            helpText,
            validationText,
            inputWidth,
            dataTest,
        } = this.props

        return (
            <Field
                className={className}
                dataTest={dataTest}
                error={error}
                warning={warning}
                valid={valid}
                helpText={helpText}
                validationText={validationText}
                label={label}
                name={name}
                disabled={disabled}
                required={required}
            >
                <Box width={inputWidth} minWidth="72px">
                    <Input
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}
                        name={name}
                        type={type}
                        value={value || ''}
                        placeholder={placeholder}
                        disabled={disabled}
                        valid={valid}
                        warning={warning}
                        error={error}
                        loading={loading}
                        dense={dense}
                        tabIndex={tabIndex}
                        initialFocus={initialFocus}
                        readOnly={readOnly}
                    />
                </Box>
            </Field>
        )
    }
}

InputField.defaultProps = {
    dataTest: 'dhis2-uiwidgets-inputfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {string} [type=text]
 * @prop {function} [onChange]
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [label]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {string} [inputWidth]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [readOnly]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {string} [dataTest]
 */
InputField.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    inputWidth: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    readOnly: propTypes.bool,
    required: propTypes.bool,
    tabIndex: propTypes.string,
    type: Input.propTypes.type,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    value: propTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { InputField }
