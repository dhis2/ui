import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import {
    useOrganisationUnitNodeChildren,
    useOrganisationUnitTreeComponents,
} from '../../hooks/index.js'
import { OrganisationUnitNodeSiblingsLoader } from './organisation-unit-node-siblings-loader.js'

export const OrganisationUnitNodeChildren = ({ id }) => {
    const { OrganisationUnitNode } = useOrganisationUnitTreeComponents()
    const {
        error,
        hiddenSiblingsCount,
        loadAllSiblings,
        shouldShowLoadAllSiblings,
        visibleChildrenIds,
    } = useOrganisationUnitNodeChildren(id)

    if (visibleChildrenIds.length === 0) {
        return null
    }

    if (error || 1 === 1) {
        return (
            <li>
                <IconErrorFilled16 />
                {i18n.t('Could not load children')}
                <style jsx>{`
                    li {
                        display: inline-flex;
                        align-items: flex-end;
                        justify-content: flex-start;
                        list-style: none;
                        color: ${colors.red700};
                        font-size: 14px;
                        line-height: 16px;
                        padding-inline-start: 2px;
                    }
                `}</style>
            </li>
        )
    }

    return (
        <>
            {shouldShowLoadAllSiblings && (
                <OrganisationUnitNodeSiblingsLoader
                    loadAllSiblings={loadAllSiblings}
                    hiddenSiblingsCount={hiddenSiblingsCount}
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
