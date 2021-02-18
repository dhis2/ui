import { FileListItem } from '@dhis2/ui-core'
import { FileInputField } from '@dhis2/ui-widgets'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { hasError, isValid, getValidationText } from '../shared/helpers.js'
import { inputPropType, metaPropType } from '../shared/propTypes.js'

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

export const FileInputFieldFF = ({
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

FileInputFieldFF.defaultProps = {
    placeholder: i18n.t('No file(s) selected yet'),
}

FileInputFieldFF.propTypes = {
    /** `input` props provided by Final Form `Field` */
    input: inputPropType.isRequired,
    /** `meta` props provided by Final Form `Field` */
    meta: metaPropType.isRequired,

    buttonLabel: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    multifile: PropTypes.bool,
    showValidStatus: PropTypes.bool,
    valid: PropTypes.bool,
    validationText: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.instanceOf(File)),
        PropTypes.oneOf(['']),
    ]),
}
