export const treeManager = (manager, OrganisationUnitNodeManager) => {
    const state = {
        nodes: new Map(),
    }

    async function ensureOrganisationUnitsAreLoaded(ids, withChildren) {
        const idsToFetch = ids.filter((id) => {
            const node = getOrganisationUnitNodeById(id)
            return !node || (node && withChildren && !node.hasAllChildren())
        })

        return await loadOrganisationUnitsByIds(idsToFetch, withChildren)
    }

    async function loadOrganisationUnitsByIds(ids, withChildren) {
        const newUnits = await manager.fetchUnitsByIds(ids, withChildren)

        for (const unit of newUnits) {
            addNode(unit)

            if (withChildren) {
                for (const child of unit.children) {
                    addNode(child)
                }
            }
        }
    }

    function getAllNodes() {
        return state.nodes
    }

    function addNode(unit) {
        // Prevent adding existing node as will clear children
        if (isNodeAvailable(unit.id)) {
            return getOrganisationUnitNodeById(unit.id)
        }
        const { parentId } = manager.parsePath(unit.path)
        /**
         * Nodes can be orphaned, in which case they cannot
         * be added to the tree, but they can be added to the
         * list of nodes. An example of this is when selected
         * units are fetched to read their paths.
         */
        const parent = getOrganisationUnitNodeById(parentId)
        const node = new OrganisationUnitNodeManager({
            ...unit,
            parent,
            manager,
        })

        state.nodes.set(node.getId(), node)

        if (parent) {
            parent.addChild(node)
        }

        return node
    }

    function isNodeAvailable(id) {
        return state.nodes.has(id)
    }

    function getOrganisationUnitNodeById(id) {
        return state.nodes.get(id)
    }

    function isNodeShowingChildren(id) {
        return manager.isInFilterMode()
            ? manager.isNodeShowingChildrenInFilteredMode(id)
            : manager.isNodeInOpenedIds(id)
    }

    return {
        addNode,
        ensureOrganisationUnitsAreLoaded,
        getAllNodes,
        getOrganisationUnitNodeById,
        isNodeAvailable,
        isNodeShowingChildren,
        loadOrganisationUnitsByIds,
    }
}
