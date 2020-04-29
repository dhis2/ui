import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-widgets'

import {
    createToggleChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isValid,
    getValidationText,
} from '../shared/helpers.js'

import { metaPropType, inputPropType } from '../shared/propTypes.js'

export const CheckboxControl = ({
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

CheckboxControl.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,

    error: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}
