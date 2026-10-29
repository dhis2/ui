import type { NodeStore } from '../node-store/index'

/** The filtered tree: results under their ancestors, as ordered child lists. */
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
 * from the first shown root in each path down. Appending is right because
 * results arrive in depth-first tree order. Returns the ids it could not
 * place: no shown root in the path, or an id not in the store.
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
}): string[] => {
    const unplaced: string[] = []
    for (const result of results) {
        const ids = result.path.split('/').filter(Boolean)
        const start = ids.findIndex((id) => shownRootIds.has(id))
        const chain = start < 0 ? [] : ids.slice(start)
        if (chain.length === 0 || chain.some((id) => !store.getNode(id))) {
            unplaced.push(result.id)
            continue
        }
        chain.forEach((id, index) => append(pruned, chain[index - 1], id))
    }
    return unplaced
}
