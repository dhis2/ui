import { useMemo, useSyncExternalStore } from 'react'
import type { RootsStatus } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'
import type { SearchStatus, TreeMode, TreeState } from './tree-state'

export type OuTreeHandle = {
    rowCount: number
    rootsStatus: RootsStatus
    rootIds: string[]
    mode: TreeMode
    searchStatus: SearchStatus
    /** Changes whenever the tree does; a key for memoisation downstream. */
    version: number
} & Pick<
    TreeState,
    | 'getRow'
    | 'getRowIndex'
    | 'open'
    | 'close'
    | 'toggle'
    | 'isOpen'
    | 'ensureChildrenLoaded'
    | 'retryRoots'
    | 'store'
>

/** The tree from the nearest OuTreeProvider, re-rendering on every change. */
export const useOuTree = (): OuTreeHandle => {
    const tree = useTreeState()
    const version = useSyncExternalStore(tree.subscribe, tree.getVersion)
    // One object per tree change, so consumers can use it in dependencies.
    return useMemo(
        () => ({
            version,
            rowCount: tree.getRowCount(),
            rootsStatus: tree.getRootsStatus(),
            rootIds: tree.rootIds,
            mode: tree.getMode(),
            searchStatus: tree.getSearchStatus(),
            getRow: tree.getRow,
            getRowIndex: tree.getRowIndex,
            open: tree.open,
            close: tree.close,
            toggle: tree.toggle,
            isOpen: tree.isOpen,
            ensureChildrenLoaded: tree.ensureChildrenLoaded,
            retryRoots: tree.retryRoots,
            store: tree.store,
        }),
        [tree, version]
    )
}
