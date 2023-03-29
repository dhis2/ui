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
        const openedPaths = getOpenedPaths()

        // Exit if filter is enabled or if current paths equal next
        if (
            manager.isInFilterMode() ||
            openedPaths.hasEqualValues(nextOpenedPaths)
        ) {
            return
        }

        manager.clearParentsWithAllChildrenLoadedIds()
        openedPaths.reset(nextOpenedPaths)

        const currentOpenedIds = getOpenedIds()
        const nextOpenedIds = new EnhancedPrimitiveSet()
        const idsToFetch = new EnhancedPrimitiveSet()

        for (const path of openedPaths) {
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

        const { changes } = currentOpenedIds.diff(nextOpenedIds)

        currentOpenedIds.reset(nextOpenedIds)

        for (const changedId of changes) {
            const node = manager.getOrganisationUnitNodeById(changedId)
            node.refreshChildren()
        }
    }

    async function toggleNodeOpened(id) {
        /* TODO: what should happen when a user clicks a chevron
         * when the tree is in filter-mode? This could perhaps
         * be a trigger to switch back to open mode, with all filtered
         * units being transformed to open items? For now we just do
         * nothing. */
        if (manager.isInFilterMode()) {
            return
        }

        const node = manager.getOrganisationUnitNodeById(id)

        getOpenedIds().toggleValue(id)
        getOpenedPaths().toggleValue(node.getPath())

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
            getNodesWithChildrenFetchErrors().delete(id)
        } catch (error) {
            console.error(error)
            getNodesWithChildrenFetchErrors().add(id)
            node.setError(error)
        } finally {
            deleteNodeWithChildrenFetching(id)
            node.refreshLabel()
            node.refreshChildren()
        }
    }

    function isNodeInOpenedIds(id) {
        return getOpenedIds().has(id)
    }

    function isFetchingChildren() {
        return getNodesWithChildrenFetching().hasEntries()
    }

    function hasChildrenWithErrors() {
        return getNodesWithChildrenFetchErrors().hasEntries()
    }

    function isNodeFetchingChildren(id) {
        return getNodesWithChildrenFetching().has(id)
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
        isFetchingChildren,
        hasChildrenWithErrors,
        isNodeFetchingChildren,
    }
}
