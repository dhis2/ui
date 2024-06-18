import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FileInputField } from '../file-input-field'
import i18n from '../locales/index.js'
import { FileListItemWithRemove } from './file-list-item-with-remove.js'

// TODO: i18n
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}
class FileInputFieldWithList extends Component {
    handleChange = ({ files: fileList }, event) => {
        const { onChange, name } = this.props

        onChange({ files: this.updateFileArray(fileList), name: name }, event)
    }

    /**
     * @param {FileList} fileList
     * @returns {File[]}
     */
    updateFileArray(fileList) {
        const { multiple, files } = this.props
        // Spread immutable FileList instance onto array
        const newFiles = [...fileList]

        if (!multiple) {
            return newFiles
        }

        return files
            .filter(
                (file) =>
                    !newFiles.some(
                        (x) =>
                            x.name === file.name &&
                            x.lastModified === file.lastModified &&
                            x.size === file.size &&
                            x.type === file.type
                    )
            )
            .concat(newFiles)
    }

    handleRemove = ({ file: fileToRemove }, event) => {
        const { files, onChange, name } = this.props

        onChange(
            {
                files: files.filter((file) => file !== fileToRemove),
                name,
            },
            event
        )
    }

    render() {
        const {
            accept,
            buttonLabel,
            className,
            dataTest,
            disabled,
            error,
            files,
            helpText,
            initialFocus,
            label,
            large,
            multiple,
            name,
            onBlur,
            onFocus,
            onKeyDown,
            placeholder,
            removeText,
            required,
            small,
            tabIndex,
            valid,
            validationText,
            warning,
        } = this.props

        return (
            <FileInputField
                accept={accept}
                buttonLabel={translate(buttonLabel)}
                className={className}
                dataTest={dataTest}
                disabled={disabled || (!multiple && files.length >= 1)}
                error={error}
                helpText={helpText}
                initialFocus={initialFocus}
                label={label}
                large={large}
                multiple={multiple}
                name={name}
                onBlur={onBlur}
                onChange={this.handleChange}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                placeholder={translate(placeholder)}
                required={required}
                small={small}
                tabIndex={tabIndex}
                valid={valid}
                validationText={validationText}
                warning={warning}
            >
                {files.length > 0 &&
                    files.map((file) => (
                        <FileListItemWithRemove
                            key={file.name}
                            label={file.name}
                            removeText={translate(removeText)}
                            onRemove={this.handleRemove}
                            file={file}
                        />
                    ))}
            </FileInputField>
        )
    }
}

FileInputFieldWithList.defaultProps = {
    dataTest: 'dhis2-uiwidgets-fileinputfieldwithlist',
    files: [],

    buttonLabel: () => i18n.t('Upload a file'),
    placeholder: () => i18n.t('No file uploaded yet'),
    removeText: () => i18n.t('Remove'),
}

FileInputFieldWithList.propTypes = {
    /** Called with signature `({ name: string, files: [File] }, event)` */
    onChange: PropTypes.func.isRequired,
    /** The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) */
    accept: PropTypes.string,
    /** Text on the button */
    buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Disables the button */
    disabled: PropTypes.bool,
    /** Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
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
    /** Text used for the button that removes a file from the list */
    removeText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Adds an asterisk to indicate this field is required */
    required: PropTypes.bool,
    /** Size of the button. Mutually exclusive with the `large` prop */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Text below the button that provides validation feedback */
    validationText: PropTypes.string,
    /** Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ name: string, files: [] }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, files: [] }, event)` */
    onFocus: PropTypes.func,
    /** Called with signature `({ name: string, files: [] }, event)` */
    onKeyDown: PropTypes.func,
}

export { FileInputFieldWithList }
