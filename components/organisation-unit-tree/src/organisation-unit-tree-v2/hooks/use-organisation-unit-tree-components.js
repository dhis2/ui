import { useState } from 'react'
import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitTreeComponents = () => {
    const manager = useOrganisationUnitTreeManager()
    const [components] = useState(() => {
        const {
            organisationUnitNodeComponent,
            organisationUnitNodeChildrenComponent,
            organisationUnitNodeIconComponent,
            organisationUnitNodeLabelComponent,
            organisationUnitNodeSelectorComponent,
            organisationUnitNodeTextComponent,
            organisationUnitNodeTogglerComponent,
            organisationUnitRootContainerComponent,
            organisationUnitRootErrorComponent,
            organisationUnitRootFetcherComponent,
            organisationUnitRootLoaderComponent,
            organisationUnitRootNodesComponent,
        } = manager.getComponents()
        return {
            OrganisationUnitNode: organisationUnitNodeComponent,
            OrganisationUnitNodeChildren: organisationUnitNodeChildrenComponent,
            OrganisationUnitNodeIcon: organisationUnitNodeIconComponent,
            OrganisationUnitNodeLabel: organisationUnitNodeLabelComponent,
            OrganisationUnitNodeSelector: organisationUnitNodeSelectorComponent,
            OrganisationUnitNodeText: organisationUnitNodeTextComponent,
            OrganisationUnitNodeToggler: organisationUnitNodeTogglerComponent,
            OrganisationUnitRootContainer:
                organisationUnitRootContainerComponent,
            OrganisationUnitRootError: organisationUnitRootErrorComponent,
            OrganisationUnitRootFetcher: organisationUnitRootFetcherComponent,
            OrganisationUnitRootLoader: organisationUnitRootLoaderComponent,
            OrganisationUnitRootNodes: organisationUnitRootNodesComponent,
        }
    })

    return components
}
