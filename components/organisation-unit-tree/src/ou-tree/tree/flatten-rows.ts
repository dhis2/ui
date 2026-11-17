import {
    childrenPageOf,
    type ChildrenStatus,
    type NodeStore,
    type StoredNode,
} from '../node-store'
import { type PrunedTree, resultsPageOf } from './pruned-tree'
import { rowKey } from './row-key'

/**
 * How a node lists its children. Full: all of them. Pruned: a node of the
 * pruned tree, its matching children until revealed.
 */
export type NodeView = 'full' | 'pruned'

/**
 * A row is one tree's view of a position in it: what only this tree knows
 * about a node or an empty slot, its depth from this tree's root, its view
 * in this tree's search. The same node can sit in several trees at once,
 * so none of that can live on the store's objects, and rows are rebuilt
 * from scratch on every change. A node row carries nothing else: the row
 * component reads the node, its children status and whether it is a
 * result through the tree's hooks.
 */
export type Row =
    /** A node, full or pruned, as a row. */
    | { kind: 'node'; id: string; depth: number; view: NodeView }
    /** An empty slot of a parent's children whose page is not loaded. */
    | {
          kind: 'children-skeleton'
          parentId: string
          index: number
          depth: number
      }
    /** An empty slot of a parent's children whose page failed. */
    | {
          kind: 'children-error'
          parentId: string
          /** The empty slot's position among the parent's children. */
          index: number
          page: number
          error: unknown
          depth: number
      }
    /** A result not received yet, by its index among all results. */
    | { kind: 'result-skeleton'; index: number; depth: number }
    | {
          kind: 'result-error'
          index: number
          page: number
          error: unknown
          depth: number
      }

/** What the row walk needs to know about a search. */
export interface SearchRowsInput {
    pruned: PrunedTree
    resultIds: ReadonlySet<string>
    /** Pruned-tree nodes listing all their children when open. */
    revealedIds: ReadonlySet<string>
    /** Results received so far. */
    loaded: number
    /** From page one's pager; undefined until it answered. */
    total: number | undefined
    pageSize: number
    failedPage?: { page: number; error: unknown }
}

export interface FlattenRowsInput {
    rootNodes: StoredNode[]
    openIds: ReadonlySet<string>
    store: NodeStore
    /** The previous result; rows that did not change are reused. */
    previous?: FlatRows
    /**
     * Present in search mode. A node of the pruned tree is listed as a
     * pruned row wherever it appears, also among all the children of a
     * revealed ancestor, so opening it shows its matching children.
     */
    search?: SearchRowsInput
}

export interface FlatRows {
    rows: Row[]
    /** Every row's index by its key; a node's key is its id. */
    indexByKey: Map<string, number>
}

/**
 * Whether two rows with the same key would render the same, so the earlier
 * object can stand in for the later one: a memoised row component then
 * skips, and the virtualiser keeps its measurement. Rows are new objects
 * every rebuild, so their identity cannot say this; the fields are the
 * tree's own primitives, so the comparison is shallow.
 */
const rendersTheSame = (a: Row, b: Row): boolean => {
    if (a.kind !== b.kind || a.depth !== b.depth) {
        return false
    }
    switch (b.kind) {
        case 'node':
            return a.kind === 'node' && a.view === b.view
        case 'children-skeleton':
        case 'result-skeleton':
            return true
        case 'children-error':
        case 'result-error':
            return a.kind === b.kind && a.page === b.page && a.error === b.error
    }
}

/**
 * The row from the previous build with the same key, while it still
 * renders the same, so a row keeps its object across rebuilds.
 */
const reuseUnchanged = (
    previousByKey: ReadonlyMap<string, Row>,
    row: Row
): Row => {
    const earlier = previousByKey.get(rowKey(row))
    return earlier && rendersTheSame(earlier, row) ? earlier : row
}

// Every id the walk meets comes from the store: a root it loaded, a
// child slot it filled, an ancestor it saved with the results.
const nodeOf = (store: NodeStore, id: string): StoredNode => {
    const node = store.getNode(id)
    if (!node) {
        throw new Error(`OuTree: node ${id} is listed but not in the store`)
    }
    return node
}

/** One row per result not received yet, at the given depth. */
const resultPlaceholderRows = (
    { loaded, total, pageSize, failedPage }: SearchRowsInput,
    depth: number
): Row[] => {
    if (total === undefined) {
        // Page one has not answered, so the total is unknown; its retry
        // row is the only placeholder, and only if it failed.
        return failedPage
            ? [
                  {
                      kind: 'result-error',
                      index: 0,
                      page: failedPage.page,
                      error: failedPage.error,
                      depth,
                  },
              ]
            : []
    }
    const rows: Row[] = []
    for (let index = loaded; index < total; index += 1) {
        const page = resultsPageOf(index, pageSize)
        if (page === failedPage?.page) {
            rows.push({
                kind: 'result-error',
                index,
                page,
                error: failedPage.error,
                depth,
            })
        } else {
            rows.push({ kind: 'result-skeleton', index, depth })
        }
    }
    return rows
}

/**
 * The tree as a flat list of rows, depth-first, depth counted from the
 * root.
 *
 * Browse mode walks from the roots into every open node whose children
 * the store has. Under an open node, each filled slot is a node row and
 * each empty slot a skeleton row, or an error row if its page failed.
 *
 * Search mode walks the pruned tree the same way, from its roots into
 * the open nodes. A node without matching children, or a revealed node
 * whose first page is loaded, lists all its children as slots instead; a
 * pruned-tree node among those keeps its pruned view. After the rows come
 * the placeholders, one per result not received yet.
 */
export const flattenRows = ({
    rootNodes,
    openIds,
    store,
    previous,
    search,
}: FlattenRowsInput): FlatRows => {
    const rows: Row[] = []
    const indexByKey = new Map<string, number>()
    const previousByKey = new Map<string, Row>()
    previous?.rows.forEach((row) => previousByKey.set(rowKey(row), row))
    const push = (row: Row) => {
        indexByKey.set(rowKey(row), rows.length)
        rows.push(reuseUnchanged(previousByKey, row))
    }
    const pushNode = (
        node: StoredNode,
        depth: number,
        view: NodeView
    ): ChildrenStatus => {
        push({ kind: 'node', id: node.id, depth, view })
        return store.getChildren(node.id)
    }

    // The rows of an open node's children list: a filled slot is a node, an
    // empty one a skeleton or, if its page failed, an error row.
    const pushChildSlots = (
        node: StoredNode,
        depth: number,
        children: ChildrenStatus
    ) => {
        if (node.leaf || children.status !== 'loaded') {
            return
        }
        const { slots, pages, pageSize } = children.children
        slots.forEach((childId, index) => {
            if (childId !== undefined) {
                walkChild(childId, depth + 1)
                return
            }
            const page = childrenPageOf(index, pageSize)
            const status = pages.get(page)
            if (status?.status === 'failed') {
                push({
                    kind: 'children-error',
                    parentId: node.id,
                    index,
                    page,
                    error: status.error,
                    depth: depth + 1,
                })
            } else {
                push({
                    kind: 'children-skeleton',
                    parentId: node.id,
                    index,
                    depth: depth + 1,
                })
            }
        })
    }

    const walkFull = (id: string, depth: number) => {
        const node = nodeOf(store, id)
        const children = pushNode(node, depth, 'full')
        if (openIds.has(id)) {
            pushChildSlots(node, depth, children)
        }
    }

    const walkPruned = (search: SearchRowsInput, id: string, depth: number) => {
        const node = nodeOf(store, id)
        const children = pushNode(node, depth, 'pruned')
        if (!openIds.has(id)) {
            return
        }
        const matchingChildren = search.pruned.children.get(id)
        // A revealed node keeps its matching children until the complete
        // list can replace them.
        const listsAllChildren =
            search.revealedIds.has(id) && children.status === 'loaded'
        if (!matchingChildren || listsAllChildren) {
            pushChildSlots(node, depth, children)
            return
        }
        for (const childId of matchingChildren) {
            walkPruned(search, childId, depth + 1)
        }
    }

    // A pruned-tree node keeps its pruned view wherever it is listed.
    const walkChild = (id: string, depth: number) => {
        if (search && search.pruned.placed.has(id)) {
            walkPruned(search, id, depth)
        } else {
            walkFull(id, depth)
        }
    }

    if (search) {
        for (const rootId of search.pruned.roots) {
            walkPruned(search, rootId, 0)
        }
        const depth = rows.length > 0 ? rows[rows.length - 1].depth : 0
        resultPlaceholderRows(search, depth).forEach(push)
    } else {
        for (const root of rootNodes) {
            walkFull(root.id, 0)
        }
    }
    return { rows, indexByKey }
}
