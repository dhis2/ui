import { useCallback, useSyncExternalStore } from 'react'
import { useTreeState } from './ou-tree-provider'

/** Whether the row with this key is the focused row while the tree has focus. */
export const useOuTreeRowFocused = (key: string): boolean => {
    const tree = useTreeState()
    return useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.isFocused(key), [tree, key])
    )
}
