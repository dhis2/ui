import React, { useEffect, useState } from 'react'
import type { OrgUnitChild } from '../helpers/index.ts'
import { OrganisationUnitNode } from '../organisation-unit-node/index.ts'
import { defaultRenderNodeLabel } from './default-render-node-label/index.ts'
import { filterRootIds } from './filter-root-ids.ts'
import { OrganisationUnitTreeRootError } from './organisation-unit-tree-root-error.tsx'
import { OrganisationUnitTreeRootLoading } from './organisation-unit-tree-root-loading.tsx'
import { useExpanded } from './use-expanded/index.ts'
import { useForceReload } from './use-force-reload.ts'
import { useRootOrgData } from './use-root-org-data/index.ts'

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

export interface OrganisationUnitTreeProps {
    /** Root org unit ID(s) */
    roots: string | string[]

    /** Will be called with the following object:
     * `{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }` */
    onChange: (
        payload: Record<string, unknown>,
        event: React.MouseEvent
    ) => void

    /** When set, the error when loading children fails will be shown automatically */
    autoExpandLoadingError?: boolean

    dataTest?: string

    /** When set to true, no unit can be selected */
    disableSelection?: boolean

    expanded?: string[]

    /**
     * All organisation units with a path that includes the provided paths will be shown.
     * All others will not be rendered. When not provided, all org units will be shown.
     */
    filter?: string[]

    /** When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again */
    forceReload?: boolean

    handleCollapse?: (args: { path: string }) => void

    handleExpand?: (args: { path: string }) => void

    /**
     * All units provided to "highlighted" as path will be visually
     * highlighted.
     */
    highlighted?: string[]

    /**
     * An array of OU paths that will be expanded automatically
     * as soon as they are encountered.
     */
    initiallyExpanded?: string[]

    /** When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units */
    isUserDataViewFallback?: boolean

    /** Renders the actual node component for each leaf, can be used to
     * customize the node. */
    renderNodeLabel?: (params: RenderNodeLabelParams) => React.ReactNode

    /** An array of paths of selected OUs. */
    selected?: string[]

    /** When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted */
    singleSelection?: boolean

    /** Turns off alphabetical sorting of units */
    suppressAlphabeticalSorting?: boolean

    /** Called with the children's data that was loaded */
    onChildrenLoaded?: (node: {
        id: string
        displayName: string
        path: string
        children: OrgUnitChild[]
    }) => void

    /** Called with `{ path: string }` with the path of the parent of the level closed */
    onCollapse?: (args: { path: string }) => void

    /** Called with `{ path: string }` with the path of the parent of the level opened */
    onExpand?: (args: { path: string }) => void
}

// A stable object to reference
const staticArray: string[] = []
const OrganisationUnitTree = ({
    onChange,
    roots,

    autoExpandLoadingError,
    dataTest = 'dhis2-uiwidgets-orgunittree',
    disableSelection,
    forceReload,
    highlighted = staticArray,
    isUserDataViewFallback,
    initiallyExpanded = staticArray,
    filter = staticArray,
    renderNodeLabel = defaultRenderNodeLabel,
    selected = staticArray,
    singleSelection,
    suppressAlphabeticalSorting,

    expanded: expandedControlled,
    handleExpand: handleExpandControlled,
    handleCollapse: handleCollapseControlled,

    onExpand,
    onCollapse,
    onChildrenLoaded,
}: OrganisationUnitTreeProps) => {
    const rootIds = filterRootIds(
        filter,
        Array.isArray(roots) ? roots : [roots]
    )
    const reloadId = useForceReload(forceReload)
    const [prevReloadId, setPrevReloadId] = useState(reloadId)
    const { called, loading, error, data, refetch } = useRootOrgData(rootIds, {
        isUserDataViewFallback,
    })

    const { expanded, handleExpand, handleCollapse } = useExpanded({
        initiallyExpanded,
        onExpand,
        onCollapse,
        expandedControlled,
        handleExpandControlled,
        handleCollapseControlled,
    })

    useEffect(() => {
        // do not refetch on initial render
        if (refetch && reloadId > 0 && reloadId !== prevReloadId) {
            refetch()
            setPrevReloadId(reloadId)
        }

        return () =>
            console.warn(
                '@TODO: Why does this component unmount after a force reload?'
            )
    }, [reloadId, prevReloadId, refetch])

    const isLoading = !called || loading

    return (
        <div data-test={dataTest}>
            {isLoading && <OrganisationUnitTreeRootLoading />}
            {error && (
                <OrganisationUnitTreeRootError error={error.toString()} />
            )}
            {!error &&
                !isLoading &&
                data &&
                rootIds.map((rootId) => {
                    const rootNode = data[rootId]

                    return (
                        <OrganisationUnitNode
                            key={rootNode.path}
                            rootId={rootId}
                            autoExpandLoadingError={autoExpandLoadingError}
                            dataTest={dataTest}
                            disableSelection={disableSelection}
                            displayName={rootNode.displayName}
                            expanded={expanded}
                            highlighted={highlighted}
                            id={rootId}
                            isUserDataViewFallback={isUserDataViewFallback}
                            filter={filter}
                            path={rootNode.path}
                            renderNodeLabel={renderNodeLabel}
                            selected={selected}
                            singleSelection={singleSelection}
                            suppressAlphabeticalSorting={
                                suppressAlphabeticalSorting
                            }
                            onChange={onChange}
                            onChildrenLoaded={onChildrenLoaded}
                            onCollapse={handleCollapse}
                            onExpand={handleExpand}
                        />
                    )
                })}
        </div>
    )
}

export { OrganisationUnitTree }
