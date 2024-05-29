import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field } from '@dhis2-ui/field'
import { Label } from '@dhis2-ui/label'
import PropTypes from 'prop-types'
import React from 'react'
import { FileInput, FileList, FileListPlaceholder } from '../index.js'
import i18n from '../locales/index.js'

// TODO: i18n
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

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
    onKeyDown,
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
            onKeyDown={onKeyDown}
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
    /** Called with signature `({ name: string, files: [] }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, files: [] }, event)` */
    onFocus: PropTypes.func,
    /** Called with signature `({ name: string, files: [] }, event)` */
    onKeyDown: PropTypes.func,
}

export { FileInputField }
