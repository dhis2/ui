import type { OuTreeEntry, TreeApi } from '../data/index'

export interface CachedNode {
    id: string
    displayName: string
    path: string
    level: number
    leaf: boolean
    parentId?: string
}

export type ChildrenPageStatus =
    | { status: 'loading' }
    | { status: 'loaded' }
    | { status: 'failed'; error: unknown }

export interface ChildrenState {
    /** Number of children, from page one's `total - 1`. */
    count: number
    /** Child ids by position; an empty slot is a child not yet loaded. */
    slots: Array<string | undefined>
    /** Children-page status by 1-based page number; absent means not requested. */
    pages: Map<number, ChildrenPageStatus>
}

/**
 * What is known about a parent's children. `ChildrenState` exists only once
 * page one has answered, because the count comes with it.
 */
export type ChildrenStatus =
    | { status: 'none' }
    | { status: 'loading' }
    | { status: 'failed'; error: unknown }
    | { status: 'loaded'; children: ChildrenState }

export type RootsStatus =
    | { status: 'loading' }
    | { status: 'failed'; error: unknown }
    | { status: 'loaded' }

/** Children per page. Not configurable by apps. */
export const CHILDREN_PAGE_SIZE = 50

export interface NodeCacheOptions {
    api: TreeApi
    shortName?: boolean
    /** For tests that page a small tree. Defaults to `CHILDREN_PAGE_SIZE`. */
    pageSize?: number
}

export interface NodeCache {
    readonly options: NodeCacheOptions
    readonly pageSize: number
    getNode(id: string): CachedNode | undefined
    /** `none` for a leaf or an unrequested parent; see `ChildrenStatus`. */
    getChildren(parentId: string): ChildrenStatus
    /**
     * Makes sure the given units are cached: fetches the ones that are not,
     * in one gist request, and stores them as nodes. Resolves without a
     * request when all are cached. Knows nothing about roots.
     */
    loadNodes(ids: string[]): Promise<void>
    /** Fetches a page of a parent's children unless loading or loaded. */
    requestChildrenPage(parentId: string, page: number): void
    /** Clears a failed page and requests it again. */
    retryChildrenPage(parentId: string, page: number): void
    subscribe(listener: () => void): () => void
    getVersion(): number
}

/**
 * The children page holding the child at a slot index. The endpoint pages the
 * parent together with its children, the parent being the first entry of page
 * one, so page one holds `pageSize - 1` children and every later page holds
 * `pageSize`.
 */
export const childrenPageOf = (slotIndex: number, pageSize: number): number =>
    Math.floor((slotIndex + 1) / pageSize) + 1

const NONE: ChildrenStatus = { status: 'none' }

const parentIdOf = (path: string): string | undefined => {
    const ids = path.split('/').filter(Boolean)
    return ids[ids.length - 2]
}

const withParent = (node: Omit<CachedNode, 'parentId'>): CachedNode => {
    const parentId = parentIdOf(node.path)
    return parentId === undefined ? node : { ...node, parentId }
}

/**
 * The app-wide cache of org units and of each parent's paged children.
 * Shared by every tree; holds nothing about open state or roots.
 */
export const createNodeCache = ({
    api,
    shortName = false,
    pageSize = CHILDREN_PAGE_SIZE,
}: NodeCacheOptions): NodeCache => {
    const nodes = new Map<string, CachedNode>()
    const children = new Map<string, ChildrenStatus>()
    const inFlightNodes = new Map<string, Promise<void>>()
    const listeners = new Set<() => void>()
    let version = 0

    const notify = () => {
        version += 1
        listeners.forEach((listener) => listener())
    }

    const storeEntry = ({
        id,
        displayName,
        path,
        level,
        leaf,
    }: OuTreeEntry) => {
        nodes.set(id, withParent({ id, displayName, path, level, leaf }))
    }

    const getChildren = (parentId: string) => children.get(parentId) ?? NONE

    const markLoading = (parentId: string, page: number): boolean => {
        const current = getChildren(parentId)
        if (page === 1) {
            if (current.status === 'loading' || current.status === 'loaded') {
                return false
            }
            children.set(parentId, { status: 'loading' })
            return true
        }
        if (current.status !== 'loaded') {
            return false
        }
        const status = current.children.pages.get(page)?.status
        if (status === 'loading' || status === 'loaded') {
            return false
        }
        current.children.pages.set(page, { status: 'loading' })
        return true
    }

    const storePage = (
        parentId: string,
        page: number,
        response: { pager: { total: number }; organisationUnits: OuTreeEntry[] }
    ) => {
        const entries = response.organisationUnits
        const parentEntry = entries.find((entry) => entry.id === parentId)
        if (parentEntry) {
            storeEntry(parentEntry)
        }
        let state: ChildrenState
        if (page === 1) {
            const count = Math.max(0, response.pager.total - 1)
            state = {
                count,
                slots: new Array<string | undefined>(count).fill(undefined),
                pages: new Map(),
            }
            children.set(parentId, { status: 'loaded', children: state })
        } else {
            const current = getChildren(parentId)
            if (current.status !== 'loaded') {
                return
            }
            state = current.children
        }
        // The parent is entry 0 of page one, so a child's slot is its position
        // among all entries, less one.
        entries.forEach((entry, position) => {
            if (entry.id === parentId) {
                return
            }
            state.slots[(page - 1) * pageSize + position - 1] = entry.id
            storeEntry(entry)
        })
        state.pages.set(page, { status: 'loaded' })
    }

    const storeFailure = (parentId: string, page: number, error: unknown) => {
        if (page === 1) {
            children.set(parentId, { status: 'failed', error })
            return
        }
        const current = getChildren(parentId)
        if (current.status === 'loaded') {
            current.children.pages.set(page, { status: 'failed', error })
        }
    }

    const requestChildrenPage = (parentId: string, page: number) => {
        if (!markLoading(parentId, page)) {
            return
        }
        notify()
        api.fetchTreePage({
            roots: [parentId],
            depth: 1,
            page,
            pageSize,
            shortName,
        }).then(
            (response) => {
                storePage(parentId, page, response)
                notify()
            },
            (error: unknown) => {
                storeFailure(parentId, page, error)
                notify()
            }
        )
    }

    const retryChildrenPage = (parentId: string, page: number) => {
        const current = getChildren(parentId)
        if (page === 1 && current.status === 'failed') {
            children.delete(parentId)
        } else if (current.status === 'loaded') {
            current.children.pages.delete(page)
        }
        requestChildrenPage(parentId, page)
    }

    const loadNodes = (ids: string[]): Promise<void> => {
        const pending = ids
            .filter((id) => inFlightNodes.has(id))
            .map((id) => inFlightNodes.get(id) as Promise<void>)
        const missing = ids.filter(
            (id) => !nodes.has(id) && !inFlightNodes.has(id)
        )
        if (missing.length > 0) {
            const request = api
                .fetchNodes(missing, { shortName })
                .then((entries) => {
                    for (const entry of entries) {
                        nodes.set(
                            entry.id,
                            withParent({
                                id: entry.id,
                                displayName: entry.displayName,
                                path: entry.path,
                                level: entry.level,
                                leaf: entry.childrenCount === 0,
                            })
                        )
                    }
                    notify()
                })
                .finally(() => {
                    missing.forEach((id) => inFlightNodes.delete(id))
                })
            missing.forEach((id) => inFlightNodes.set(id, request))
            pending.push(request)
        }
        return Promise.all(pending).then(() => undefined)
    }

    return {
        options: { api, shortName, pageSize },
        pageSize,
        getNode: (id) => nodes.get(id),
        getChildren,
        loadNodes,
        requestChildrenPage,
        retryChildrenPage,
        subscribe: (listener) => {
            listeners.add(listener)
            return () => listeners.delete(listener)
        },
        getVersion: () => version,
    }
}
