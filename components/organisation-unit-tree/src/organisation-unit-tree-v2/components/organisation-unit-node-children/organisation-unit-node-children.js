import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitNodeChildren,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'
import { OrganisationUnitNodeChildrenError } from './organisation-unit-node-children-error.js'
import { OrganisationUnitNodeSiblingsToggler } from './organisation-unit-node-siblings-toggler.js'

export const OrganisationUnitNodeChildren = ({ id }) => {
    const { OrganisationUnitNode } = useOrganisationUnitTreeComponents()
    const {
        error,
        hiddenSiblingsCount,
        levelDisplayName,
        shouldShowAllSiblingsToggler,
        toggleAllSiblings,
        visibleChildrenIds,
    } = useOrganisationUnitNodeChildren(id)

    if (visibleChildrenIds.length === 0) {
        return null
    }

    if (error) {
        return <OrganisationUnitNodeChildrenError />
    }

    return (
        <>
            {shouldShowAllSiblingsToggler && (
                <OrganisationUnitNodeSiblingsToggler
                    toggleAllSiblings={toggleAllSiblings}
                    hiddenSiblingsCount={hiddenSiblingsCount}
                    levelDisplayName={levelDisplayName}
                />
            )}
            {visibleChildrenIds.map((id) => (
                <OrganisationUnitNode key={id} id={id} />
            ))}
        </>
    )
}

OrganisationUnitNodeChildren.propTypes = {
    id: orgUnitIdPropType,
}
