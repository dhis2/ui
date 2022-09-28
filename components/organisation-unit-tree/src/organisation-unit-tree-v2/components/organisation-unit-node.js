import React from 'react'
import { orgUnitIdPropType } from '../../prop-types.js'
import { useOrganisationUnitTreeComponents } from '../hooks/index.js'

export const OrganisationUnitNode = ({ id }) => {
    const { OrganisationUnitNodeChildren, OrganisationUnitNodeLabel } =
        useOrganisationUnitTreeComponents()

    return (
        <li>
            <OrganisationUnitNodeLabel id={id} />
            <OrganisationUnitNodeChildren id={id} />
            <style jsx>{`
                li {
                    list-style: none;
                }
            `}</style>
        </li>
    )
}

OrganisationUnitNode.propTypes = {
    id: orgUnitIdPropType,
}
