import { Chip } from '@dhis2-ui/chip'
import PropTypes from 'prop-types'
import React from 'react'
import { removeOption, findOptionChild } from '../select/index.js'

const createRemoveHandler =
    ({ selected, onChange, value }) =>
    (_, e) => {
        const filtered = removeOption(value, selected)
        const data = { selected: filtered }

        onChange(data, e)
    }

const SelectionList = ({ selected, onChange, disabled, options }) => (
    <React.Fragment>
        {selected.map((value) => {
            const isProduction = process.env.NODE_ENV === 'production'
            const selectedOption = findOptionChild(value, options)

            if (!selectedOption) {
                const message =
                    `There is no option with the value: "${value}". ` +
                    'Make sure that all the values passed to the selected ' +
                    'prop match the value of an existing option.'

                if (isProduction) {
                    // Don't crash the app if in production
                    console.error(message)
                } else {
                    // Throw error if not in production for maximum visibility
                    throw new Error(message)
                }
            }

            const isDisabled = selectedOption
                ? // The chip should be disabled if the option or the select are disabled
                  selectedOption.props.disabled || disabled
                : // If there is no selected option, just look at the select
                  disabled
            // Use the selected value if we do not have a label
            const label = selectedOption ? selectedOption.props.label : value

            // Create an onRemove handler, but only if it's not disabled
            const onRemove = isDisabled
                ? undefined
                : createRemoveHandler({
                      selected,
                      onChange,
                      value,
                  })

            return (
                <Chip
                    key={value}
                    onRemove={onRemove}
                    disabled={isDisabled}
                    marginBottom="0"
                    marginLeft="0"
                    marginTop="0"
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
    disabled: PropTypes.bool,
    options: PropTypes.node,
    selected: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
}

export { SelectionList }
