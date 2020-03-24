import React from 'react'
import propTypes from '@dhis2/prop-types'

import { sharedPropTypes } from '@dhis2/ui-constants'
import {
    FileInput,
    FileList,
    FileListPlaceholder,
    Field,
    Label,
    Help,
} from '@dhis2/ui-widgets'

/**
 * @module
 * @param {FileInputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInputField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/fileinput.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/fileinputfield--default|Storybook}
 */
const FileInputField = ({
    accept,
    buttonLabel,
    children,
    className,
    dataTest,
    disabled,
    error,
    helpText,
    initialFocus,
    label,
    large,
    multiple,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    small,
    tabIndex,
    valid,
    validationText,
    warning,
}) => (
    <Field className={className} dataTest={dataTest}>
        {label && (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        )}

        <FileInput
            accept={accept}
            buttonLabel={buttonLabel}
            className={className}
            disabled={disabled}
            error={error}
            initialFocus={initialFocus}
            large={large}
            multiple={multiple}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            small={small}
            tabIndex={tabIndex}
            valid={valid}
            warning={warning}
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

        <FileList>
            {!children && placeholder ? (
                <FileListPlaceholder>{placeholder}</FileListPlaceholder>
            ) : (
                children
            )}
        </FileList>
    </Field>
)

FileInputField.defaultProps = {
    accept: '*',
    dataTest: 'dhis2-uicore-fileinputfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [name]
 * @prop {function} [onChange]
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [label]
 * @prop {string} [buttonLabel]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning` and `error` are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 *
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 *
 * @prop {FileListItem|Array.<FileListItem>} [children]
 * @prop {string} [accept=*] - the `accept` attribute of the [native file input]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}
 * @prop {boolean} [multiple] - the `multiple` attribute of the [native file input]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple}
 * @prop {string} [dataTest]
 */
FileInputField.propTypes = {
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    label: propTypes.string,
    large: sharedPropTypes.sizePropType,
    multiple: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    required: propTypes.bool,
    small: sharedPropTypes.sizePropType,
    tabIndex: propTypes.string,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { FileInputField }
