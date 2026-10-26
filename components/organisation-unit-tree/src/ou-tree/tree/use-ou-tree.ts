import { useMemo, useSyncExternalStore } from 'react'
import type { RootsStatus } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'
import type { TreeState } from './tree-state'

export type OuTreeHandle = {
    rowCount: number
    rootsStatus: RootsStatus
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
            rowCount: tree.getRowCount(),
            rootsStatus: tree.getRootsStatus(),
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
        // eslint-disable-next-line react-hooks/exhaustive-deps -- version stands for the tree's mutable contents
        [tree, version]
    )
}
