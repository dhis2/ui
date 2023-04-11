import { useDataEngine } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
    OrganisationUnitTreeManagerContext,
    useOrganisationUnitTreeManager,
} from '../hooks/use-organisation-unit-tree-manager.js'
import {
    OrganisationUnitNodeManager,
    createOrganisationUnitTreeManager,
} from '../manager/index.js'
import {
    OrganisationUnitNodeChildren,
    OrganisationUnitNodeChildrenError,
    OrganisationUnitNodeSiblingsToggler,
} from './organisation-unit-node-children/index.js'
import {
    OrganisationUnitNodeIcon,
    OrganisationUnitNodeLabel,
    OrganisationUnitNodeSelector,
    OrganisationUnitNodeText,
    OrganisationUnitNodeToggler,
} from './organisation-unit-node-label/index.js'
import { OrganisationUnitNode } from './organisation-unit-node.js'
import {
    OrganisationUnitRootContainer,
    OrganisationUnitRootError,
    OrganisationUnitRootFetcher,
    OrganisationUnitRootLoader,
    OrganisationUnitRootNodes,
} from './organisation-unit-tree/index.js'

export const OrganisationUnitTreeProvider = ({
    children,
    enhancers,
    organisationUnitNodeManagerClass,
    organisationUnitNodeChildrenComponent,
    organisationUnitNodeChildrenErrorComponent,
    organisationUnitNodeIconComponent,
    organisationUnitNodeLabelComponent,
    organisationUnitNodeSelectorComponent,
    organisationUnitNodeSiblingsTogglerComponent,
    organisationUnitNodeTextComponent,
    organisationUnitNodeTogglerComponent,
    organisationUnitNodeComponent,
    organisationUnitRootContainerComponent,
    organisationUnitRootErrorComponent,
    organisationUnitRootFetcherComponent,
    organisationUnitRootLoaderComponent,
    organisationUnitRootNodesComponent,
}) => {
    const dataEngine = useDataEngine()
    const providedManager = useOrganisationUnitTreeManager()
    const [resolvedManager] = useState(
        () =>
            providedManager ??
            createOrganisationUnitTreeManager({
                dataEngine,
                components: {
                    organisationUnitNodeChildrenComponent,
                    organisationUnitNodeChildrenErrorComponent,
                    organisationUnitNodeIconComponent,
                    organisationUnitNodeLabelComponent,
                    organisationUnitNodeSelectorComponent,
                    organisationUnitNodeSiblingsTogglerComponent,
                    organisationUnitNodeTextComponent,
                    organisationUnitNodeTogglerComponent,
                    organisationUnitNodeComponent,
                    organisationUnitRootContainerComponent,
                    organisationUnitRootErrorComponent,
                    organisationUnitRootFetcherComponent,
                    organisationUnitRootLoaderComponent,
                    organisationUnitRootNodesComponent,
                },
                enhancers,
                organisationUnitNodeManagerClass,
            })
    )

    if (providedManager) {
        return children
    }

    return (
        <OrganisationUnitTreeManagerContext.Provider value={resolvedManager}>
            {children}
        </OrganisationUnitTreeManagerContext.Provider>
    )
}
/* Note that there are no props for using a custom
 * `OrganisationUnitTreeProvider` since the component cannot replace
 * itself ¯\_(ツ)_/¯. No custom `OrganisationUnitTree` component can
 * be provided either, because there is an implicit contract between
 * the provider and the tree. If devs want to customise it, it would
 * probably be easier to simply write a custom version leveraging the
 * manager and the hooks */
OrganisationUnitTreeProvider.defaultProps = {
    enhancers: [],
    organisationUnitNodeChildrenComponent: OrganisationUnitNodeChildren,
    organisationUnitNodeChildrenErrorComponent: OrganisationUnitNodeChildrenError,
    organisationUnitNodeComponent: OrganisationUnitNode,
    organisationUnitNodeIconComponent: OrganisationUnitNodeIcon,
    organisationUnitNodeLabelComponent: OrganisationUnitNodeLabel,
    organisationUnitNodeManagerClass: OrganisationUnitNodeManager,
    organisationUnitNodeSelectorComponent: OrganisationUnitNodeSelector,
    organisationUnitNodeSiblingsTogglerComponent: OrganisationUnitNodeSiblingsToggler,
    organisationUnitNodeTextComponent: OrganisationUnitNodeText,
    organisationUnitNodeTogglerComponent: OrganisationUnitNodeToggler,
    organisationUnitRootContainerComponent: OrganisationUnitRootContainer,
    organisationUnitRootErrorComponent: OrganisationUnitRootError,
    organisationUnitRootFetcherComponent: OrganisationUnitRootFetcher,
    organisationUnitRootLoaderComponent: OrganisationUnitRootLoader,
    organisationUnitRootNodesComponent: OrganisationUnitRootNodes,
}

OrganisationUnitTreeProvider.propTypes = {
    children: PropTypes.node,
    enhancers: PropTypes.arrayOf(PropTypes.func),
    organisationUnitNodeChildrenComponent: PropTypes.elementType,
    organisationUnitNodeChildrenErrorComponent: PropTypes.elementType,
    organisationUnitNodeComponent: PropTypes.elementType,
    organisationUnitNodeIconComponent: PropTypes.elementType,
    organisationUnitNodeLabelComponent: PropTypes.elementType,
    organisationUnitNodeManagerClass: PropTypes.func,
    organisationUnitNodeSelectorComponent: PropTypes.elementType,
    organisationUnitNodeSiblingsTogglerComponent: PropTypes.elementType,
    organisationUnitNodeTextComponent: PropTypes.elementType,
    organisationUnitNodeTogglerComponent: PropTypes.elementType,
    organisationUnitRootContainerComponent: PropTypes.elementType,
    organisationUnitRootErrorComponent: PropTypes.elementType,
    organisationUnitRootFetcherComponent: PropTypes.elementType,
    organisationUnitRootLoaderComponent: PropTypes.elementType,
    organisationUnitRootNodesComponent: PropTypes.elementType,
}
