import * as React from 'react'

export type OrganisationUnitTreeRoots = string | string[]

interface OrganisationUnitNode {
    id: string
    displayName: string
    children?: number
    path: string
}

interface OrganisationUnitEventPayload extends OrganisationUnitNode {
    checked: boolean
    selected: string[]
}

export interface NodeLabelProps {
    hasChildren: boolean
    hasSelectedDescendants: boolean
    loading: boolean
    error: boolean
    selected: string[]
    open: boolean
    path: string[]
    singleSelection: boolean
    node: OrganisationUnitNode
    label: string
    checked: boolean
    highlighted: boolean
}

export interface OrganisationUnitTreeProps {
    /**
     * Root org unit ID(s)
     */
    roots: OrganisationUnitTreeRoots
    /**
     * Will be called with the following object:
     * `{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }`
     */
    onChange: (
        payload: OrganisationUnitEventPayload,
        event: React.MouseEvent<HTMLSpanElement>
    ) => void
    /**
     * When set, the error when loading children fails will be shown automatically
     */
    autoExpandLoadingError?: boolean
    dataTest?: string
    /**
     * When set to true, no unit can be selected
     */
    disableSelection?: boolean
    expanded?: boolean
    /**
     * All organisation units with a path that includes the provided paths will be shown.
     * All others will not be rendered. When not provided, all org units will be shown.
     */
    filter?: string[]
    /**
     * When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again
     */
    forceReload?: boolean
    handleCollapse?: ({ path: string }) => void
    handleExpand?: ({ path: string }) => void
    /**
     * All units provided to "highlighted" as path will be visually
     * highlighted.
     * Note:
     * The d2-ui component used two props for this:
     * * searchResults
     * * highlightSearchResults
     */
    highlighted?: string[]
    /**
     * An array of OU paths that will be expanded automatically
     * as soon as they are encountered.
     * The path of an OU is the UIDs of the OU
     * and all its parent OUs separated by slashes (/)
     * Note: This replaces "openFirstLevel" as that's redundant
     */
    initiallyExpanded?: string[]
    /**
     * When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units
     */
    isUserDataViewFallback?: boolean
    /**
     * Renders the actual node component for each leaf, can be used to
     * customize the node. The default function just returns the node's
     * displayName
     * Shape of the object passed to the callback:
     * ```
     * {
     * label: string,
     * node: {
     * displayName: string,
     * id: string,
     * // Only provided once `loading` is false
     * path?: string,
     * // Only provided once `loading` is false
     * children?: Array.<{
     * id: string,
     * path: string,
     * displayName: string
     * }>
     * },
     * loading: boolean,
     * error: string,
     * open: boolean,
     * selected: string[],
     * singleSelection: boolean,
     * disableSelection: boolean,
     * }
     * ```
     */
    renderNodeLabel?: (props: NodeLabelProps) => React.ReactNode
    /**
     * An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`)
     */
    selected?: string[]
    /**
     * When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted
     */
    singleSelection?: boolean
    /**
     * Turns off alphabetical sorting of units
     */
    suppressAlphabeticalSorting?: boolean
    /**
     * Called with the children's data that was loaded
     */
    onChildrenLoaded?: (
        data: OrganisationUnitNode & {
            children: Omit<OrganisationUnitNode, 'children'>
        }
    ) => void
    /**
     * Called with `{ path: string }` with the path of the parent of the level closed
     */
    onCollapse?: ({ path: string }) => void
    /**
     * Called with `{ path: string }` with the path of the parent of the level opened
     */
    onExpand?: ({ path: string }) => void
}

export const OrganisationUnitTree: React.FC<OrganisationUnitTreeProps>

export interface RootErrorProps {
    error: string
    dataTest?: string
}

export const RootError: React.FC<RootErrorProps>

export interface RootLoadingProps {
    dataTest?: string
}

export const RootLoading: React.FC<RootLoadingProps>
