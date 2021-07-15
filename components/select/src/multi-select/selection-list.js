import { Chip } from '@dhis2-ui/chip'
import propTypes from '@dhis2/prop-types'
import React from 'react'

const SelectionList = ({ selectedOptions, disabled }) => (
    <React.Fragment>
        {selectedOptions.map(selectedOption => {
            // The chip should be disabled if the option or the select are disabled
            const isDisabled = selectedOption.disabled || disabled

            return (
                <Chip
                    key={selectedOption.value}
                    onRemove={isDisabled ? undefined : selectedOption.onRemove}
                    disabled={isDisabled}
                    overflow
                    dense
                >
                    {selectedOption.label}
                </Chip>
            )
        })}
    </React.Fragment>
)

SelectionList.propTypes = {
    selectedOptions: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            onRemove: propTypes.func.isRequired,
            disabled: propTypes.bool,
        })
    ).isRequired,
    disabled: propTypes.bool,
}

export { SelectionList }
