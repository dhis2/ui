/**
 * Note by JGS: I can't recall why this is necessary,
 * but it's there.. So I guess it's better to leave it in for now
 * and investigate why this is necessary in the first place!
 * Maybe we can omit this completely and remove the state from
 * the useRootOrgData hook entirely
 * @TODO: Investigate if this could be removed
 */
export const patchMissingDisplayName = (
    nodes: Record<string, { displayName?: string; [key: string]: unknown }>
): Record<string, { displayName: string; [key: string]: unknown }> => {
    const nodeEntries = Object.entries(nodes)
    const result: Record<
        string,
        { displayName: string; [key: string]: unknown }
    > = {}

    for (const [id, node] of nodeEntries) {
        const displayName = node.displayName || ''
        result[id] = { ...node, displayName }
    }

    return result
}
