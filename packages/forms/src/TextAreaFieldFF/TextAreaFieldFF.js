import propTypes from '@dhis2/prop-types'
import { TextAreaField } from '@dhis2/ui-widgets'
import React from 'react'
import {
    createChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from '../shared/helpers.js'
import { metaPropType, inputPropType } from '../shared/propTypes.js'

export const TextAreaFieldFF = ({
    input,
    meta,
    error,
    showValidStatus,
    valid,
    validationText,
    onBlur,
    onFocus,
    loading,
    showLoadingStatus,
    ...rest
}) => (
    <TextAreaField
        {...rest}
        name={input.name}
        error={hasError(meta, error)}
        valid={isValid(meta, valid, showValidStatus)}
        loading={isLoading(meta, loading, showLoadingStatus)}
        validationText={getValidationText(meta, validationText, error)}
        onFocus={createFocusHandler(input, onFocus)}
        onChange={createChangeHandler(input)}
        onBlur={createBlurHandler(input, onBlur)}
        value={input.value}
    />
)

TextAreaFieldFF.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,

    error: propTypes.bool,
    loading: propTypes.bool,
    showLoadingStatus: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}
