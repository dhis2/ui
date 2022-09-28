import { useState } from 'react'
import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitTreeComponents = () => {
    const manager = useOrganisationUnitTreeManager()
    const [components] = useState({
        OrganisationUnitNode: manager.components.organisationUnitNodeComponent,
        OrganisationUnitNodeChildren:
            manager.components.organisationUnitNodeChildrenComponent,
        OrganisationUnitNodeIcon:
            manager.components.organisationUnitNodeIconComponent,
        OrganisationUnitNodeLabel:
            manager.components.organisationUnitNodeLabelComponent,
        OrganisationUnitNodeSelector:
            manager.components.organisationUnitNodeSelectorComponent,
        OrganisationUnitNodeText:
            manager.components.organisationUnitNodeTextComponent,
        OrganisationUnitNodeToggler:
            manager.components.organisationUnitNodeTogglerComponent,
        OrganisationUnitRootContainer:
            manager.components.organisationUnitRootContainerComponent,
        OrganisationUnitRootError:
            manager.components.organisationUnitRootErrorComponent,
        OrganisationUnitRootFetcher:
            manager.components.organisationUnitRootFetcherComponent,
        OrganisationUnitRootLoader:
            manager.components.organisationUnitRootLoaderComponent,
        OrganisationUnitRootNodes:
            manager.components.organisationUnitRootNodesComponent,
    })

    return components
}
