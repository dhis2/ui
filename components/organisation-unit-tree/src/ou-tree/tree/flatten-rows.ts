import {
    childrenPageOf,
    type ChildrenStatus,
    type NodeStore,
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
    roots: string[]
    openIds: ReadonlySet<string>
    store: NodeStore
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
    roots,
    openIds,
    store,
}: FlattenRowsInput): FlatRows => {
    const rows: Row[] = []
    const indexById = new Map<string, number>()

    const walk = (id: string, depth: number) => {
        const node = store.getNode(id)
        if (!node) {
            return
        }
        const children = store.getChildren(id)
        indexById.set(id, rows.length)
        rows.push({ kind: 'node', id, depth, children })
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

    for (const root of roots) {
        walk(root, 0)
    }
    return { rows, indexById }
}
