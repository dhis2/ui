import React from 'react'
import { OrganisationUnitTreeProvider } from './organisation-unit-tree-provider.js'
import { OrganisationUnitTree } from './organisation-unit-tree/index.js'

const ManagedOrganisationUnitTree = (props) => (
    <OrganisationUnitTreeProvider>
        <OrganisationUnitTree {...props} />
    </OrganisationUnitTreeProvider>
)

export { ManagedOrganisationUnitTree }
