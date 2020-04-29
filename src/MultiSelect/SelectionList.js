import React from 'react'
import propTypes from '@dhis2/prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { Chip } from '../Chip.js'
import { removeOption, findOptionChild } from '../Select/option-helpers.js'

const createRemoveHandler = ({ selected, onChange, value, label }) => (
    _,
    e
) => {
    const clickedOption = { value, label }
    const filtered = removeOption(clickedOption, selected)
    const data = { selected: filtered }

    onChange(data, e)
}

const SelectionList = ({ selected, onChange, disabled, options }) => (
    <React.Fragment>
        {selected.map(({ value, label }) => {
            const selectedOption = findOptionChild({ value, label }, options)

            if (!selectedOption) {
                const message =
                    'The selected option could not be found as a child of the select. ' +
                    'Make sure that the value and label for all options passed to the ' +
                    '`selected` prop matches an existing option.'
                throw new Error(message)
            }

            // The chip should be disabled if the option or the select are disabled
            const isDisabled = selectedOption.props.disabled || disabled

            // Create an onRemove handler, but only if it's not disabled
            const onRemove = isDisabled
                ? undefined
                : createRemoveHandler({
                      selected,
                      onChange,
                      value,
                      label,
                  })

            return (
                <Chip
                    key={label}
                    onRemove={onRemove}
                    disabled={isDisabled}
                    overflow
                    dense
                >
                    {label}
                </Chip>
            )
        })}
    </React.Fragment>
)

SelectionList.propTypes = {
    disabled: propTypes.bool,
    options: propTypes.node,
    selected: multiSelectedPropType,
    onChange: propTypes.func,
}

export { SelectionList }
