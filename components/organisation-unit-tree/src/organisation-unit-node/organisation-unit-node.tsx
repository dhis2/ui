import { Node } from '@dhis2-ui/node'
import React from 'react'
import { leftTrimToRootId } from '../helpers/index.ts'
import type { OrgUnitChild } from '../helpers/index.ts'
import i18n from '../locales/index.js'
import { ErrorMessage } from './error-message.tsx'
import { hasDescendantSelectedPaths } from './has-descendant-selected-paths.ts'
import { Label } from './label/index.ts'
import { LoadingSpinner } from './loading-spinner.tsx'
import { OrganisationUnitNodeChildren } from './organisation-unit-node-children.tsx'
import { useOpenState } from './use-open-state.ts'
import { useOrgData } from './use-org-data/index.ts'

interface RenderNodeLabelParams {
    disableSelection?: boolean
    hasChildren: boolean
    hasSelectedDescendants: boolean
    loading: boolean
    error: Error | null
    selected: string[]
    open: boolean
    path: string
    singleSelection?: boolean
    node: Record<string, unknown>
    label: string
    checked: boolean
    highlighted: boolean
}

export interface OrganisationUnitNodeProps {
    dataTest: string
    id: string
    renderNodeLabel: (params: RenderNodeLabelParams) => React.ReactNode
    rootId: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...args: any[]) => void
    autoExpandLoadingError?: boolean
    disableSelection?: boolean
    displayName?: string
    expanded?: string[]
    filter?: string[]
    highlighted?: string[]
    isUserDataViewFallback?: boolean
    path?: string
    selected?: string[]
    singleSelection?: boolean
    suppressAlphabeticalSorting?: boolean
    onChildrenLoaded?: (node: {
        id: string
        displayName: string
        path: string
        children: OrgUnitChild[]
    }) => void
    onCollapse?: (args: { path: string }) => void
    onExpand?: (args: { path: string }) => void
}

export const OrganisationUnitNode = ({
    autoExpandLoadingError,
    dataTest,
    disableSelection,
    displayName = '',
    expanded = [],
    highlighted = [],
    id,
    isUserDataViewFallback,
    path = '',
    renderNodeLabel,
    rootId,
    selected = [],
    singleSelection,
    filter = [],
    suppressAlphabeticalSorting,
    onChange,
    onChildrenLoaded,
    onCollapse,
    onExpand,
}: OrganisationUnitNodeProps) => {
    const orgData = useOrgData(id, {
        isUserDataViewFallback,
        displayName,
    })

    const strippedPath = leftTrimToRootId(path, rootId)
    const node = {
        ...(orgData.data || {}),
        // guarantee that displayName and id are available before data loaded
        displayName: (orgData.data || {}).displayName || displayName,
        id: (orgData.data || {}).id || id,
        // do not override strippedPath with path from loaded data
        path: strippedPath,
    }
    const hasChildren = !!node.children && node.children > 0

    const hasSelectedDescendants = hasDescendantSelectedPaths(
        strippedPath,
        selected
    )
    const isHighlighted = highlighted.includes(path)
    const { open, onToggleOpen } = useOpenState({
        autoExpandLoadingError,
        errorMessage: orgData.error ? orgData.error.toString() : undefined,
        path: strippedPath,
        expanded,
        onExpand: onExpand || (() => undefined),
        onCollapse: onCollapse || (() => undefined),
    })

    const isSelected = !!selected.find((curPath) =>
        curPath.match(new RegExp(`${strippedPath}$`))
    )

    const labelContent = renderNodeLabel({
        disableSelection,
        hasChildren,
        hasSelectedDescendants,
        loading: orgData.loading,
        error: orgData.error,
        selected,
        open,
        path,
        singleSelection,
        node,
        label: displayName,
        checked: isSelected,
        highlighted: isHighlighted,
    })

    const label = (
        <Label
            node={node}
            fullPath={path}
            open={open}
            loading={orgData.loading}
            checked={isSelected}
            rootId={rootId}
            onChange={onChange}
            dataTest={`${dataTest}-label`}
            selected={selected}
            hasChildren={hasChildren}
            highlighted={isHighlighted}
            onToggleOpen={onToggleOpen}
            disableSelection={disableSelection}
            singleSelection={singleSelection}
            hasSelectedDescendants={hasSelectedDescendants}
        >
            {labelContent}
        </Label>
    )

    /**
     * No children means no arrow, therefore we have to provide something.
     * While "loading" is true, "hasChildren" is false
     * There are some possible children variants as content of this node:
     *
     * 1. Nothing; There are no children
     * 2. Placeholder: There are children, but the Node is closed (show arrow)
     * 3. Error: There are children and loading information somehow failed
     * 4. Child nodes: There are children and the node is open
     */
    const showPlaceholder = hasChildren && !open && !orgData.error
    const showChildNodes = hasChildren && open && !orgData.error

    return (
        <Node
            dataTest={`${dataTest}-node`}
            open={open}
            onOpen={onToggleOpen}
            onClose={onToggleOpen}
            component={label}
            icon={orgData.loading && <LoadingSpinner />}
        >
            {orgData.error && (
                <ErrorMessage dataTest={dataTest}>
                    {i18n.t('Could not load children')}
                </ErrorMessage>
            )}
            {showPlaceholder && <span data-test={`${dataTest}-placeholder`} />}
            {showChildNodes && (
                <OrganisationUnitNodeChildren
                    // Prevent cirular imports
                    OrganisationUnitNode={OrganisationUnitNode}
                    node={node}
                    autoExpandLoadingError={autoExpandLoadingError}
                    dataTest={dataTest}
                    disableSelection={disableSelection}
                    expanded={expanded}
                    filter={filter}
                    highlighted={highlighted}
                    isUserDataViewFallback={isUserDataViewFallback}
                    onChange={onChange}
                    onChildrenLoaded={onChildrenLoaded}
                    onCollapse={onCollapse}
                    onExpand={onExpand}
                    parentPath={path}
                    renderNodeLabel={renderNodeLabel}
                    rootId={rootId}
                    selected={selected}
                    singleSelection={singleSelection}
                    suppressAlphabeticalSorting={suppressAlphabeticalSorting}
                />
            )}
        </Node>
    )
}
