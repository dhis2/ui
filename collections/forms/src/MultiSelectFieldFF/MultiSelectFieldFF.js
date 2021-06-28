import { MultiSelectOption } from '@dhis2/ui-core'
import { MultiSelectField } from '@dhis2/ui-widgets'
import PropTypes from 'prop-types'
import React from 'react'
import {
    createSelectChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from '../shared/helpers.js'
import { inputPropType, metaPropType } from '../shared/propTypes.js'

export const MultiSelectFieldFF = ({
    error,
    input,
    loading,
    meta,
    onBlur,
    onFocus,
    options = [],
    showLoadingStatus,
    showValidStatus,
    valid,
    validationText,
    ...rest
}) => {
    return (
        <MultiSelectField
            {...rest}
            name={input.name}
            error={hasError(meta, error)}
            valid={isValid(meta, valid, showValidStatus)}
            loading={isLoading(meta, loading, showLoadingStatus)}
            validationText={getValidationText(meta, validationText, error)}
            onFocus={createFocusHandler(input, onFocus)}
            onChange={createSelectChangeHandler(input)}
            onBlur={createBlurHandler(input, onBlur)}
            selected={
                input.value || []
            } /* input.value is an empty string initially, so we're providing an empty array if falsey */
        >
            {options.map(option => (
                <MultiSelectOption key={option.value} {...option} />
            ))}
        </MultiSelectField>
    )
}

MultiSelectFieldFF.propTypes = {
    /** `input` props provided by Final Form `Field` */
    input: inputPropType.isRequired,
    /** `meta` props provided by Final Form `Field` */
    meta: metaPropType.isRequired,

    error: PropTypes.bool,
    loading: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        })
    ),
    showLoadingStatus: PropTypes.bool,
    showValidStatus: PropTypes.bool,
    valid: PropTypes.bool,
    validationText: PropTypes.string,

    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}
