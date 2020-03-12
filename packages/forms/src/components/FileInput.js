import React from 'react'
import propTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { FileInputField, FileListItem } from '@dhis2/ui-core'

import { hasError, isValid, getValidationText } from './shared/helpers.js'
import { inputPropType, metaPropType } from './shared/propTypes.js'

const btnLabel = i18n.t('Upload file')
const btnLabelMulti = i18n.t('Upload files')

const dedupeAndConcat = (currentFiles, newFileList) => {
    return [...currentFiles, ...newFileList].reduceRight(
        (acc, file) => {
            if (!acc.unique.has(file.name)) {
                acc.unique.add(file.name)
                acc.files.unshift(file)
            }
            return acc
        },
        { files: [], unique: new Set() }
    ).files
}

const createChangeHandler = (input, multifile) => ({ files }) => {
    // A JavaScript FileList instance is read-only, so we cannot add files to it
    // FileList also doesn't have a .map method so by destructuring the FileList
    // instance into an array we can add, remove and map
    const currentFiles = Array.isArray(input.value) ? input.value : []
    const value = multifile ? dedupeAndConcat(currentFiles, files) : [...files]

    input.onChange(value)
}

const createRemoveHandler = (input, fileToDelete) => () => {
    const files = input.value.filter(file => file !== fileToDelete)
    const value = files.length > 0 ? files : ''

    input.onChange(value)
}

const FileInput = ({
    buttonLabel,
    disabled,
    error,
    input,
    meta,
    multifile,
    showValidStatus,
    valid,
    validationText,
    ...rest
}) => {
    const files = input.value || []

    return (
        <FileInputField
            {...rest}
            onChange={createChangeHandler(input, multifile)}
            buttonLabel={buttonLabel || multifile ? btnLabelMulti : btnLabel}
            disabled={disabled || (!multifile && files.length >= 1)}
            multiple={multifile}
            name={input.name}
            error={hasError(meta, error)}
            valid={isValid(meta, valid, showValidStatus)}
            validationText={getValidationText(meta, validationText, error)}
        >
            {files.map(file => (
                <FileListItem
                    key={file.name}
                    label={file.name}
                    onRemove={createRemoveHandler(input, file)}
                    removeText={i18n.t('Remove')}
                />
            ))}
        </FileInputField>
    )
}

FileInput.defaultProps = {
    placeholder: i18n.t('No file(s) selected yet'),
}

FileInput.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,

    buttonLabel: propTypes.string,
    disabled: propTypes.bool,
    error: propTypes.bool,
    multifile: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.instanceOf(File)),
        propTypes.oneOf(['']),
    ]),
}

export { FileInput }
