import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Checkbox } from '@dhis2/ui-core'
import { ToggleGroupField } from '@dhis2/ui-core'

import {
    hasError,
    isValid,
    getValidationText,
    createFocusHandler,
    createBlurHandler,
} from '../shared/helpers.js'
import {
    toggleGroupOptionsProp,
    inputPropType,
    metaPropType,
} from '../shared/propTypes.js'

const createChangeHandler = ({ value: currentValues, onChange }) => payload => {
    const activeIndex = currentValues.indexOf(payload.value)
    const valueArray =
        activeIndex === -1
            ? [...currentValues, payload.value]
            : currentValues
                  .slice(0, activeIndex)
                  .concat(currentValues.slice(activeIndex + 1))
    const value = valueArray.length === 0 ? '' : valueArray

    onChange(value)
}

export const CheckboxGroupControl = ({
    options,
    input,
    meta,
    error,
    valid,
    showValidStatus,
    validationText,
    onFocus,
    onBlur,
    ...rest
}) => (
    <ToggleGroupField
        {...rest}
        value={input.value || []}
        name={input.name}
        error={hasError(meta, error)}
        valid={isValid(meta, valid, showValidStatus)}
        validationText={getValidationText(meta, validationText, error)}
        onFocus={createFocusHandler(input, onFocus)}
        onChange={createChangeHandler(input)}
        onBlur={createBlurHandler(input, onBlur)}
    >
        {options.map(({ value, label }) => (
            <Checkbox key={value} label={label} value={value} />
        ))}
    </ToggleGroupField>
)

CheckboxGroupControl.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,
    options: toggleGroupOptionsProp.isRequired,

    error: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}
