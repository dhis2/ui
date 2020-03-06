import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { Field } from './Field.js'
import { Label } from './Label.js'
import { TextArea } from './TextArea.js'
import { Help } from './Help.js'
import { Constrictor } from './Constrictor.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {TextAreaField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TextAreaField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/update-input/atoms/inputfield.md#textarea|Design system}
 * @see Live demo: {@link /demo/?path=/story/textareafield--default|Storybook}
 */
const TextAreaField = ({
    className,
    onChange,
    onFocus,
    onBlur,
    initialFocus,
    dense,
    required,
    label,
    disabled,
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
    autoGrow,
    readOnly,
    resize,
    rows,
    inputWidth,
    dataTest,
}) => (
    <Field className={className} dataTest={dataTest}>
        {label && (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        )}

        <Constrictor width={inputWidth} minWidth="220px">
            <TextArea
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                name={name}
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
                autoGrow={autoGrow}
                readOnly={readOnly}
                resize={resize}
                rows={rows}
            />
        </Constrictor>

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

TextAreaField.defaultProps = {
    rows: 4,
    width: '100%',
    resize: 'vertical',
    dataTest: 'dhis2-uicore-textareafield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} [onChange]
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [label]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
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
 *
 * @prop {boolean} [autoGrow]
 * @prop {boolean} [readOnly]
 * @prop {string} [resize=vertical] - resize attribute on the textarea,
 * one of `none`, `both`, `horizontal`, `vertical`
 * @prop {number} [rows=4]
 * @prop {string} [inputWidth]
 * @prop {string} [dataTest]
 */
TextAreaField.propTypes = {
    autoGrow: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    inputWidth: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    readOnly: propTypes.bool,
    required: propTypes.bool,
    resize: propTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    rows: propTypes.number,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    value: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { TextAreaField }
