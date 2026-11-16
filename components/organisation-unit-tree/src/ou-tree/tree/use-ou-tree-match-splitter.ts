import { useSyncExternalStore } from 'react'
import type { MatchSplitter } from '../search'
import { useTreeState } from './ou-tree-provider'

/**
 * The search's match splitter, for highlighting labels; stable while the
 * search lasts, undefined in browse mode.
 */
export const useOuTreeMatchSplitter = (): MatchSplitter | undefined => {
    const tree = useTreeState()
    return useSyncExternalStore(tree.subscribe, tree.getMatchSplitter)
}
