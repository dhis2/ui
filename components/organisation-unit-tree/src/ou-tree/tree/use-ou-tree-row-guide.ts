import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { useTreeState } from './ou-tree-provider'

export interface OuTreeRowGuide {
    /** The indent level lit on this row, if it is in the lit branch. */
    litLevel: number | undefined
    /** Whether this node is the lit branch's ancestor: its toggle line is lit. */
    isGuideAncestor: boolean
}

/** What of the lit guide line a row shows. */
export const useOuTreeRowGuide = (key: string): OuTreeRowGuide => {
    const tree = useTreeState()
    const litLevel = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.litLevel(key), [tree, key])
    )
    const isGuideAncestor = useSyncExternalStore(
        tree.subscribe,
        useCallback(() => tree.isGuideAncestor(key), [tree, key])
    )
    return useMemo(
        () => ({ litLevel, isGuideAncestor }),
        [litLevel, isGuideAncestor]
    )
}
