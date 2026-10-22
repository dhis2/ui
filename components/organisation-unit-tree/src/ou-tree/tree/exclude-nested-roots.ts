import type { CachedNode } from '../node-cache/index'

/**
 * Drops any root that descends from another root, so no unit appears in the
 * tree twice. Keeps the given order.
 */
export const excludeNestedRoots = (nodes: CachedNode[]): CachedNode[] =>
    nodes.filter(
        (node) =>
            !nodes.some(
                (other) =>
                    other.id !== node.id &&
                    node.path.startsWith(`${other.path}/`)
            )
    )
