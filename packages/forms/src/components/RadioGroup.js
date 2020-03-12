import React from 'react'
import propTypes from '@dhis2/prop-types'
import { RadioGroupField, Radio } from '@dhis2/ui-core'

import {
    createChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from './shared/helpers.js'
import {
    toggleGroupOptionsProp,
    metaPropType,
    inputPropType,
} from './shared/propTypes.js'

const RadioGroup = ({
    input,
    meta,
    options,
    error,
    showValidStatus,
    valid,
    validationText,
    onBlur,
    onFocus,
    loading,
    showLoadingStatus,
    ...rest
}) => {
    return (
        <RadioGroupField
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
        >
            {options.map(({ value, label }) => (
                <Radio key={value} label={label} value={value} />
            ))}
        </RadioGroupField>
    )
}

RadioGroup.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,
    options: toggleGroupOptionsProp.isRequired,

    error: propTypes.bool,
    loading: propTypes.bool,
    showLoadingStatus: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { RadioGroup }
