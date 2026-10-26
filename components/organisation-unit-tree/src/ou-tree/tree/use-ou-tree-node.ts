import { useSyncExternalStore } from 'react'
import type { StoredNode } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'

/** One node's data and open state, for row components. */
export const useOuTreeNode = (
    id: string
): { node: StoredNode | undefined; isOpen: boolean } => {
    const tree = useTreeState()
    useSyncExternalStore(tree.subscribe, tree.getVersion)
    return { node: tree.store.getNode(id), isOpen: tree.isOpen(id) }
}
