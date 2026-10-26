import { useSyncExternalStore } from 'react'
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
    const tree = useTreeState('useOuTree')
    useSyncExternalStore(tree.subscribe, tree.getVersion)
    return {
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
    }
}
