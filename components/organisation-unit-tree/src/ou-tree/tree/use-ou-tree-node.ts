import { useSyncExternalStore } from 'react'
import type { CachedNode } from '../node-cache/index'
import { useTreeState } from './ou-tree-provider'

/** One node's data and open state, for row components. */
export const useOuTreeNode = (
    id: string
): { node: CachedNode | undefined; isOpen: boolean } => {
    const tree = useTreeState('useOuTreeNode')
    useSyncExternalStore(tree.subscribe, tree.getVersion)
    return { node: tree.cache.getNode(id), isOpen: tree.isOpen(id) }
}
