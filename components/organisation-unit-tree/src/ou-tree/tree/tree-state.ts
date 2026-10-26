import {
    childrenPageOf,
    type NodeStore,
    type RootsStatus,
} from '../node-store/index'
import { excludeNestedRoots } from './exclude-nested-roots'
import { FlatRows, flattenRows, Row } from './flatten-rows'

export interface TreeStateOptions {
    store: NodeStore
    roots: string[]
    initiallyOpen?: string[]
}

export interface TreeState {
    readonly store: NodeStore
    /** The roots actually shown: loaded, nested ones excluded. */
    readonly roots: string[]
    /** Loading state of the root entries themselves. */
    getRootsStatus(): RootsStatus
    isOpen(id: string): boolean
    open(id: string): void
    close(id: string): void
    toggle(id: string): void
    /**
     * Number of rows for the current open set and store contents. Exact in
     * browse mode, where a parent's count arrives with its first page and
     * every slot is a row. Filtered mode, later, will make it an estimate
     * that settles as pages with ancestors arrive.
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
    subscribe(listener: () => void): () => void
    getVersion(): number
}

/**
 * One tree's state: which roots it shows, what is open, and the flat rows
 * derived from that and the shared store. Rows are rebuilt only when the
 * store or the open set changes, never on scroll.
 */
export const createTreeState = ({
    store,
    roots: requestedRoots,
    initiallyOpen = [],
}: TreeStateOptions): TreeState => {
    const listeners = new Set<() => void>()
    const openIds = new Set(initiallyOpen)
    let roots: string[] = []
    let rootsStatus: RootsStatus = { status: 'loading' }
    let version = 0
    let memo: { version: number; flat: FlatRows } | undefined
    let unsubscribeStore: (() => void) | undefined

    const notify = () => {
        version += 1
        listeners.forEach((listener) => listener())
    }

    const flat = (): FlatRows => {
        const current = store.getVersion()
        if (memo?.version !== current) {
            memo = {
                version: current,
                flat: flattenRows({
                    roots,
                    openIds,
                    store,
                }),
            }
        }
        return memo.flat
    }
    const invalidate = () => {
        memo = undefined
    }

    const requestFirstPage = (id: string) => {
        if (store.getNode(id)?.leaf) {
            return
        }
        if (store.getChildren(id).status === 'none') {
            store.requestChildrenPage(id, 1)
        }
    }

    const loadRoots = () => {
        rootsStatus = { status: 'loading' }
        invalidate()
        notify()
        store.loadNodes(requestedRoots).then(
            () => {
                const nodes = requestedRoots.flatMap((id) => {
                    const node = store.getNode(id)
                    return node ? [node] : []
                })
                roots = excludeNestedRoots(nodes).map((node) => node.id)
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
        invalidate()
        requestFirstPage(id)
        notify()
    }

    const close = (id: string) => {
        openIds.delete(id)
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

    const ensureChildrenLoaded = (firstRow: number, lastRow: number) => {
        const { rows } = flat()
        const first = Math.max(0, firstRow)
        const last = Math.min(rows.length - 1, lastRow)
        const wanted = new Set<string>()
        for (let index = first; index <= last; index += 1) {
            const row = rows[index]
            if (row.kind === 'skeleton') {
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
        get roots() {
            return roots
        },
        getRootsStatus: () => rootsStatus,
        isOpen: (id) => openIds.has(id),
        open,
        close,
        toggle: (id) => (openIds.has(id) ? close(id) : open(id)),
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
        getVersion: () => version + store.getVersion(),
    }
}
