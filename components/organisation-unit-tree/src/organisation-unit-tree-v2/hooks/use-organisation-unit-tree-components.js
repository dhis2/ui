import { useState } from 'react'
import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitTreeComponents = () => {
    const manager = useOrganisationUnitTreeManager()
    const [components] = useState(() => {
        const {
            organisationUnitNodeChildrenComponent,
            organisationUnitNodeChildrenErrorComponent,
            organisationUnitNodeCheckboxComponent,
            organisationUnitNodeIconComponent,
            organisationUnitNodeLabelComponent,
            organisationUnitNodeSelectorComponent,
            organisationUnitNodeSiblingsTogglerComponent,
            organisationUnitNodeTextComponent,
            organisationUnitNodeTogglerComponent,
            organisationUnitNodeSelectedDescendantCountComponent,
            organisationUnitNodeComponent,
            organisationUnitRootContainerComponent,
            organisationUnitRootErrorComponent,
            organisationUnitRootFetcherComponent,
            organisationUnitRootLoaderComponent,
            organisationUnitRootNodesComponent,
        } = manager.getComponents()
        return {
            OrganisationUnitNodeChildren: organisationUnitNodeChildrenComponent,
            OrganisationUnitNodeChildrenError: organisationUnitNodeChildrenErrorComponent,
            OrganisationUnitNodeCheckbox: organisationUnitNodeCheckboxComponent,
            OrganisationUnitNodeIcon: organisationUnitNodeIconComponent,
            OrganisationUnitNodeLabel: organisationUnitNodeLabelComponent,
            OrganisationUnitNodeSelector: organisationUnitNodeSelectorComponent,
            OrganisationUnitNodeSiblingsToggler: organisationUnitNodeSiblingsTogglerComponent,
            OrganisationUnitNodeText: organisationUnitNodeTextComponent,
            OrganisationUnitNodeToggler: organisationUnitNodeTogglerComponent,
            OrganisationUnitNodeSelectedDescendantCount: organisationUnitNodeSelectedDescendantCountComponent,
            OrganisationUnitNode: organisationUnitNodeComponent,
            OrganisationUnitRootContainer: organisationUnitRootContainerComponent,
            OrganisationUnitRootError: organisationUnitRootErrorComponent,
            OrganisationUnitRootFetcher: organisationUnitRootFetcherComponent,
            OrganisationUnitRootLoader: organisationUnitRootLoaderComponent,
            OrganisationUnitRootNodes: organisationUnitRootNodesComponent,
        }
    })

    return components
}
