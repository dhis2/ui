import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField } from '@dhis2/ui-widgets'
import { SingleSelectOption } from '@dhis2/ui-core'

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
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string,
            value: propTypes.string,
        })
    ).isRequired,

    error: propTypes.bool,
    loading: propTypes.bool,
    showLoadingStatus: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}
