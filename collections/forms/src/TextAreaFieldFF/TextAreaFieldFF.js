import { TextAreaField } from '@dhis2/ui-widgets'
import PropTypes from 'prop-types'
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
    /** `input` props received from Final Form `Field` */
    input: inputPropType.isRequired,
    /** `meta` props received from Final Form `Field` */
    meta: metaPropType.isRequired,

    error: PropTypes.bool,
    loading: PropTypes.bool,
    showLoadingStatus: PropTypes.bool,
    showValidStatus: PropTypes.bool,
    valid: PropTypes.bool,
    validationText: PropTypes.string,

    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}
