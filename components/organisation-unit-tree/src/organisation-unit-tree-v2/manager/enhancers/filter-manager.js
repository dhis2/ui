import { EnhancedPrimitiveSet, FilteredParentsMap } from '../helpers/index.js'

export function filterManager(manager) {
    const state = {
        filteredString: '',
        filteredPaths: new EnhancedPrimitiveSet(),
        filteredIds: new EnhancedPrimitiveSet(),
        filteredParentsMap: new FilteredParentsMap(),
        parentsWithAllChildrenLoadedIds: new EnhancedPrimitiveSet(),
        filteredNodeOpenedSiblingIds: new EnhancedPrimitiveSet(),
        closedFilteredNodeIds: new EnhancedPrimitiveSet(),
    }

    function getFilteredString() {
        return state.filteredString
    }

    function getFilteredPaths() {
        return state.filteredPaths
    }

    function getFilteredIds() {
        return state.filteredIds
    }

    function getFilteredParentsMap() {
        return state.filteredParentsMap
    }

    function setFilteredString(filteredString = '') {
        state.filteredString = filteredString
    }

    async function toggleHiddenChildren(id) {
        if (state.parentsWithAllChildrenLoadedIds.has(id)) {
            state.parentsWithAllChildrenLoadedIds.delete(id)
            manager.getOrganisationUnitNodeById(id).refreshChildren()
        } else {
            state.parentsWithAllChildrenLoadedIds.add(id)
            await manager.loadNodeChildren(id)
        }
    }

    function toggleFilteredNodeOpened(id) {
        const node = manager.getOrganisationUnitNodeById(id)

        if (node.isOpen()) {
            if (isFilteredNodeOpenedSibling(id)) {
                state.filteredNodeOpenedSiblingIds.delete(id)
            } else {
                state.closedFilteredNodeIds.add(id)
            }
        } else {
            if (isClosedFilteredNode(id)) {
                state.closedFilteredNodeIds.delete(id)
            } else {
                state.filteredNodeOpenedSiblingIds.add(id)
            }
        }

        node.refreshLabel()
        node.refreshChildren()
    }

    function clearNavigationWithinFilteredResults() {
        const childrenToRefresh = new EnhancedPrimitiveSet()
        const labelsToRefresh = new EnhancedPrimitiveSet()

        state.parentsWithAllChildrenLoadedIds.forEach((id) => {
            childrenToRefresh.add(id)
        })
        state.filteredNodeOpenedSiblingIds.forEach((id) => {
            childrenToRefresh.add(id)
            labelsToRefresh.add(id)
        })
        state.closedFilteredNodeIds.forEach((id) => {
            childrenToRefresh.add(id)
            labelsToRefresh.add(id)
        })

        state.parentsWithAllChildrenLoadedIds.clear()
        state.filteredNodeOpenedSiblingIds.clear()
        state.closedFilteredNodeIds.clear()

        labelsToRefresh.forEach((id) => {
            manager.getOrganisationUnitNodeById(id)?.refreshLabel()
        })

        childrenToRefresh.forEach((id) => {
            manager.getOrganisationUnitNodeById(id)?.refreshChildren()
        })
    }

    async function setFilterProperties(
        filteredPaths = [],
        filteredString = ''
    ) {
        const havePathsChanged = !state.filteredPaths.hasEqualValues(
            filteredPaths
        )
        const hasStringChanged = state.filteredString !== filteredString

        if (!havePathsChanged && !hasStringChanged) {
            return
        }

        clearNavigationWithinFilteredResults()

        const isSwitchToFilterMode =
            state.filteredPaths.isEmpty() && filteredPaths.length > 0
        const isSwitchToOpenedMode =
            state.filteredPaths.hasEntries() > 0 && filteredPaths.length === 0
        const parentsToRefresh = new EnhancedPrimitiveSet()
        const labelsToRefresh = new EnhancedPrimitiveSet()

        if (havePathsChanged) {
            await handelFilteredPathsChange({
                filteredPaths,
                parentsToRefresh,
                labelsToRefresh,
                isSwitchToFilterMode,
                isSwitchToOpenedMode,
            })
        }

        if (hasStringChanged) {
            handleFilterStringChange({
                filteredString,
                parentsToRefresh,
                labelsToRefresh,
                isSwitchToOpenedMode,
            })
        }

        for (const id of parentsToRefresh) {
            // Refresh toggler UI
            manager.getOrganisationUnitNodeById(id)?.refreshLabel()
            // Refresh children
            manager.getOrganisationUnitNodeById(id)?.refreshChildren()
        }

        for (const id of labelsToRefresh) {
            // Refresh highlight
            manager.getOrganisationUnitNodeById(id)?.refreshLabel()
        }
    }

    async function handelFilteredPathsChange({
        filteredPaths,
        parentsToRefresh,
        labelsToRefresh,
        isSwitchToFilterMode,
        isSwitchToOpenedMode,
    }) {
        const nextPaths = new EnhancedPrimitiveSet(filteredPaths)
        const nextIds = state.filteredIds.clone()
        const nextParentsMap = state.filteredParentsMap.clone()
        const {
            additions: addedPaths,
            deletions: deletedPaths,
        } = state.filteredPaths.diff(nextPaths)
        const idsToFetch = new EnhancedPrimitiveSet()

        state.filteredPaths.reset(nextPaths)

        updateNextIdsAndParentsMap({
            changedPaths: addedPaths,
            isDeleteMode: false,
            nextIds,
            nextParentsMap,
            idsToFetch,
        })

        updateNextIdsAndParentsMap({
            changedPaths: deletedPaths,
            isDeleteMode: true,
            nextIds,
            nextParentsMap,
            idsToFetch,
        })

        await manager.loadOrganisationUnitsByIds(idsToFetch)

        const changedParents = state.filteredParentsMap.compare(nextParentsMap)

        parentsToRefresh.assign(changedParents)

        state.filteredIds.diff(nextIds).deletions.forEach((id) => {
            if (!parentsToRefresh.has(getParentId(id))) {
                labelsToRefresh.add(id)
            }
        })

        state.filteredPaths.reset(nextPaths)
        state.filteredIds.reset(nextIds)
        state.filteredParentsMap.reset(nextParentsMap)

        if (isSwitchToFilterMode) {
            // All open items need to be refreshed, most will simply close
            for (const openedId of manager.getOpenedIds()) {
                parentsToRefresh.add(openedId)
            }
        }

        if (isSwitchToOpenedMode) {
            /* All filtered items need to be refreshed, some will close,
             * some will show all children */
            for (const filteredParentId of state.filteredParentsMap.keys()) {
                parentsToRefresh.add(filteredParentId)
            }
        }
    }

    function updateNextIdsAndParentsMap({
        changedPaths,
        isDeleteMode,
        nextIds,
        nextParentsMap,
        idsToFetch,
    }) {
        for (const changedPath of changedPaths) {
            const { unitId, ancestorIds } = manager.parsePath(changedPath)

            if (isDeleteMode) {
                nextIds.delete(unitId)
            } else {
                nextIds.add(unitId)
            }

            if (!isDeleteMode && !manager.isNodeAvailable(unitId)) {
                idsToFetch.add(unitId)
            }

            ancestorIds.forEach((ancestorId, index) => {
                // The unit is the child of the last ancestor
                const ancestorChildId = ancestorIds[index + 1] ?? unitId

                if (!isDeleteMode && !manager.isNodeAvailable(ancestorId)) {
                    idsToFetch.add(ancestorId)
                }

                if (isDeleteMode) {
                    nextParentsMap.deleteEntry(ancestorId, ancestorChildId)
                } else {
                    nextParentsMap.addEntry(ancestorId, ancestorChildId)
                }
            })
        }
    }

    function handleFilterStringChange({
        filteredString,
        parentsToRefresh,
        labelsToRefresh,
        isSwitchToOpenedMode,
    }) {
        setFilteredString(filteredString)

        if (isSwitchToOpenedMode) {
            return
        }

        state.filteredIds.forEach((id) => {
            if (!parentsToRefresh.has(getParentId(id))) {
                labelsToRefresh.add(id)
            }
        })
    }

    function getParentId(id) {
        return manager.getOrganisationUnitNodeById(id)?.getParent()?.getId()
    }

    function isNodeFilterMatch(id) {
        return state.filteredIds.has(id)
    }

    function isNodeInFilteredAncestors(id) {
        return state.filteredParentsMap.has(id)
    }

    function isInFilterMode() {
        return state.filteredPaths.hasEntries()
    }

    function isParentWithAllChildrenLoaded(id) {
        return state.parentsWithAllChildrenLoadedIds.has(id)
    }

    function isFilteredNodeOpenedSibling(id) {
        return state.filteredNodeOpenedSiblingIds.has(id)
    }

    function isClosedFilteredNode(id) {
        return state.closedFilteredNodeIds.has(id)
    }

    function isNodeVisibleInFilteredMode(id, parentId) {
        if (isClosedFilteredNode(parentId)) {
            return false
        }

        return (
            isParentWithAllChildrenLoaded(parentId) ||
            isFilteredNodeOpenedSibling(parentId) ||
            isNodeFilterMatch(id) ||
            isNodeInFilteredAncestors(id)
        )
    }

    function isNodeShowingChildrenInFilteredMode(id) {
        if (isClosedFilteredNode(id)) {
            return false
        }

        return isNodeInFilteredAncestors(id) || isFilteredNodeOpenedSibling(id)
    }

    function filterLocalTree({ token, level }) {
        const matchingPaths = []
        const displayNames = []
        if (token || level) {
            const lowerCasedToken = token?.toLowerCase()

            for (const [, node] of manager.getAllNodes()) {
                const isTokenMatch =
                    !token ||
                    node
                        .getDisplayName()
                        .toLowerCase()
                        .includes(lowerCasedToken)
                const isLevelMatch = !level || node.getLevel() === level
                if (isTokenMatch && isLevelMatch) {
                    matchingPaths.push(node.getPath())
                    displayNames.push(node.getDisplayName())
                }
            }
            setFilterProperties(matchingPaths, token)
        } else {
            setFilterProperties([], '')
        }
    }

    async function retreiveFilteredOrganisationUnits(options) {
        manager.setIsFetching(true)
        manager.refreshFetcher()

        try {
            const searchResults = await manager.fetchSearchResults(options)
            const nodes = []

            for (const unit of searchResults) {
                const node = manager.addNode(unit)
                nodes.push(node)
            }
            manager.setError(null)
            return nodes
        } catch (error) {
            console.error(error)
            manager.setError(error)
            return error
        } finally {
            manager.setIsFetching(false)
            manager.refreshFetcher()
        }
    }

    return {
        clearNavigationWithinFilteredResults,
        filterLocalTree,
        getFilteredIds,
        getFilteredParentsMap,
        getFilteredPaths,
        getFilteredString,
        getParentId,
        isClosedFilteredNode,
        isFilteredNodeOpenedSibling,
        isInFilterMode,
        isNodeFilterMatch,
        isNodeInFilteredAncestors,
        isNodeShowingChildrenInFilteredMode,
        isNodeVisibleInFilteredMode,
        isParentWithAllChildrenLoaded,
        retreiveFilteredOrganisationUnits,
        setFilteredString,
        setFilterProperties,
        toggleFilteredNodeOpened,
        toggleHiddenChildren,
    }
}
