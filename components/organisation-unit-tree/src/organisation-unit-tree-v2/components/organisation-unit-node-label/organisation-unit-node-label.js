import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitNodeLabel,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'

const OrganisationUnitNodeLabel = ({ id }) => {
    const {
        OrganisationUnitNodeIcon,
        OrganisationUnitNodeSelector,
        OrganisationUnitNodeText,
        OrganisationUnitNodeToggler,
    } = useOrganisationUnitTreeComponents()

    const {
        displayName,
        filteredString,
        hasSelectedDescendant,
        isDisabled,
        isFilterMatch,
        isLeafNode,
        isLoading,
        isOpen,
        isSelected,
        singleSelection,
        toggleOpen,
        toggleSelected,
    } = useOrganisationUnitNodeLabel(id)

    return (
        <div>
            <OrganisationUnitNodeToggler
                isLeafNode={isLeafNode}
                isOpen={isOpen}
                isLoading={isLoading}
                toggleOpen={toggleOpen}
            />
            <OrganisationUnitNodeSelector
                hasSelectedDescendant={hasSelectedDescendant}
                isSelected={isSelected}
                singleSelection={singleSelection}
                toggleSelected={toggleSelected}
                isDisabled={isDisabled}
            />
            <OrganisationUnitNodeIcon
                isDisabled={isDisabled}
                isLeafNode={isLeafNode}
                isOpen={isOpen}
                toggleOpen={toggleOpen}
            />
            <OrganisationUnitNodeText
                displayName={displayName}
                isFilterMatch={isFilterMatch}
                isLeafNode={isLeafNode}
                filteredString={filteredString}
                toggleOpen={toggleOpen}
                isDisabled={isDisabled}
            />
            <style jsx>{`
                div {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

OrganisationUnitNodeLabel.propTypes = {
    id: orgUnitIdPropType,
}

export { OrganisationUnitNodeLabel }
