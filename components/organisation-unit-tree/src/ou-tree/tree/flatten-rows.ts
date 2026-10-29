import {
    childrenPageOf,
    type ChildrenStatus,
    type NodeStore,
    type StoredNode,
} from '../node-store/index'
import { type PrunedTree, resultsPageOf } from './pruned-tree'
import { rowKey } from './row-key'

/** Pruned: a filtered-tree node, without an arrow. Browse: batch 3's node. */
export type NodeView = 'browse' | 'pruned'

export type Row =
    | {
          kind: 'node'
          id: string
          depth: number
          children: ChildrenStatus
          view: NodeView
          /** A direct search result, as opposed to an ancestor of one. */
          result: boolean
      }
    | { kind: 'skeleton'; parentId: string; index: number; depth: number }
    | {
          kind: 'error'
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

/** The filtered mode's view of the tree. */
export interface FilteredView {
    pruned: PrunedTree
    resultIds: ReadonlySet<string>
    /** Pruned-tree nodes showing all their children, as browse rows. */
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
    /** Present in filtered mode; the browse walk is then used only under revealed nodes. */
    filtered?: FilteredView
}

export interface FlatRows {
    rows: Row[]
    indexById: Map<string, number>
}

/** Whether two rows with the same key would render the same. */
const sameRow = (a: Row, b: Row): boolean => {
    if (a.kind !== b.kind || a.depth !== b.depth) {
        return false
    }
    switch (b.kind) {
        case 'node':
            return (
                a.kind === 'node' &&
                a.children === b.children &&
                a.view === b.view &&
                a.result === b.result
            )
        case 'skeleton':
        case 'result-skeleton':
            return true
        case 'error':
        case 'result-error':
            return a.kind === b.kind && a.page === b.page && a.error === b.error
    }
}

/**
 * The tree as a flat list. In browse mode, a depth-first walk from the
 * roots, descending into the nodes in `openIds` whose children the store
 * has; under an open node, a filled slot is a node row and an empty slot
 * is a skeleton row or, if its page failed, an error row. In filtered mode,
 * a walk of the pruned tree, switching to the browse walk under revealed
 * nodes, then one placeholder row per result not received yet. Depth is
 * relative to the root.
 */
export const flattenRows = ({
    rootNodes,
    openIds,
    store,
    previous,
    filtered,
}: FlattenRowsInput): FlatRows => {
    const rows: Row[] = []
    const indexById = new Map<string, number>()

    // A row keeps its object across rebuilds while nothing about it changed,
    // so a memoised row component can skip.
    const previousByKey = new Map<string, Row>()
    previous?.rows.forEach((row) => previousByKey.set(rowKey(row), row))
    const push = (row: Row) => {
        const reusable = previousByKey.get(rowKey(row))
        rows.push(reusable && sameRow(reusable, row) ? reusable : row)
    }
    const pushNode = (
        node: StoredNode,
        depth: number,
        view: NodeView
    ): ChildrenStatus => {
        const children = store.getChildren(node.id)
        indexById.set(node.id, rows.length)
        push({
            kind: 'node',
            id: node.id,
            depth,
            children,
            view,
            result: filtered?.resultIds.has(node.id) ?? false,
        })
        return children
    }

    const walkSlots = (
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
                walkBrowse(childId, depth + 1)
                return
            }
            const page = childrenPageOf(index, pageSize)
            const status = pages.get(page)
            if (status?.status === 'failed') {
                push({
                    kind: 'error',
                    parentId: node.id,
                    index,
                    page,
                    error: status.error,
                    depth: depth + 1,
                })
            } else {
                push({
                    kind: 'skeleton',
                    parentId: node.id,
                    index,
                    depth: depth + 1,
                })
            }
        })
    }

    const walkBrowse = (id: string, depth: number) => {
        const node = store.getNode(id)
        if (!node) {
            return
        }
        const children = pushNode(node, depth, 'browse')
        if (openIds.has(id)) {
            walkSlots(node, depth, children)
        }
    }

    const walkPruned = (id: string, depth: number, view: FilteredView) => {
        const node = store.getNode(id)
        if (!node) {
            return
        }
        const children = pushNode(node, depth, 'pruned')
        if (view.revealedIds.has(id)) {
            walkSlots(node, depth, children)
            return
        }
        for (const childId of view.pruned.children.get(id) ?? []) {
            walkPruned(childId, depth + 1, view)
        }
    }

    const pushPlaceholders = ({
        loaded,
        total,
        pageSize,
        failedPage,
    }: FilteredView) => {
        const depth = rows.length > 0 ? rows[rows.length - 1].depth : 0
        if (total === undefined) {
            if (failedPage) {
                push({
                    kind: 'result-error',
                    index: 0,
                    page: failedPage.page,
                    error: failedPage.error,
                    depth,
                })
            }
            return
        }
        for (let index = loaded; index < total; index += 1) {
            const page = resultsPageOf(index, pageSize)
            if (failedPage && page === failedPage.page) {
                push({
                    kind: 'result-error',
                    index,
                    page,
                    error: failedPage.error,
                    depth,
                })
            } else {
                push({ kind: 'result-skeleton', index, depth })
            }
        }
    }

    if (filtered) {
        for (const rootId of filtered.pruned.roots) {
            walkPruned(rootId, 0, filtered)
        }
        pushPlaceholders(filtered)
    } else {
        for (const root of rootNodes) {
            walkBrowse(root.id, 0)
        }
    }
    return { rows, indexById }
}
