import PropTypes from 'prop-types'
import React from 'react'
import { orgUnitIdPropType } from '../../../prop-types.js'
import { useOrganisationUnitTreeComponents } from '../../hooks/index.js'

const OrganisationUnitRootNodes = React.memo(
    function OrganisationUnitRootNodes({ rootIds }) {
        const { OrganisationUnitNode } = useOrganisationUnitTreeComponents()

        return (
            <ul>
                {rootIds.map((rootId) => (
                    <OrganisationUnitNode key={rootId} id={rootId} />
                ))}
                <style jsx>{`
                    ul {
                        padding: 0;
                        margin: 0;
                    }
                `}</style>
            </ul>
        )
    }
)

OrganisationUnitRootNodes.propTypes = {
    rootIds: PropTypes.arrayOf(orgUnitIdPropType).isRequired,
}

export { OrganisationUnitRootNodes }
