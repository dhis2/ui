import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitNodeLabel,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'
import { OrganisationUnitNodeSelectedDescendantCount } from './organisation-unit-node-selected-descendant-count.js'

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
        selectedDescendantsCount,
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
            {hasSelectedDescendant && (
                <OrganisationUnitNodeSelectedDescendantCount
                    selectedDescendantsCount={selectedDescendantsCount}
                />
            )}
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
            `}</style>
        </div>
    )
}

OrganisationUnitNodeLabel.propTypes = {
    id: orgUnitIdPropType,
}

export { OrganisationUnitNodeLabel }
