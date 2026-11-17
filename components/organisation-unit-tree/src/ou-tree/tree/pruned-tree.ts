import type { NodeStore } from '../node-store'

/** The pruned tree: results under their ancestors, as ordered child lists. */
export interface PrunedTree {
    roots: string[]
    children: Map<string, string[]>
    /** Every id in `roots` or in a child list. */
    placed: Set<string>
}

/** The results page holding the result at an index; pages are plain, like children pages. */
export const resultsPageOf = (resultIndex: number, pageSize: number): number =>
    Math.floor(resultIndex / pageSize) + 1

export const createPrunedTree = (): PrunedTree => ({
    roots: [],
    children: new Map(),
    placed: new Set(),
})

const append = (
    pruned: PrunedTree,
    parentId: string | undefined,
    id: string
) => {
    if (pruned.placed.has(id)) {
        return
    }
    pruned.placed.add(id)
    if (parentId === undefined) {
        pruned.roots.push(id)
        return
    }
    const siblings = pruned.children.get(parentId)
    if (siblings) {
        siblings.push(id)
    } else {
        pruned.children.set(parentId, [id])
    }
}

/**
 * Places results, in the tree order they arrive in, under their ancestors
 * from the first shown root in each path down to the result itself.
 * Appending is right because results arrive in depth-first tree order.
 *
 * The endpoint searches below the given roots and sends every ancestor
 * along with the results, so a result without a shown root in its path,
 * or with an ancestor the store does not hold, breaks that contract:
 * `addResults` throws rather than drop it.
 */
export const addResults = ({
    pruned,
    results,
    shownRootIds,
    store,
}: {
    pruned: PrunedTree
    results: readonly { id: string; path: string }[]
    shownRootIds: ReadonlySet<string>
    store: Pick<NodeStore, 'getNode'>
}): void => {
    for (const result of results) {
        const ids = result.path.split('/').filter(Boolean)
        if (ids[ids.length - 1] !== result.id) {
            ids.push(result.id)
        }
        const start = ids.findIndex((id) => shownRootIds.has(id))
        if (start < 0) {
            throw new Error(
                `OuTree: result ${result.id} has no shown root in its path ${result.path}`
            )
        }
        const chain = ids.slice(start)
        const missing = chain.find((id) => !store.getNode(id))
        if (missing !== undefined) {
            throw new Error(
                `OuTree: ancestor ${missing} of result ${result.id} is not in the store; the tree endpoint must send every ancestor`
            )
        }
        chain.forEach((id, index) => append(pruned, chain[index - 1], id))
    }
}
