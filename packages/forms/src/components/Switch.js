import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SwitchField } from '@dhis2/ui-core'

import {
    createToggleChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isValid,
    getValidationText,
} from './shared/helpers.js'
import { metaPropType, inputPropType } from './shared/propTypes.js'

const Switch = ({
    checkedValue,
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
    <SwitchField
        {...rest}
        checked={!!input.value}
        name={input.name}
        error={hasError(meta, error)}
        valid={isValid(meta, valid, showValidStatus)}
        validationText={getValidationText(meta, validationText, error)}
        onFocus={createFocusHandler(input, onFocus)}
        onChange={createToggleChangeHandler(input)}
        onBlur={createBlurHandler(input, onBlur)}
        value={checkedValue}
    />
)

Switch.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,

    checkedValue: propTypes.string,
    error: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { Switch }
