import { EnhancedPrimitiveSet } from '../helpers/index.js'

export function openedManager(manager) {
    const state = {
        openedPaths: new EnhancedPrimitiveSet(),
        openedIds: new EnhancedPrimitiveSet(),
        nodesWithChildrenFetching: new EnhancedPrimitiveSet(),
        nodesWithChildrenFetchErrors: new EnhancedPrimitiveSet(),
    }

    function getOpenedPaths() {
        return state.openedPaths
    }

    function getOpenedIds() {
        return state.openedIds
    }

    function getNodesWithChildrenFetching() {
        return state.nodesWithChildrenFetching
    }

    function addNodeWithChildrenFetching(id) {
        state.nodesWithChildrenFetching.add(id)

        if (state.nodesWithChildrenFetching.size === 1) {
            manager.setIsFetching(true)
            manager.refreshFetcher()
        }
    }

    function deleteNodeWithChildrenFetching(id) {
        state.nodesWithChildrenFetching.delete(id)

        if (state.nodesWithChildrenFetching.isEmpty()) {
            manager.setIsFetching(false)
            manager.refreshFetcher()
        }
    }

    function getNodesWithChildrenFetchErrors() {
        return state.nodesWithChildrenFetchErrors
    }

    async function setOpenedPaths(nextOpenedPaths = []) {
        // Exit if filter is enabled or if current paths equal next
        if (
            manager.isInFilterMode() ||
            state.openedPaths.hasEqualValues(nextOpenedPaths)
        ) {
            return
        }

        manager.clearParentsWithAllChildrenLoadedIds()
        state.openedPaths.reset(nextOpenedPaths)

        const nextOpenedIds = new EnhancedPrimitiveSet()
        const idsToFetch = new EnhancedPrimitiveSet()

        for (const path of state.openedPaths) {
            const { allIds } = manager.parsePath(path)
            for (const id of allIds) {
                nextOpenedIds.add(id)
                const node = manager.getOrganisationUnitNodeById(id)
                if (!node || (node && !node.hasAllChildren())) {
                    idsToFetch.add(id)
                }
            }
        }

        await manager.loadOrganisationUnitsByIds(idsToFetch, true)

        const { changes } = state.openedIds.diff(nextOpenedIds)

        state.openedIds.reset(nextOpenedIds)

        for (const changedId of changes) {
            const node = manager.getOrganisationUnitNodeById(changedId)
            node.refreshChildren()
        }
    }

    async function toggleNodeOpened(id) {
        if (manager.isInFilterMode()) {
            manager.toggleFilteredNodeOpened(id)
        }

        const node = manager.getOrganisationUnitNodeById(id)

        state.openedIds.toggleValue(id)
        state.openedPaths.toggleValue(node.getPath())

        if (isNodeInOpenedIds(id)) {
            await loadNodeChildren(id)
        } else {
            node.refreshLabel()
            node.refreshChildren()
        }
    }

    async function loadNodeChildren(id) {
        const node = manager.getOrganisationUnitNodeById(id)

        if (node.hasAllChildren()) {
            node.refreshLabel()
            node.refreshChildren()
            return
        }

        addNodeWithChildrenFetching(id)
        node.refreshLabel()

        try {
            const childUnits = await manager.fetchChildren(id)

            for (const unit of childUnits) {
                const existingNode = manager.getOrganisationUnitNodeById(
                    unit.id
                )

                // Give orphans some parents
                if (existingNode && !existingNode.getParent()) {
                    existingNode.setParent(this)
                }

                const childNode = existingNode ?? manager.addNode(unit)
                node.addChild(childNode)
            }
            state.nodesWithChildrenFetchErrors.delete(id)
        } catch (error) {
            console.error(error)
            state.nodesWithChildrenFetchErrors.add(id)
            node.setError(error)
        } finally {
            deleteNodeWithChildrenFetching(id)
            node.refreshLabel()
            node.refreshChildren()
        }
    }

    function isNodeInOpenedIds(id) {
        return state.openedIds.has(id)
    }

    function isFetchingChildren() {
        return state.nodesWithChildrenFetching.hasEntries()
    }

    function hasChildrenWithErrors() {
        return state.nodesWithChildrenFetchErrors.hasEntries()
    }

    function isNodeFetchingChildren(id) {
        return state.nodesWithChildrenFetching.has(id)
    }

    function isNodeVisibleInOpenedMode(id, parentId) {
        return manager.isNodeRoot(id) || isNodeInOpenedIds(parentId)
    }

    return {
        openedManager,
        getOpenedPaths,
        getOpenedIds,
        getNodesWithChildrenFetching,
        getNodesWithChildrenFetchErrors,
        setOpenedPaths,
        toggleNodeOpened,
        loadNodeChildren,
        isNodeInOpenedIds,
        isNodeVisibleInOpenedMode,
        isFetchingChildren,
        hasChildrenWithErrors,
        isNodeFetchingChildren,
    }
}
