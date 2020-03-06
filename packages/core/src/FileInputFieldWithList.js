import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'

import { FileInputField } from './FileInputField.js'
import { FileListItemWithRemove } from './FileInputFieldWithList/FileListItemWithRemove.js'
import { statusPropType, sizePropType } from './common-prop-types.js'

/**
 * @module
 * @param {FileInputFieldWithList.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInputFieldWithList } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/fileinput.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/fileinputfieldwithlist--default|Storybook}
 */

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
                file =>
                    !newFiles.some(
                        x =>
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
                files: files.filter(file => file !== fileToRemove),
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
                buttonLabel={buttonLabel}
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
                placeholder={placeholder}
                required={required}
                small={small}
                tabIndex={tabIndex}
                valid={valid}
                validationText={validationText}
                warning={warning}
            >
                {files.map(file => (
                    <FileListItemWithRemove
                        key={file.name}
                        label={file.name}
                        removeText={removeText}
                        onRemove={this.handleRemove}
                        file={file}
                    />
                ))}
            </FileInputField>
        )
    }
}

FileInputFieldWithList.defaultProps = {
    dataTest: 'dhis2-uicore-fileinputfieldwithlist',
    files: [],
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [removeText]
 * @prop {function} onChange
 * @prop {Array<File>} [files=[]] - an array of File instances (NOTE: not a FileList instance)
 * @prop {string} [name]
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
 * @prop {string} [dataTest=dhis2-uicore-fileinputfieldwithlist]
 */
FileInputFieldWithList.propTypes = {
    onChange: propTypes.func.isRequired,
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: statusPropType,
    files: propTypes.arrayOf(propTypes.instanceOf(File)),
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    label: propTypes.string,
    large: sizePropType,
    multiple: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    removeText: propTypes.string,
    required: propTypes.bool,
    small: sizePropType,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { FileInputFieldWithList }
