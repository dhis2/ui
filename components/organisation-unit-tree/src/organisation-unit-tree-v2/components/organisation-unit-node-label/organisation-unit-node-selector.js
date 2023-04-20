import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitNodeSelector = ({
    children,
    singleSelection,
    isSelected,
    toggleSelected,
}) => (
    <div
        onClick={toggleSelected}
        className={cx('container', { singleSelection, isSelected })}
    >
        {children}
        <style jsx>{`
            div.container {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-radius: 5px;
                cursor: pointer;
            }
            div.singleSelection {
                padding: 0 ${spacers.dp4};
            }
            div.singleSelection.isSelected {
                background-color: ${colors.teal600};
            }
        `}</style>
    </div>
)

OrganisationUnitNodeSelector.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    singleSelection: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func,
}

export { OrganisationUnitNodeSelector }
