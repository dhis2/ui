import {
    childrenPageOf,
    type ChildrenStatus,
    type NodeStore,
    type StoredNode,
} from '../node-store/index'

export type Row =
    | { kind: 'node'; id: string; depth: number; children: ChildrenStatus }
    | { kind: 'skeleton'; parentId: string; index: number; depth: number }
    | {
          kind: 'error'
          parentId: string
          page: number
          error: unknown
          depth: number
      }

export interface FlattenRowsInput {
    rootNodes: StoredNode[]
    openIds: ReadonlySet<string>
    store: NodeStore
    /** The previous result; node rows that did not change are reused. */
    previous?: FlatRows
}

export interface FlatRows {
    rows: Row[]
    indexById: Map<string, number>
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

    // A node row keeps its identity across rebuilds while its depth and
    // children status are unchanged, so a memoised row component can skip.
    const nodeRow = (
        id: string,
        depth: number,
        children: ChildrenStatus
    ): Row => {
        const index = previous?.indexById.get(id)
        const reusable = index === undefined ? undefined : previous?.rows[index]
        if (
            reusable?.kind === 'node' &&
            reusable.depth === depth &&
            reusable.children === children
        ) {
            return reusable
        }
        return { kind: 'node', id, depth, children }
    }

    const walk = (id: string, depth: number) => {
        const node = store.getNode(id)
        if (!node) {
            return
        }
        const children = store.getChildren(id)
        indexById.set(id, rows.length)
        rows.push(nodeRow(id, depth, children))
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
                rows.push({
                    kind: 'error',
                    parentId: id,
                    page,
                    error: status.error,
                    depth: depth + 1,
                })
            } else {
                rows.push({
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
