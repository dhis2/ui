import {
    childrenPageOf,
    type NodeStore,
    RESULTS_PAGE_SIZE,
    type RootsStatus,
    type StoredNode,
    type Subscribable,
} from '../node-store'
import { createMatchSplitter, type MatchSplitter } from '../search'
import { excludeNestedRoots } from './exclude-nested-roots'
import {
    type SearchRowsInput,
    type FlatRows,
    flattenRows,
    type Row,
} from './flatten-rows'
import {
    addResults,
    createPrunedTree,
    type PrunedTree,
    resultsPageOf,
} from './pruned-tree'
import { rowKey } from './row-key'
import { SEARCH_DEBOUNCE_MS, SEARCH_MIN_LENGTH } from './search-constants'

export interface TreeStateOptions {
    store: NodeStore
    rootIds: string[]
    initiallyOpen?: string[]
}

export type TreeMode = 'browse' | 'search'

/**
 * A guide line segment: the indent at `level` on the row with `key`, or
 * an open node's own toggle line when `key` is the node and `level` its
 * depth. It belongs to the branch of the ancestor at that level.
 */
export interface Guide {
    key: string
    level: number
}

type ResultsPageStatus =
    | { status: 'loading' }
    | { status: 'loaded' }
    | { status: 'failed'; error: unknown }

/** A search in progress or shown; replaced whole by the next search. */
interface SearchState {
    term: string
    /** Highlights labels for `term`; built once per search. */
    splitter: MatchSplitter
    pages: Map<number, ResultsPageStatus>
    /** From page one's pager; undefined until it answered. */
    total: number | undefined
    pageSize: number
    resultIds: Set<string>
    /** Results received so far. */
    loaded: number
    /**
     * The last result received, last in tree order too. Its row in view
     * requests the next page, so a scroll through a revealed node's
     * children, which may hold results not received yet, stays a page
     * ahead: those always come after this one.
     */
    lastResultId: string | undefined
    pruned: PrunedTree
    /** Pruned-tree nodes showing all their children when open. */
    revealedIds: Set<string>
    /** Pruned-tree nodes the user closed; a later page does not reopen them. */
    closedIds: Set<string>
}

export type SearchStatus =
    | { status: 'idle' }
    | { status: 'too-short'; minLength: number }
    | { status: 'loading' }
    | { status: 'loaded'; total: number; loaded: number }
    | { status: 'failed'; error: unknown }

export interface TreeState extends Subscribable {
    readonly store: NodeStore
    /** The root ids as given, before loading and nested-root exclusion. */
    readonly rootIds: string[]
    /** The roots shown: loaded, nested ones excluded. Empty until loaded. */
    readonly rootNodes: StoredNode[]
    /** Loading state of the root entries themselves. */
    getRootsStatus(): RootsStatus
    /** Whether a node shows its children. False while its first page fails, unless it has matching children to show. */
    isOpen(id: string): boolean
    /**
     * Shows a node's children, requesting its first page if it will show
     * them all. In search mode a pruned-tree node shows its matching
     * children, or, revealed or without any, all of them; opening a node
     * without matching children reveals it.
     */
    open(id: string): void
    close(id: string): void
    toggle(id: string): void
    getMode(): TreeMode
    /** The effective term, or undefined in browse mode. */
    getSearchTerm(): string | undefined
    /** Cuts a label into plain and matched segments for the effective term; undefined in browse mode. */
    getMatchSplitter(): MatchSplitter | undefined
    /** The input value as typed. */
    getSearchInput(): string
    /** Trims, length-gates and debounces `search`; blank or too short clears any search at once. */
    setSearchInput(value: string): void
    /** Stable between changes, so it can be a useSyncExternalStore snapshot. */
    getSearchStatus(): SearchStatus
    /** Runs a search now, resetting the tree; a term equal to the current one is a no-op. */
    search(term: string): void
    /** Back to browse mode, as on mount. */
    clearSearch(): void
    retryResultsPage(page: number): void
    isResult(id: string): boolean
    isRevealed(id: string): boolean
    /** Whether the pointer is over the node's row. */
    isHovered(id: string): boolean
    /** Marks the row the pointer is over, or none. */
    setHovered(id: string | undefined): void
    /**
     * The focused row: the one `aria-activedescendant` names while the
     * tree has focus. Kept by row key, with its last index as the fallback
     * when the key is gone (a skeleton that became a node).
     */
    getFocusedIndex(): number | undefined
    /** The key of the focused row. */
    getFocusedKey(): string | undefined
    /** Whether the row is focused and the tree has DOM focus. */
    isFocused(key: string): boolean
    /** Focuses a row by key, as a pointer down on it does. */
    setFocused(key: string): void
    /** Whether the tree's container has DOM focus; set by the glue. */
    setHasFocus(hasFocus: boolean): void
    /**
     * The treeview moves. Each focuses the row it names and returns its
     * index, or returns undefined and changes nothing when there is no
     * such row.
     */
    focusRow(index: number): number | undefined
    focusFirst(): number | undefined
    focusLast(): number | undefined
    focusNext(): number | undefined
    focusPrevious(): number | undefined
    /** The nearest earlier row of a smaller depth. */
    focusParent(): number | undefined
    /** The next row, if it is deeper than the focused one. */
    focusChild(): number | undefined
    /**
     * The guide the pointer is over, or none. Its branch lights up: the
     * segment at its level on every row of the ancestor's subtree and the
     * ancestor's toggle line. Without one, the focused row's parent
     * branch is lit while the tree has focus.
     */
    setHoveredGuide(guide: Guide | undefined): void
    /** Closes the branch a guide belongs to and focuses its ancestor. */
    closeGuideBranch(guide: Guide): void
    /** The level lit on this row, if it is in the lit branch. */
    litLevel(key: string): number | undefined
    /** Whether this node is the lit branch's ancestor: its toggle line is lit. */
    isGuideAncestor(key: string): boolean
    /** Whether a pruned-tree node has children on the way to a result. */
    hasMatchingChildren(id: string): boolean
    /**
     * Toggles between a pruned-tree node's matching children and all of
     * them; revealing opens the node and requests its first page.
     */
    toggleRevealed(id: string): void
    /**
     * Number of rows for the current open set and store contents. Exact in
     * browse mode, where a parent's count arrives with its first page and
     * every slot is a row. In search mode it grows as pages bring
     * ancestors, since only results are counted ahead.
     */
    getRowCount(): number
    /** The row at an index, in flat order. */
    getRow(index: number): Row
    /** The index of a node's row, or undefined if it is not shown. */
    getRowIndex(id: string): number | undefined
    /** Requests the children pages covering any skeleton rows in the range. */
    ensureChildrenLoaded(firstRow: number, lastRow: number): void
    /** Loads the roots and the initially open nodes. Idempotent. */
    loadInitial(): void
    retryRoots(): void
}

const searchRowsInput = (state: SearchState): SearchRowsInput => {
    let failedPage: SearchRowsInput['failedPage']
    state.pages.forEach((status, page) => {
        if (status.status === 'failed') {
            failedPage = { page, error: status.error }
        }
    })
    return {
        pruned: state.pruned,
        resultIds: state.resultIds,
        revealedIds: state.revealedIds,
        loaded: state.loaded,
        total: state.total,
        pageSize: state.pageSize,
        failedPage,
    }
}

const sameStatus = (a: SearchStatus, b: SearchStatus) =>
    (Object.keys(b) as (keyof SearchStatus)[]).every(
        (key) => a[key] === b[key]
    ) && Object.keys(a).length === Object.keys(b).length

/**
 * One tree's state: which roots it shows, what is open, and the flat rows
 * derived from that and the shared store. Rows are rebuilt only when the
 * store or the open set changes, never on scroll.
 */
export const createTreeState = ({
    store,
    rootIds,
    initiallyOpen = [],
}: TreeStateOptions): TreeState => {
    const listeners = new Set<() => void>()
    const openIds = new Set(initiallyOpen)
    let rootNodes: StoredNode[] = []
    let search: SearchState | undefined
    let searchInput = ''
    let hoveredId: string | undefined
    let focusedKey: string | undefined
    let focusedIndex: number | undefined
    let hasFocus = false
    let hoveredGuide: Guide | undefined
    let debounce: ReturnType<typeof setTimeout> | undefined
    let searchStatus: SearchStatus = { status: 'idle' }
    let rootsStatus: RootsStatus = { status: 'loading' }
    let version = 0
    let memo: { version: number; flat: FlatRows } | undefined
    // Set when the open set or the roots change; the memo is then rebuilt,
    // reusing its rows where nothing changed.
    let stale = false
    let unsubscribeStore: (() => void) | undefined

    // -- Changes and rows --

    const notify = () => {
        version += 1
        listeners.forEach((listener) => listener())
    }
    // Own changes plus the store's, so either re-renders subscribers.
    const getVersion = () => version + store.getVersion()

    const flat = (): FlatRows => {
        const current = store.getVersion()
        if (!memo || stale || memo.version !== current) {
            memo = {
                version: current,
                flat: flattenRows({
                    rootNodes,
                    openIds,
                    store,
                    previous: memo?.flat,
                    search: search && searchRowsInput(search),
                }),
            }
            stale = false
        }
        return memo.flat
    }
    const invalidate = () => {
        stale = true
    }

    const getRowCount = () => flat().rows.length

    const getRow = (index: number) => {
        const row = flat().rows[index]
        if (!row) {
            throw new Error(`Row ${index} is out of range`)
        }
        return row
    }

    // -- Browsing --

    const hasMatchingChildren = (id: string) =>
        search?.pruned.children.has(id) ?? false

    // Whether an open node lists all its children from the store, as
    // opposed to its matching ones from the pruned tree.
    const showsAllChildren = (id: string) =>
        !search ||
        !search.pruned.placed.has(id) ||
        search.revealedIds.has(id) ||
        !hasMatchingChildren(id)

    // A node whose first page failed did not open: it is shown closed with
    // the failure, and opening it again requests the page again. One with
    // matching children keeps listing them, so it stays open.
    const isOpen = (id: string) =>
        openIds.has(id) &&
        (hasMatchingChildren(id) || store.getChildren(id).status !== 'failed')

    const requestFirstPage = (id: string) => {
        if (store.getNode(id)?.leaf) {
            return
        }
        const { status } = store.getChildren(id)
        if (status === 'none') {
            store.requestChildrenPage(id, 1)
        } else if (status === 'failed') {
            store.retryChildrenPage(id, 1)
        }
    }

    const loadRoots = () => {
        rootsStatus = { status: 'loading' }
        invalidate()
        notify()
        store.loadNodes(rootIds).then(
            () => {
                const nodes = rootIds.flatMap((id) => {
                    const node = store.getNode(id)
                    return node ? [node] : []
                })
                rootNodes = excludeNestedRoots(nodes)
                rootsStatus = { status: 'loaded' }
                invalidate()
                notify()
            },
            (error: unknown) => {
                rootsStatus = { status: 'failed', error }
                notify()
            }
        )
    }

    const open = (id: string) => {
        openIds.add(id)
        if (search?.pruned.placed.has(id) && !hasMatchingChildren(id)) {
            search.revealedIds.add(id)
        }
        search?.closedIds.delete(id)
        invalidate()
        if (showsAllChildren(id)) {
            requestFirstPage(id)
        }
        notify()
    }

    const close = (id: string) => {
        openIds.delete(id)
        search?.closedIds.add(id)
        invalidate()
        notify()
    }

    // -- Searching --

    /** The given roots the store has, nested ones excluded. */
    const shownRootIds = () =>
        new Set(
            excludeNestedRoots(
                rootIds.flatMap((id) => store.getNode(id) ?? [])
            ).map((node) => node.id)
        )

    const requestResultsPage = (page: number) => {
        const state = search
        if (!state || state.pages.has(page)) {
            return
        }
        state.pages.set(page, { status: 'loading' })
        invalidate()
        notify()
        store
            .fetchResultsPage({
                search: state.term,
                rootIds,
                page,
                pageSize: RESULTS_PAGE_SIZE,
            })
            .then(
                (response) => {
                    // Answers for an earlier search, or after a clear, are dropped.
                    if (search !== state) {
                        return
                    }
                    if (page === 1) {
                        state.total = response.pager.total
                        state.pageSize = response.pager.pageSize
                    }
                    const ancestorsBefore = new Set(
                        state.pruned.children.keys()
                    )
                    addResults({
                        pruned: state.pruned,
                        results: response.organisationUnits,
                        shownRootIds: shownRootIds(),
                        store,
                    })
                    // A node with its first matching child opens, unless
                    // the user closed it.
                    state.pruned.children.forEach((_, id) => {
                        if (
                            !ancestorsBefore.has(id) &&
                            !state.closedIds.has(id)
                        ) {
                            openIds.add(id)
                        }
                    })
                    response.organisationUnits.forEach(({ id }) =>
                        state.resultIds.add(id)
                    )
                    state.loaded += response.organisationUnits.length
                    state.lastResultId =
                        response.organisationUnits[
                            response.organisationUnits.length - 1
                        ]?.id ?? state.lastResultId
                    state.pages.set(page, { status: 'loaded' })
                    invalidate()
                    notify()
                },
                (error: unknown) => {
                    if (search !== state) {
                        return
                    }
                    state.pages.set(page, { status: 'failed', error })
                    invalidate()
                    notify()
                }
            )
    }

    const retryResultsPage = (page: number) => {
        if (search?.pages.get(page)?.status !== 'failed') {
            return
        }
        search.pages.delete(page)
        requestResultsPage(page)
    }

    // Results pages are requested in order and one at a time: the page
    // holding the first result not received yet, unless it is already
    // requested or failed.
    const ensureResultsLoaded = (state: SearchState) => {
        const next = resultsPageOf(state.loaded, state.pageSize)
        if (!state.pages.has(next)) {
            requestResultsPage(next)
        }
    }

    const clearSearch = () => {
        if (!search) {
            return
        }
        search = undefined
        openIds.clear()
        resetFocus()
        initiallyOpen.forEach((id) => openIds.add(id))
        initiallyOpen.forEach(requestFirstPage)
        invalidate()
        notify()
    }

    const searchFor = (term: string) => {
        if (term.trim() === '') {
            // A blank term would match everything; it means no search.
            clearSearch()
            return
        }
        if (search?.term === term) {
            return
        }
        search = {
            term,
            splitter: createMatchSplitter(term),
            pages: new Map(),
            total: undefined,
            pageSize: RESULTS_PAGE_SIZE,
            resultIds: new Set(),
            loaded: 0,
            lastResultId: undefined,
            pruned: createPrunedTree(),
            revealedIds: new Set(),
            closedIds: new Set(),
        }
        openIds.clear()
        resetFocus()
        invalidate()
        if (rootIds.length === 0) {
            // An empty tree has nothing to search: loaded, with no results.
            search.total = 0
            search.pages.set(1, { status: 'loaded' })
            notify()
            return
        }
        requestResultsPage(1)
    }

    const setSearchInput = (value: string) => {
        searchInput = value
        clearTimeout(debounce)
        debounce = undefined
        const term = value.trim()
        if (term.length < SEARCH_MIN_LENGTH) {
            clearSearch()
        } else {
            debounce = setTimeout(() => {
                debounce = undefined
                searchFor(term)
            }, SEARCH_DEBOUNCE_MS)
        }
        notify()
    }

    const currentSearchStatus = (): SearchStatus => {
        if (!search) {
            const term = searchInput.trim()
            return term !== '' && term.length < SEARCH_MIN_LENGTH
                ? { status: 'too-short', minLength: SEARCH_MIN_LENGTH }
                : { status: 'idle' }
        }
        const pageOne = search.pages.get(1)
        if (pageOne?.status === 'failed') {
            return { status: 'failed', error: pageOne.error }
        }
        if (pageOne?.status === 'loaded' && search.total !== undefined) {
            return {
                status: 'loaded',
                total: search.total,
                loaded: search.loaded,
            }
        }
        return { status: 'loading' }
    }

    // Keeps the last object while nothing in it changed.
    const getSearchStatus = () => {
        const next = currentSearchStatus()
        if (!sameStatus(searchStatus, next)) {
            searchStatus = next
        }
        return searchStatus
    }

    // -- Reveal and hover --

    const toggleRevealed = (id: string) => {
        if (!search?.pruned.placed.has(id)) {
            return
        }
        if (search.revealedIds.has(id)) {
            search.revealedIds.delete(id)
            invalidate()
            notify()
        } else {
            search.revealedIds.add(id)
            open(id)
        }
    }

    const setHovered = (id: string | undefined) => {
        if (id === hoveredId) {
            return
        }
        hoveredId = id
        notify()
    }

    // -- Focus --

    const resetFocus = () => {
        focusedKey = undefined
        focusedIndex = undefined
    }

    const getFocusedIndex = (): number | undefined => {
        const { rows, indexByKey } = flat()
        if (focusedKey === undefined || rows.length === 0) {
            return undefined
        }
        const byKey = indexByKey.get(focusedKey)
        if (byKey !== undefined) {
            // Where the row was last seen, for when its key is gone.
            focusedIndex = byKey
            return byKey
        }
        return Math.min(focusedIndex ?? 0, rows.length - 1)
    }

    const getFocusedKey = (): string | undefined => {
        const index = getFocusedIndex()
        return index === undefined ? undefined : rowKey(flat().rows[index])
    }

    const focusRow = (index: number): number | undefined => {
        const { rows } = flat()
        if (index < 0 || index >= rows.length) {
            return undefined
        }
        focusedKey = rowKey(rows[index])
        focusedIndex = index
        notify()
        return index
    }

    const focusFirst = () => focusRow(0)
    const focusLast = () => focusRow(flat().rows.length - 1)
    const focusNext = () => {
        const index = getFocusedIndex()
        return index === undefined ? undefined : focusRow(index + 1)
    }
    const focusPrevious = () => {
        const index = getFocusedIndex()
        return index === undefined ? undefined : focusRow(index - 1)
    }
    const focusParent = () => {
        const index = getFocusedIndex()
        if (index === undefined) {
            return undefined
        }
        const { rows } = flat()
        const depth = rows[index].depth
        for (let parent = index - 1; parent >= 0; parent -= 1) {
            if (rows[parent].depth < depth) {
                return focusRow(parent)
            }
        }
        return undefined
    }
    const focusChild = () => {
        const index = getFocusedIndex()
        if (index === undefined) {
            return undefined
        }
        const { rows } = flat()
        const next = rows[index + 1]
        return next && next.depth > rows[index].depth
            ? focusRow(index + 1)
            : undefined
    }

    const setFocused = (key: string) => {
        const index = flat().indexByKey.get(key)
        if (index !== undefined) {
            focusRow(index)
        }
    }

    const setHasFocus = (value: boolean) => {
        if (value === hasFocus) {
            return
        }
        hasFocus = value
        notify()
    }

    // -- Lit guide --

    // A guide's branch: the ancestor at its level and the rows of its
    // subtree, [from, to).
    interface LitBranch {
        ancestor: number
        level: number
        from: number
        to: number
    }
    const branchOf = (guide: Guide): LitBranch | undefined => {
        const { rows, indexByKey } = flat()
        const start = indexByKey.get(guide.key)
        if (start === undefined) {
            return undefined
        }
        let ancestor = start
        while (ancestor >= 0 && rows[ancestor].depth > guide.level) {
            ancestor -= 1
        }
        if (ancestor < 0 || rows[ancestor].depth !== guide.level) {
            return undefined
        }
        let to = ancestor + 1
        while (to < rows.length && rows[to].depth > guide.level) {
            to += 1
        }
        return { ancestor, level: guide.level, from: ancestor + 1, to }
    }
    const focusedParentGuide = (): Guide | undefined => {
        const index = getFocusedIndex()
        if (!hasFocus || index === undefined) {
            return undefined
        }
        const { rows } = flat()
        const depth = rows[index].depth
        return depth === 0
            ? undefined
            : { key: rowKey(rows[index]), level: depth - 1 }
    }
    // Resolved once per tree version and guide, as every row asks.
    let litMemo:
        | { version: number; guide: Guide | undefined; branch?: LitBranch }
        | undefined
    const litBranch = (): LitBranch | undefined => {
        const guide = hoveredGuide ?? focusedParentGuide()
        const current = getVersion()
        if (
            litMemo?.version !== current ||
            litMemo.guide?.key !== guide?.key ||
            litMemo.guide?.level !== guide?.level
        ) {
            litMemo = {
                version: current,
                guide,
                branch: guide && branchOf(guide),
            }
        }
        return litMemo.branch
    }
    const litLevel = (key: string): number | undefined => {
        const branch = litBranch()
        if (!branch) {
            return undefined
        }
        const index = flat().indexByKey.get(key)
        return index !== undefined && index >= branch.from && index < branch.to
            ? branch.level
            : undefined
    }
    const isGuideAncestor = (key: string): boolean => {
        const branch = litBranch()
        return (
            branch !== undefined &&
            flat().indexByKey.get(key) === branch.ancestor
        )
    }
    const setHoveredGuide = (guide: Guide | undefined) => {
        if (
            guide?.key === hoveredGuide?.key &&
            guide?.level === hoveredGuide?.level
        ) {
            return
        }
        hoveredGuide = guide
        notify()
    }
    const closeGuideBranch = (guide: Guide) => {
        const branch = branchOf(guide)
        hoveredGuide = undefined
        if (!branch) {
            notify()
            return
        }
        const row = flat().rows[branch.ancestor]
        focusRow(branch.ancestor)
        if (row.kind === 'node') {
            close(row.id)
        }
    }

    // -- Loading what scrolls into view --

    const ensureChildrenLoaded = (firstRow: number, lastRow: number) => {
        const { rows, indexByKey } = flat()
        const first = Math.max(0, firstRow)
        const last = Math.min(rows.length - 1, lastRow)
        const wanted = new Set<string>()
        const lastResultRow =
            search?.lastResultId === undefined
                ? undefined
                : indexByKey.get(search.lastResultId)
        let resultsWanted =
            lastResultRow !== undefined &&
            lastResultRow >= first &&
            lastResultRow <= last
        for (let index = first; index <= last; index += 1) {
            const row = rows[index]
            if (row.kind === 'result-skeleton') {
                resultsWanted = true
            } else if (row.kind === 'children-skeleton') {
                const parent = store.getChildren(row.parentId)
                if (parent.status === 'loaded') {
                    const page = childrenPageOf(
                        row.index,
                        parent.children.pageSize
                    )
                    wanted.add(`${row.parentId}\u0000${page}`)
                }
            }
        }
        for (const key of wanted) {
            const [parentId, page] = key.split('\u0000')
            store.requestChildrenPage(parentId, Number(page))
        }
        if (resultsWanted && search) {
            ensureResultsLoaded(search)
        }
    }

    // -- Start --

    let initialLoaded = false
    // Creating a tree has no side effects, so React may create and discard
    // one freely; loadInitial loads the roots and the initially open nodes.
    const loadInitial = () => {
        if (initialLoaded) {
            return
        }
        initialLoaded = true
        loadRoots()
        initiallyOpen.forEach(requestFirstPage)
    }

    return {
        store,
        rootIds,
        get rootNodes() {
            return rootNodes
        },
        getRootsStatus: () => rootsStatus,
        isOpen,
        open,
        close,
        toggle: (id) => (isOpen(id) ? close(id) : open(id)),
        getMode: () => (search ? 'search' : 'browse'),
        getSearchTerm: () => search?.term,
        getMatchSplitter: () => search?.splitter,
        getSearchInput: () => searchInput,
        setSearchInput,
        getSearchStatus,
        search: searchFor,
        clearSearch,
        retryResultsPage,
        isResult: (id) => search?.resultIds.has(id) ?? false,
        isRevealed: (id) => search?.revealedIds.has(id) ?? false,
        isHovered: (id) => id === hoveredId,
        setHovered,
        getFocusedIndex,
        getFocusedKey,
        isFocused: (key) => hasFocus && getFocusedKey() === key,
        setFocused,
        setHasFocus,
        focusRow,
        focusFirst,
        focusLast,
        focusNext,
        focusPrevious,
        focusParent,
        focusChild,
        setHoveredGuide,
        closeGuideBranch,
        litLevel,
        isGuideAncestor,
        hasMatchingChildren,
        toggleRevealed,
        getRowCount,
        getRow,
        getRowIndex: (id) => flat().indexByKey.get(id),
        ensureChildrenLoaded,
        loadInitial,
        retryRoots: loadRoots,
        // Listens to the store only while someone listens to the tree, so an
        // abandoned tree is not kept alive by the shared store.
        subscribe: (listener) => {
            listeners.add(listener)
            unsubscribeStore ??= store.subscribe(notify)
            return () => {
                listeners.delete(listener)
                if (listeners.size === 0) {
                    unsubscribeStore?.()
                    unsubscribeStore = undefined
                }
            }
        },
        getVersion,
    }
}
