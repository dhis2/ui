import { useMemo } from 'react'
import { useTreeState } from './ou-tree-provider'
import type { TreeState } from './tree-state'

export type OuTreeActions = Pick<
    TreeState,
    | 'open'
    | 'close'
    | 'toggle'
    | 'ensureChildrenLoaded'
    | 'retryRoots'
    | 'store'
>

/**
 * The tree's methods and store from the nearest OuTreeProvider, without
 * subscribing: for components that act on the tree but need not re-render
 * when it changes.
 */
export const useOuTreeActions = (): OuTreeActions => {
    const tree = useTreeState()
    return useMemo(
        () => ({
            open: tree.open,
            close: tree.close,
            toggle: tree.toggle,
            ensureChildrenLoaded: tree.ensureChildrenLoaded,
            retryRoots: tree.retryRoots,
            store: tree.store,
        }),
        [tree]
    )
}
