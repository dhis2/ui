import React from 'react'
import { isPathIncluded } from '../helpers/index.ts'
import type { OrgUnitChild } from '../helpers/index.ts'
import i18n from '../locales/index.js'
import { LoadingSpinner } from './loading-spinner.tsx'
import { useOrgChildren } from './use-org-children.ts'

interface OrgUnitNodeChildrenNode {
    id: string
    path: string
    displayName: string
    children?: number | OrgUnitChild[]
}

const getFilteredChildren = ({
    orgChildren,
    filter,
    node,
}: {
    orgChildren: OrgUnitChild[]
    filter: string[]
    node: OrgUnitNodeChildrenNode
}): OrgUnitChild[] => {
    if (!filter?.length) {
        return orgChildren
    }

    return orgChildren.filter((child) => {
        return isPathIncluded(filter, `${node.path}/${child.id}`)
    })
}

export interface OrganisationUnitNodeChildrenProps {
    OrganisationUnitNode: React.ComponentType<OrganisationUnitNodeComponentProps>
    dataTest: string
    node: OrgUnitNodeChildrenNode
    parentPath: string
    renderNodeLabel: (params: RenderNodeLabelParams) => React.ReactNode
    rootId: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...args: any[]) => void
    autoExpandLoadingError?: boolean
    disableSelection?: boolean
    expanded?: string[]
    filter?: string[]
    highlighted?: string[]
    isUserDataViewFallback?: boolean
    selected?: string[]
    singleSelection?: boolean
    suppressAlphabeticalSorting?: boolean
    onChildrenLoaded?: (
        node: OrgUnitNodeChildrenNode & { children: OrgUnitChild[] }
    ) => void
    onCollapse?: (args: { path: string }) => void
    onExpand?: (args: { path: string }) => void
}

interface OrganisationUnitNodeComponentProps {
    autoExpandLoadingError?: boolean
    dataTest: string
    disableSelection?: boolean
    displayName: string
    expanded?: string[]
    filter?: string[]
    highlighted?: string[]
    id: string
    isUserDataViewFallback?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...args: any[]) => void
    onChildrenLoaded?: (
        node: OrgUnitNodeChildrenNode & { children: OrgUnitChild[] }
    ) => void
    onCollapse?: (args: { path: string }) => void
    onExpand?: (args: { path: string }) => void
    path: string
    renderNodeLabel: (params: RenderNodeLabelParams) => React.ReactNode
    rootId: string
    selected?: string[]
    singleSelection?: boolean
    suppressAlphabeticalSorting?: boolean
}

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

export const OrganisationUnitNodeChildren = ({
    node,
    autoExpandLoadingError,
    dataTest,
    disableSelection,
    expanded,
    filter = [],
    highlighted,
    isUserDataViewFallback,
    onChange,
    onChildrenLoaded,
    onCollapse,
    onExpand,
    parentPath,
    renderNodeLabel,
    rootId,
    selected,
    singleSelection,
    suppressAlphabeticalSorting,
    OrganisationUnitNode,
}: OrganisationUnitNodeChildrenProps) => {
    const orgChildren = useOrgChildren({
        node,
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
        onComplete: onChildrenLoaded,
    })

    const displayChildren =
        orgChildren.called && !orgChildren.loading && !orgChildren.error
    const filteredChildren = displayChildren
        ? getFilteredChildren({ orgChildren: orgChildren.data!, filter, node })
        : []

    return (
        <>
            {orgChildren.loading && <LoadingSpinner />}
            {orgChildren.error && `Error: ${orgChildren.error}`}
            {displayChildren &&
                !filteredChildren.length &&
                i18n.t('No children match filter')}

            {!!filteredChildren.length &&
                filteredChildren.map((child) => {
                    const childPath = `${parentPath}/${child.id}`

                    return (
                        <OrganisationUnitNode
                            autoExpandLoadingError={autoExpandLoadingError}
                            dataTest={dataTest}
                            disableSelection={disableSelection}
                            displayName={child.displayName}
                            expanded={expanded}
                            filter={filter}
                            highlighted={highlighted}
                            id={child.id}
                            isUserDataViewFallback={isUserDataViewFallback}
                            key={childPath}
                            onChange={onChange}
                            onChildrenLoaded={onChildrenLoaded}
                            onCollapse={onCollapse}
                            onExpand={onExpand}
                            path={childPath}
                            renderNodeLabel={renderNodeLabel}
                            rootId={rootId}
                            selected={selected}
                            singleSelection={singleSelection}
                            suppressAlphabeticalSorting={
                                suppressAlphabeticalSorting
                            }
                        />
                    )
                })}
        </>
    )
}
