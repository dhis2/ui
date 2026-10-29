import {
    childrenPageOf,
    type NodeStore,
    RESULTS_PAGE_SIZE,
    type RootsStatus,
    type StoredNode,
    type Subscribable,
} from '../node-store/index'
import { excludeNestedRoots } from './exclude-nested-roots'
import {
    type FilteredView,
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
import { SEARCH_DEBOUNCE_MS, SEARCH_MIN_LENGTH } from './search-constants'

export interface TreeStateOptions {
    store: NodeStore
    rootIds: string[]
    initiallyOpen?: string[]
}

export type TreeMode = 'browse' | 'filtered'

type ResultsPageStatus =
    | { status: 'loading' }
    | { status: 'loaded' }
    | { status: 'failed'; error: unknown }

/** A search in progress or shown; replaced whole by the next search. */
interface SearchState {
    term: string
    pages: Map<number, ResultsPageStatus>
    /** From page one's pager; undefined until it answered. */
    total: number | undefined
    pageSize: number
    resultIds: Set<string>
    /** Results received so far. */
    loaded: number
    pruned: PrunedTree
    revealedIds: Set<string>
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
    /** Whether a node shows its children. False while its first page fails. */
    isOpen(id: string): boolean
    /**
     * Shows a node's children, requesting its first page if needed. In
     * filtered mode only browse rows, the ones under a revealed node, open.
     */
    open(id: string): void
    close(id: string): void
    toggle(id: string): void
    getMode(): TreeMode
    /** The effective term, or undefined in browse mode. */
    getSearchTerm(): string | undefined
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
    /** Toggles showing all of a pruned-tree node's children; revealing requests its first page. */
    toggleRevealed(id: string): void
    /**
     * Number of rows for the current open set and store contents. Exact in
     * browse mode, where a parent's count arrives with its first page and
     * every slot is a row. In filtered mode it grows as pages bring
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
    let debounce: ReturnType<typeof setTimeout> | undefined
    let searchStatus: SearchStatus = { status: 'idle' }
    let rootsStatus: RootsStatus = { status: 'loading' }
    let version = 0
    let memo: { version: number; flat: FlatRows } | undefined
    // Set when the open set or the roots change; the memo is then rebuilt,
    // reusing its rows where nothing changed.
    let stale = false
    let unsubscribeStore: (() => void) | undefined

    const notify = () => {
        version += 1
        listeners.forEach((listener) => listener())
    }

    const filteredView = (state: SearchState): FilteredView => {
        let failedPage: FilteredView['failedPage']
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
                    filtered: search && filteredView(search),
                }),
            }
            stale = false
        }
        return memo.flat
    }
    const invalidate = () => {
        stale = true
    }

    // A node whose first page failed did not open: it is shown closed with
    // the failure, and opening it again requests the page again.
    const isOpen = (id: string) =>
        openIds.has(id) && store.getChildren(id).status !== 'failed'

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

    // In filtered mode only a browse row, one under a revealed node, has an
    // arrow; a pruned-tree node and a node not shown have nothing to open.
    const canOpen = (id: string) => {
        if (!search) {
            return true
        }
        const { rows, indexById } = flat()
        const index = indexById.get(id)
        const row = index === undefined ? undefined : rows[index]
        return row?.kind === 'node' && row.view === 'browse'
    }

    const open = (id: string) => {
        if (!canOpen(id)) {
            return
        }
        openIds.add(id)
        invalidate()
        requestFirstPage(id)
        notify()
    }

    const close = (id: string) => {
        if (!canOpen(id)) {
            return
        }
        openIds.delete(id)
        invalidate()
        notify()
    }

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
                    const unplaced = addResults({
                        pruned: state.pruned,
                        results: response.organisationUnits,
                        shownRootIds: shownRootIds(),
                        store,
                    })
                    if (
                        unplaced.length > 0 &&
                        process.env.NODE_ENV !== 'production'
                    ) {
                        console.warn(
                            `OuTree: results without a shown root or an ancestor in the store were dropped: ${unplaced.join(', ')}`
                        )
                    }
                    response.organisationUnits.forEach(({ id }) =>
                        state.resultIds.add(id)
                    )
                    state.loaded += response.organisationUnits.length
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

    const clearSearch = () => {
        if (!search) {
            return
        }
        search = undefined
        openIds.clear()
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
            pages: new Map(),
            total: undefined,
            pageSize: RESULTS_PAGE_SIZE,
            resultIds: new Set(),
            loaded: 0,
            pruned: createPrunedTree(),
            revealedIds: new Set(),
        }
        openIds.clear()
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

    const sameStatus = (a: SearchStatus, b: SearchStatus) =>
        (Object.keys(b) as (keyof SearchStatus)[]).every(
            (key) => a[key] === b[key]
        ) && Object.keys(a).length === Object.keys(b).length

    // Keeps the last object while nothing in it changed.
    const getSearchStatus = () => {
        const next = currentSearchStatus()
        if (!sameStatus(searchStatus, next)) {
            searchStatus = next
        }
        return searchStatus
    }

    const retryResultsPage = (page: number) => {
        if (search?.pages.get(page)?.status !== 'failed') {
            return
        }
        search.pages.delete(page)
        requestResultsPage(page)
    }

    const toggleRevealed = (id: string) => {
        if (!search || !search.pruned.placed.has(id)) {
            return
        }
        if (search.revealedIds.has(id)) {
            search.revealedIds.delete(id)
        } else {
            search.revealedIds.add(id)
            requestFirstPage(id)
        }
        invalidate()
        notify()
    }

    const getRowCount = () => flat().rows.length

    const getRow = (index: number) => {
        const row = flat().rows[index]
        if (!row) {
            throw new Error(`Row ${index} is out of range`)
        }
        return row
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

    const ensureChildrenLoaded = (firstRow: number, lastRow: number) => {
        const { rows } = flat()
        const first = Math.max(0, firstRow)
        const last = Math.min(rows.length - 1, lastRow)
        const wanted = new Set<string>()
        let resultsWanted = false
        for (let index = first; index <= last; index += 1) {
            const row = rows[index]
            if (row.kind === 'result-skeleton') {
                resultsWanted = true
            } else if (row.kind === 'skeleton') {
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
        getMode: () => (search ? 'filtered' : 'browse'),
        getSearchTerm: () => search?.term,
        getSearchInput: () => searchInput,
        setSearchInput,
        getSearchStatus,
        search: searchFor,
        clearSearch,
        retryResultsPage,
        isResult: (id) => search?.resultIds.has(id) ?? false,
        isRevealed: (id) => search?.revealedIds.has(id) ?? false,
        toggleRevealed,
        getRowCount,
        getRow,
        getRowIndex: (id) => flat().indexById.get(id),
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
        // Own changes plus the store's, so either re-renders subscribers.
        getVersion: () => version + store.getVersion(),
    }
}
