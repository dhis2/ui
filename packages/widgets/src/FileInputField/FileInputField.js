import { sharedPropTypes } from '@dhis2/ui-constants'
import {
    FileInput,
    FileList,
    FileListPlaceholder,
    Field,
    Label,
} from '@dhis2/ui-core'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import translate from '../translate'

/**
 * @module
 * @param {FileInputField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInputField } from '@dhis2/ui-widgets'
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
    <Field
        className={className}
        dataTest={dataTest}
        helpText={helpText}
        validationText={validationText}
        error={error}
        warning={warning}
        valid={valid}
    >
        {label && (
            <Label required={required} disabled={disabled} htmlFor={name}>
                {label}
            </Label>
        )}

        <FileInput
            accept={accept}
            buttonLabel={translate(buttonLabel)}
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

        <FileList>
            {children ? (
                children
            ) : (
                <FileListPlaceholder>
                    {translate(placeholder)}
                </FileListPlaceholder>
            )}
        </FileList>
    </Field>
)

FileInputField.defaultProps = {
    accept: '*',
    dataTest: 'dhis2-uiwidgets-fileinputfield',

    buttonLabel: () => i18n.t('Upload a file'),
    placeholder: () => i18n.t('No file uploaded yet'),
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
 * @prop {string|function} [buttonLabel]
 * @prop {string} [className]
 * @prop {string|function} [placeholder]
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
    /** The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) */
    accept: PropTypes.string,
    /** Text on the button */
    buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Disables the button */
    disabled: PropTypes.bool,
    /** Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    /** Useful guiding text for the user */
    helpText: PropTypes.string,
    initialFocus: PropTypes.bool,
    /** A descriptive label above the button */
    label: PropTypes.string,
    /** Size of the button. Mutually exclusive with the `small` prop */
    large: sharedPropTypes.sizePropType,
    /** The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) */
    multiple: PropTypes.bool,
    /** Name associated with input. Passed to event handler callbacks */
    name: PropTypes.string,
    /** Placeholder below the button */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Adds an asterisk to indicate this field is required */
    required: PropTypes.bool,
    /** Size of the button. Mutually exclusive with the `large` prop */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Text below the button that provides validation feedback */
    validationText: PropTypes.string,
    /** Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    /** Called with signature ({ name: string, files: [] }, event) */
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}

export { FileInputField }
