import { useCallback, useMemo, useSyncExternalStore } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import { useTreeState } from './ou-tree-provider'

export interface OuTreeNodeHandle {
    node: StoredNode | undefined
    isOpen: boolean
    childrenStatus: ChildrenStatus
    /** A direct search result; false in browse mode. */
    isResult: boolean
    /** Showing all its children, not only the matching ones, when open in filtered mode. */
    isRevealed: boolean
    /** Has children on the way to a result; false in browse mode. */
    hasMatchingChildren: boolean
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
    const isResult = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.isResult(id), [tree, id])
    )
    const isRevealed = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.isRevealed(id), [tree, id])
    )
    const hasMatchingChildren = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.hasMatchingChildren(id), [tree, id])
    )
    return useMemo(
        () => ({
            node,
            isOpen,
            childrenStatus,
            isResult,
            isRevealed,
            hasMatchingChildren,
        }),
        [
            node,
            isOpen,
            childrenStatus,
            isResult,
            isRevealed,
            hasMatchingChildren,
        ]
    )
}
