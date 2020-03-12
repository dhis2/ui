import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import {
    createSelectChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from './shared/helpers.js'
import { inputPropType, metaPropType } from './shared/propTypes.js'

const SingleSelect = ({
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
            selected={
                input.value || {}
            } /* input.value is an empty string initially, so we're providing an empty object if falsey */
        >
            {options.map(option => (
                <SingleSelectOption key={option.value} {...option} />
            ))}
        </SingleSelectField>
    )
}

SingleSelect.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,
    options: propTypes.arrayOf(SingleSelectField.propTypes.selected).isRequired,

    error: propTypes.bool,
    loading: propTypes.bool,
    showLoadingStatus: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { SingleSelect }
