/**
 * Note by JGS: I can't recall why this is necessary,
 * but it's there.. So I guess it's better to leave it in for now
 * and investigate why this is necessary in the first place!
 * Maybe we can omit this completely and remove the state from
 * the useRootOrgData hook entirely
 * @TODO: Investigate if this could be removed
 *
 * @param {Object[]} nodes
 * @returns {}
 */
export const patchMissingDisplayName = (nodes) => {
    const nodeEntries = Object.entries(nodes)
    const nodesWithDisplayName = nodeEntries.map(([id, node]) => {
        const displayName = node.displayName || ''
        return [id, { ...node, displayName }]
    })

    return Object.fromEntries(nodesWithDisplayName)
}
