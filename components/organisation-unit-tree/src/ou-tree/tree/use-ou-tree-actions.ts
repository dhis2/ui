import { useMemo } from 'react'
import { useTreeState } from './ou-tree-provider'
import type { TreeState } from './tree-state'

export type OuTreeActions = Pick<
    TreeState,
    | 'open'
    | 'close'
    | 'toggle'
    | 'ensureChildrenLoaded'
    | 'retryRoots'
    | 'toggleRevealed'
    | 'retryResultsPage'
    | 'search'
    | 'clearSearch'
    | 'setHovered'
    | 'setFocused'
    | 'setHasFocus'
    | 'focusRow'
    | 'focusFirst'
    | 'focusLast'
    | 'focusNext'
    | 'focusPrevious'
    | 'focusParent'
    | 'focusChild'
    | 'store'
>

/**
 * The tree's methods and store from the nearest OuTreeProvider, without
 * subscribing: for components that act on the tree but need not re-render
 * when it changes.
 */
export const useOuTreeActions = (): OuTreeActions => {
    const tree = useTreeState()
    return useMemo(
        () => ({
            open: tree.open,
            close: tree.close,
            toggle: tree.toggle,
            ensureChildrenLoaded: tree.ensureChildrenLoaded,
            retryRoots: tree.retryRoots,
            toggleRevealed: tree.toggleRevealed,
            retryResultsPage: tree.retryResultsPage,
            search: tree.search,
            clearSearch: tree.clearSearch,
            setHovered: tree.setHovered,
            setFocused: tree.setFocused,
            setHasFocus: tree.setHasFocus,
            focusRow: tree.focusRow,
            focusFirst: tree.focusFirst,
            focusLast: tree.focusLast,
            focusNext: tree.focusNext,
            focusPrevious: tree.focusPrevious,
            focusParent: tree.focusParent,
            focusChild: tree.focusChild,
            store: tree.store,
        }),
        [tree]
    )
}
