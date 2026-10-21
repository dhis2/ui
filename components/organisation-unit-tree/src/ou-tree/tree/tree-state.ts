import {
    childrenPageOf,
    type NodeCache,
    type RootsStatus,
} from '../cache/index'
import { excludeNestedRoots } from './exclude-nested-roots'
import { FlatRows, flattenRows, Row } from './flatten-rows'

export interface TreeStateOptions {
    cache: NodeCache
    roots: string[]
    initiallyOpen?: string[]
}

export interface TreeState {
    readonly cache: NodeCache
    /** The roots actually shown: loaded, nested ones excluded. */
    readonly roots: string[]
    /** Loading state of the root entries themselves. */
    getRootsStatus(): RootsStatus
    isOpen(id: string): boolean
    open(id: string): void
    close(id: string): void
    toggle(id: string): void
    /** Number of rows for the current open set and cache contents. */
    getRowCount(): number
    /** The row at an index, in flat order. */
    getRow(index: number): Row
    /** The index of a node's row, or undefined if it is not shown. */
    getRowIndex(id: string): number | undefined
    /** Requests the children pages covering any skeleton rows in the range. */
    ensureChildrenLoaded(firstRow: number, lastRow: number): void
    retryRoots(): void
    subscribe(listener: () => void): () => void
    getVersion(): number
    /** Stops listening to the cache. The tree is unusable afterwards. */
    destroy(): void
}

/**
 * One tree's state: which roots it shows, what is open, and the flat rows
 * derived from that and the shared cache. Rows are rebuilt only when the
 * cache or the open set changes, never on scroll.
 */
export const createTreeState = ({
    cache,
    roots: requestedRoots,
    initiallyOpen = [],
}: TreeStateOptions): TreeState => {
    const listeners = new Set<() => void>()
    const openIds = new Set(initiallyOpen)
    let roots: string[] = []
    let rootsStatus: RootsStatus = { status: 'loading' }
    let version = 0
    let memo: { version: number; flat: FlatRows } | undefined
    let destroyed = false

    const notify = () => {
        version += 1
        listeners.forEach((listener) => listener())
    }

    const unsubscribeCache = cache.subscribe(notify)

    const flat = (): FlatRows => {
        const current = cache.getVersion()
        if (!memo || memo.version !== current) {
            memo = {
                version: current,
                flat: flattenRows({
                    roots,
                    isOpen: (id) => openIds.has(id),
                    cache,
                }),
            }
        }
        return memo.flat
    }
    const invalidate = () => {
        memo = undefined
    }

    const requestFirstPage = (id: string) => {
        if (cache.getNode(id)?.leaf) {
            return
        }
        if (cache.getChildren(id).status === 'none') {
            cache.requestChildrenPage(id, 1)
        }
    }

    const loadRoots = () => {
        rootsStatus = { status: 'loading' }
        invalidate()
        notify()
        cache.loadNodes(requestedRoots).then(
            () => {
                if (destroyed) {
                    return
                }
                const nodes = requestedRoots.flatMap((id) => {
                    const node = cache.getNode(id)
                    return node ? [node] : []
                })
                roots = excludeNestedRoots(nodes).map((node) => node.id)
                rootsStatus = { status: 'loaded' }
                invalidate()
                notify()
            },
            (error: unknown) => {
                if (destroyed) {
                    return
                }
                rootsStatus = { status: 'failed', error }
                notify()
            }
        )
    }

    const open = (id: string) => {
        if (destroyed) {
            return
        }
        openIds.add(id)
        invalidate()
        requestFirstPage(id)
        notify()
    }

    const close = (id: string) => {
        if (destroyed) {
            return
        }
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
                const page = childrenPageOf(row.index, cache.pageSize)
                wanted.add(`${row.parentId}\u0000${page}`)
            }
        }
        for (const key of wanted) {
            const [parentId, page] = key.split('\u0000')
            cache.requestChildrenPage(parentId, Number(page))
        }
    }

    loadRoots()
    initiallyOpen.forEach(requestFirstPage)

    return {
        cache,
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
        retryRoots: loadRoots,
        subscribe: (listener) => {
            listeners.add(listener)
            return () => listeners.delete(listener)
        },
        getVersion: () => version,
        destroy: () => {
            destroyed = true
            unsubscribeCache()
            listeners.clear()
        },
    }
}
