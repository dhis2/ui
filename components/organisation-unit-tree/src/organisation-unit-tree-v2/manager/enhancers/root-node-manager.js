import { EnhancedPrimitiveSet } from '../helpers/index.js'

export const rootNodeManager = (manager) => {
    const state = {
        rootIds: new EnhancedPrimitiveSet(),
        rootNodes: new Map(),
        organisationUnitLevels: new Map(),
    }

    function getRootIds() {
        return state.rootIds
    }

    function getRootNodes() {
        return state.rootNodes
    }

    function getOrganisationUnitLevels() {
        return state.organisationUnitLevels
    }

    function getOrganisationUnitLevelDisplayName(level) {
        return state.organisationUnitLevels.get(level)
    }

    async function loadDeduplicatedRootNodesWithOfflineLevels() {
        const {
            rootUnits,
            organisationUnitLevels,
        } = await manager.fetchRootsWithOfflineLevels(state.rootIds)
        const offlineUnits = await manager.fetchOfflineUnits(rootUnits)

        for (const { level, displayName } of organisationUnitLevels) {
            state.organisationUnitLevels.set(level, displayName)
        }
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
                state.rootNodes.set(rootNode.getId(), rootNode)
            }
        }
    }

    function setRootIds(newRootIds) {
        if (state.rootIds.hasEqualValues(newRootIds)) {
            return
        }

        state.rootIds.reset(newRootIds)

        if (manager.getIsReady()) {
            resetRootNodes()
        }
    }

    async function resetRootNodes() {
        state.rootNodes.clear()

        const idsToFetch = state.rootIds.filter(
            (id) => !manager.isNodeAvailable(id)
        )

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

        const rootUnits = state.rootIds.map((id) =>
            manager.getOrganisationUnitNodeById(id).toJSON()
        )
        addDeduplicatedRootNodes(rootUnits)

        refreshRootNodes()
    }

    function refreshRootNodes() {
        state.rootNodes.forEach((rootNode) => {
            rootNode.refreshLabel()
            rootNode.refreshChildren()
        })
    }

    function isNodeRoot(id) {
        return state.rootIds.has(id)
    }

    return {
        addDeduplicatedRootNodes,
        getOrganisationUnitLevelDisplayName,
        getOrganisationUnitLevels,
        getRootIds,
        getRootNodes,
        isNodeRoot,
        loadDeduplicatedRootNodesWithOfflineLevels,
        refreshRootNodes,
        resetRootNodes,
        setRootIds,
    }
}
