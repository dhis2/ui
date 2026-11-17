import { useSyncExternalStore } from 'react'
import { useTreeState } from './ou-tree-provider'

/** The effective search term, for highlighting; undefined in browse mode. */
export const useOuTreeSearchTerm = (): string | undefined => {
    const tree = useTreeState()
    return useSyncExternalStore(tree.subscribe, tree.getSearchTerm)
}
