import { useCallback, useMemo, useSyncExternalStore } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'

export interface OuTreeNodeHandle {
    node: StoredNode | undefined
    isOpen: boolean
    childrenStatus: ChildrenStatus
}

/**
 * One node's data, open state and children status, for row components.
 * Subscribes per field, so a row re-renders only when its own node changes.
 */
export const useOuTreeNode = (id: string): OuTreeNodeHandle => {
    const tree = useTreeState()
    const node = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.store.getNode(id), [tree, id])
    )
    const isOpen = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.isOpen(id), [tree, id])
    )
    const childrenStatus = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.store.getChildren(id), [tree, id])
    )
    return useMemo(
        () => ({ node, isOpen, childrenStatus }),
        [node, isOpen, childrenStatus]
    )
}
