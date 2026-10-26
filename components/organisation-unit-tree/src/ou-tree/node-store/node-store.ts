import type { OuTreeChildrenPage, OuTreeEntry, TreeApi } from '../data/index'

export interface StoredNode {
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
    /** Number of children, from page one's `total`. */
    count: number
    /** The page size the server paged with, from page one's pager. */
    pageSize: number
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

/** Arguments of `createNodeStore`, which only the provider and tests call. */
export interface NodeStoreOptions {
    api: TreeApi
    shortName?: boolean
}

export interface NodeStore {
    /** Whether nodes carry short names instead of names. */
    readonly shortName: boolean
    getNode(id: string): StoredNode | undefined
    /** `none` for a leaf or an unrequested parent; see `ChildrenStatus`. */
    getChildren(parentId: string): ChildrenStatus
    /**
     * Makes sure the given units are stored: fetches the ones that are not,
     * in one gist request, and stores them as nodes. Resolves without a
     * request when all are stored. Knows nothing about roots.
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
 * The children page holding the child at a slot index. Pages are plain and
 * all `pageSize` long (the last may be shorter): page one is slots 0 to
 * `pageSize - 1`, page two the next `pageSize`, and so on.
 */
export const childrenPageOf = (slotIndex: number, pageSize: number): number =>
    Math.floor(slotIndex / pageSize) + 1

const NONE: ChildrenStatus = { status: 'none' }

const parentIdOf = (path: string): string | undefined => {
    const ids = path.split('/').filter(Boolean)
    return ids[ids.length - 2]
}

const withParent = (node: Omit<StoredNode, 'parentId'>): StoredNode => {
    const parentId = parentIdOf(node.path)
    return parentId === undefined ? node : { ...node, parentId }
}

/**
 * The app-wide store of org units and of each parent's paged children.
 * Shared by every tree; holds nothing about open state or roots.
 */
export const createNodeStore = ({
    api,
    shortName = false,
}: NodeStoreOptions): NodeStore => {
    const nodes = new Map<string, StoredNode>()
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
        response: OuTreeChildrenPage
    ) => {
        let state: ChildrenState
        if (page === 1) {
            const count = response.pager.total
            state = {
                count,
                pageSize: response.pager.pageSize,
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
        response.organisationUnits.forEach((child, position) => {
            state.slots[(page - 1) * state.pageSize + position] = child.id
            storeEntry(child)
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
        api.fetchChildrenPage(parentId, page, { shortName }).then(
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
                    entries.forEach(({ childrenCount, ...entry }) =>
                        storeEntry({ ...entry, leaf: childrenCount === 0 })
                    )
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
        shortName,
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
