import i18n from '@dhis2/d2-i18n'
import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { useTreeState } from './ou-tree-provider'
import type { SearchStatus } from './tree-state'

export interface OuTreeSearchHandle {
    /** The input's value. */
    term: string
    setTerm: (value: string) => void
    clear: () => void
    /** Shown under the input while the term is too short; otherwise undefined. */
    helpText: string | undefined
    status: SearchStatus
}

/**
 * The tree's search, for an input: the value as typed, the debounced and
 * length-gated setter, and the status. Subscribes to those two only.
 */
export const useOuTreeSearch = (): OuTreeSearchHandle => {
    const tree = useTreeState()
    const term = useSyncExternalStore(tree.subscribe, tree.getSearchInput)
    const status = useSyncExternalStore(tree.subscribe, tree.getSearchStatus)
    const clear = useCallback(() => tree.setSearchInput(''), [tree])
    return useMemo(
        () => ({
            term,
            setTerm: tree.setSearchInput,
            clear,
            helpText:
                status.status === 'too-short'
                    ? i18n.t('Type at least {{count}} characters', {
                          count: status.minLength,
                      })
                    : undefined,
            status,
        }),
        [tree, term, clear, status]
    )
}
