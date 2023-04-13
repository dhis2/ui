import { Checkbox } from '@dhis2-ui/checkbox'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitNodeCheckbox = ({
    isDisabled,
    hasSelectedDescendant,
    isSelected,
}) => (
    <div className={cx({ isDisabled })}>
        <Checkbox
            checked={isSelected}
            disabled={isDisabled}
            dense
            indeterminate={!isSelected && hasSelectedDescendant}
        />
        <style jsx>{`
            div {
                display: flex;
                height: 24px;
                align-items: center;
                justify-content: center;
            }
            div :global(input) {
                cursor: pointer;
            }
            div :global(input:disabled) {
                cursor: not-allowed;
            }
        `}</style>
    </div>
)

OrganisationUnitNodeCheckbox.propTypes = {
    hasSelectedDescendant: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export { OrganisationUnitNodeCheckbox }
