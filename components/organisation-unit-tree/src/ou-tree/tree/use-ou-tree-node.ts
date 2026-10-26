import { useMemo, useSyncExternalStore } from 'react'
import type { StoredNode } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'

/** One node's data and open state, for row components. */
export const useOuTreeNode = (
    id: string
): { node: StoredNode | undefined; isOpen: boolean } => {
    const tree = useTreeState()
    const version = useSyncExternalStore(tree.subscribe, tree.getVersion)
    return useMemo(
        () => ({ node: tree.store.getNode(id), isOpen: tree.isOpen(id) }),
        // eslint-disable-next-line react-hooks/exhaustive-deps -- version stands for the tree's mutable contents
        [tree, version, id]
    )
}
