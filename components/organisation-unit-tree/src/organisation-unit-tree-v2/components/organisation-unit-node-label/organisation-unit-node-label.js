import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitNodeLabel,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'

const OrganisationUnitNodeLabel = ({ id }) => {
    const {
        OrganisationUnitNodeCheckbox,
        OrganisationUnitNodeIcon,
        OrganisationUnitNodeSelectedDescendantCount,
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
                isSelected={isSelected}
                singleSelection={singleSelection}
                toggleSelected={toggleSelected}
            >
                {!singleSelection && (
                    <OrganisationUnitNodeCheckbox
                        hasSelectedDescendant={hasSelectedDescendant}
                        isSelected={isSelected}
                        singleSelection={singleSelection}
                        toggleSelected={toggleSelected}
                        isDisabled={isDisabled}
                    />
                )}
                <OrganisationUnitNodeIcon
                    isDisabled={isDisabled}
                    isLeafNode={isLeafNode}
                    isOpen={isOpen}
                />
                <OrganisationUnitNodeText
                    displayName={displayName}
                    filteredString={filteredString}
                    isDisabled={isDisabled}
                    isFilterMatch={isFilterMatch}
                    isLeafNode={isLeafNode}
                    isSelected={isSelected}
                    singleSelection={singleSelection}
                />
                {hasSelectedDescendant && (
                    <OrganisationUnitNodeSelectedDescendantCount
                        selectedDescendantsCount={selectedDescendantsCount}
                    />
                )}
            </OrganisationUnitNodeSelector>
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
