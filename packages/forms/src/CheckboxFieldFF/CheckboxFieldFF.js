import { CheckboxField } from '@dhis2/ui-widgets'
import PropTypes from 'prop-types'
import React from 'react'
import {
    createToggleChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isValid,
    getValidationText,
} from '../shared/helpers.js'
import { metaPropType, inputPropType } from '../shared/propTypes.js'

export const CheckboxFieldFF = ({
    error,
    input,
    meta,
    showValidStatus,
    valid,
    validationText,
    onBlur,
    onFocus,
    ...rest
}) => (
    <CheckboxField
        {...rest}
        name={input.name}
        checked={input.checked}
        value={input.value}
        error={hasError(meta, error)}
        valid={isValid(meta, valid, showValidStatus)}
        validationText={getValidationText(meta, validationText, error)}
        onFocus={createFocusHandler(input, onFocus)}
        onChange={createToggleChangeHandler(input)}
        onBlur={createBlurHandler(input, onBlur)}
    />
)

CheckboxFieldFF.propTypes = {
    /** Provided by Final Form `Field` */
    input: inputPropType.isRequired,
    /** Provided by Final Form `Field` */
    meta: metaPropType.isRequired,

    error: PropTypes.bool,
    showValidStatus: PropTypes.bool,
    valid: PropTypes.bool,
    validationText: PropTypes.string,

    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}
