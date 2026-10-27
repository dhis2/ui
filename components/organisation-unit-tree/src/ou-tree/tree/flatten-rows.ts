import {
    childrenPageOf,
    type ChildrenStatus,
    type NodeStore,
    type StoredNode,
} from '../node-store/index'
import { rowKey } from './row-key'

export type Row =
    | { kind: 'node'; id: string; depth: number; children: ChildrenStatus }
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

export interface FlattenRowsInput {
    rootNodes: StoredNode[]
    openIds: ReadonlySet<string>
    store: NodeStore
    /** The previous result; rows that did not change are reused. */
    previous?: FlatRows
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
            return a.kind === 'node' && a.children === b.children
        case 'skeleton':
            return true
        case 'error':
            return (
                a.kind === 'error' && a.page === b.page && a.error === b.error
            )
    }
}

/**
 * The tree as a flat list: a depth-first walk from the roots, descending
 * into the nodes in `openIds` whose children the store has. Depth is
 * relative to the root. Under an open node, a filled slot is a node row and
 * an empty slot is a skeleton row or, if its page failed, an error row.
 */
export const flattenRows = ({
    rootNodes,
    openIds,
    store,
    previous,
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

    const walk = (id: string, depth: number) => {
        const node = store.getNode(id)
        if (!node) {
            return
        }
        const children = store.getChildren(id)
        indexById.set(id, rows.length)
        push({ kind: 'node', id, depth, children })
        if (!openIds.has(id) || node.leaf || children.status !== 'loaded') {
            return
        }
        const { slots, pages, pageSize } = children.children
        slots.forEach((childId, index) => {
            if (childId !== undefined) {
                walk(childId, depth + 1)
                return
            }
            const page = childrenPageOf(index, pageSize)
            const status = pages.get(page)
            if (status?.status === 'failed') {
                push({
                    kind: 'error',
                    parentId: id,
                    index,
                    page,
                    error: status.error,
                    depth: depth + 1,
                })
            } else {
                push({
                    kind: 'skeleton',
                    parentId: id,
                    index,
                    depth: depth + 1,
                })
            }
        })
    }

    for (const root of rootNodes) {
        walk(root.id, 0)
    }
    return { rows, indexById }
}
