import { SingleSelectOption, SingleSelectField } from '@dhis2-ui/select'
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

export const SingleSelectFieldFF = ({
    error,
    input,
    loading,
    meta,
    onBlur,
    onFocus,
    options,
    showLoadingStatus,
    showValidStatus,
    valid,
    validationText,
    ...rest
}) => {
    return (
        <SingleSelectField
            {...rest}
            name={input.name}
            error={hasError(meta, error)}
            valid={isValid(meta, valid, showValidStatus)}
            loading={isLoading(meta, loading, showLoadingStatus)}
            validationText={getValidationText(meta, validationText, error)}
            onFocus={createFocusHandler(input, onFocus)}
            onChange={createSelectChangeHandler(input)}
            onBlur={createBlurHandler(input, onBlur)}
            selected={input.value || ''}
        >
            {options.map(option => (
                <SingleSelectOption key={option.value} {...option} />
            ))}
        </SingleSelectField>
    )
}

SingleSelectFieldFF.propTypes = {
    /** `input` props received from Final Form `Field` */
    input: inputPropType.isRequired,
    /** `meta` props received from Final Form `Field` */
    meta: metaPropType.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        })
    ).isRequired,

    error: PropTypes.bool,
    loading: PropTypes.bool,
    showLoadingStatus: PropTypes.bool,
    showValidStatus: PropTypes.bool,
    valid: PropTypes.bool,
    validationText: PropTypes.string,

    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}
