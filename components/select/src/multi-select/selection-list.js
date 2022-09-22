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
            const selectedOption = findOptionChild(value, options)

            if (!selectedOption) {
                const message =
                    `There is no option with the value: "${value}". ` +
                    'Make sure that all the values passed to the selected ' +
                    'prop match the value of an existing option.'
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
                    {selectedOption.props.label}
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
