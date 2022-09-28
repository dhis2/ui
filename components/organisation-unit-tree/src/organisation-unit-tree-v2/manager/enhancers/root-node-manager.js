import { EnhancedPrimitiveSet } from '../helpers/index.js'

export const rootNodeManager = (manager) => {
    const rootIds = new EnhancedPrimitiveSet()
    const rootNodes = new Map()

    function getRootIds() {
        return rootIds
    }

    function getRootNodes() {
        return rootNodes
    }

    async function loadDeduplicatedRootNodesWithOfflineLevels() {
        const rootUnits = await manager.fetchRootsWithOfflineLevels(rootIds)
        const offlineUnits = await manager.fetchOfflineUnits(rootUnits)

        addDeduplicatedRootNodes(rootUnits)
        for (const unit of offlineUnits) {
            manager.addNode(unit)
        }
    }

    function addDeduplicatedRootNodes(rootUnits) {
        for (const rootUnit of rootUnits) {
            // deduplicate nested roots
            const isDescendantOfOtherRoot = rootUnits.some(
                ({ id, path }) =>
                    id !== rootUnit.id && rootUnit.path.includes(path)
            )
            if (!isDescendantOfOtherRoot) {
                const rootNode = manager.addNode(rootUnit)
                rootNodes.set(rootNode.getId(), rootNode)
            }
        }
    }

    function setRootIds(newRootIds) {
        if (rootIds.hasEqualValues(newRootIds)) {
            return
        }
        rootIds.reset(newRootIds)

        if (manager.getIsReady()) {
            resetRootNodes()
        }
    }

    async function resetRootNodes() {
        rootNodes.clear()

        const idsToFetch = rootIds.filter((id) => !manager.isNodeAvailable(id))

        if (idsToFetch.hasEntries()) {
            try {
                manager.setIsLoading(true)
                manager.setIsFetching(true)
                await manager.loadOrganisationUnitsByIds(idsToFetch)
                manager.setError(null)
            } catch (error) {
                console.error(error)
                manager.setError(error)
            } finally {
                manager.setIsLoading(false)
                manager.setIsFetching(false)
            }
        }

        const rootUnits = rootIds.map((id) =>
            manager.getOrganisationUnitNodeById(id).toJSON()
        )
        addDeduplicatedRootNodes(rootUnits)

        refreshRootNodes()
    }

    function refreshRootNodes() {
        rootNodes.forEach((rootNode) => {
            rootNode.refreshLabel()
            rootNode.refreshChildren()
        })
    }

    function isNodeRoot(id) {
        return rootIds.has(id)
    }

    return {
        getRootIds,
        addDeduplicatedRootNodes,
        getRootNodes,
        isNodeRoot,
        loadDeduplicatedRootNodesWithOfflineLevels,
        refreshRootNodes,
        resetRootNodes,
        setRootIds,
    }
}
