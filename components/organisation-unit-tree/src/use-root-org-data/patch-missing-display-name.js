const fromEntries = entries =>
    entries.reduce(
        (collection, [key, name]) => ({
            ...collection,
            [key]: name,
        }),
        {}
    )

/**
 * @param {Object[]} nodes
 * @returns {}
 */
export const patchMissingDisplayName = nodes => {
    const nodeEntries = Object.entries(nodes)
    const nodesWithDisplayName = nodeEntries.map(([id, node]) => {
        const displayName = node.displayName || ''
        return [id, { ...node, displayName }]
    })

    return fromEntries(nodesWithDisplayName)
}
