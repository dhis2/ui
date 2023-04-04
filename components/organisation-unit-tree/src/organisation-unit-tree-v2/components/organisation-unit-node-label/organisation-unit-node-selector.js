import { Checkbox } from '@dhis2-ui/checkbox'
import { Radio } from '@dhis2-ui/radio'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitNodeSelector = ({
    isDisabled,
    hasSelectedDescendant,
    isSelected,
    singleSelection,
    toggleSelected,
}) => {
    const indeterminate = !isSelected && hasSelectedDescendant
    const indeterminateRadio = singleSelection && indeterminate
    const SelectionComponent = singleSelection ? Radio : Checkbox

    return (
        <div className={cx({ indeterminateRadio, isDisabled })}>
            <SelectionComponent
                checked={isSelected}
                disabled={isDisabled}
                dense
                indeterminate={indeterminate}
                onChange={toggleSelected}
            />
            <style jsx>{`
                div {
                    display: flex;
                    height: 24px;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                div :global(input) {
                    cursor: pointer;
                }
                div :global(input:disabled) {
                    cursor: not-allowed;
                }
                div.indeterminateRadio :global(svg),
                div.indeterminateRadio
                    :global(svg:not(.checked))
                    > :global(path.outer.checked) {
                    fill: ${colors.teal400};
                }
                div.indeterminateRadio.isDisabled :global(svg),
                div.indeterminateRadio.isDisabled
                    :global(svg:not(.checked))
                    > :global(path.outer.checked) {
                    fill: ${colors.grey400};
                }
            `}</style>
        </div>
    )
}

OrganisationUnitNodeSelector.propTypes = {
    hasSelectedDescendant: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    singleSelection: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func,
}

export { OrganisationUnitNodeSelector }
