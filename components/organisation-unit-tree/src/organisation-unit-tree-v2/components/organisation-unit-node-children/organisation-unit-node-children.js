import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
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

    return (
        <ul>
            {error && (
                <li>
                    <span className="error">
                        {i18n.t('Could not load children')}
                    </span>
                </li>
            )}
            {!error && shouldShowLoadAllSiblings && (
                <OrganisationUnitNodeSiblingsLoader
                    loadAllSiblings={loadAllSiblings}
                    hiddenSiblingsCount={hiddenSiblingsCount}
                />
            )}
            {!error &&
                visibleChildrenIds.map((id) => (
                    <OrganisationUnitNode key={id} id={id} />
                ))}
            <style jsx>{`
                ul {
                    margin: 0 0 0 11px;
                    padding: 0 0 0 12px;
                    background-image: linear-gradient(
                            ${colors.grey400},
                            ${colors.grey400}
                        ),
                        linear-gradient(transparent, transparent);
                    background-repeat: no-repeat;
                    background-size: 1px calc(100% - 12px), 12px 100%;
                    background-position: left top, 1px 0;
                }
            `}</style>
        </ul>
    )
}

OrganisationUnitNodeChildren.propTypes = {
    id: orgUnitIdPropType,
}
