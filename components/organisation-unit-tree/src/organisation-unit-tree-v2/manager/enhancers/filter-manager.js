import { EnhancedPrimitiveSet, FilteredParentsMap } from '../helpers/index.js'

export function filterManager(manager) {
    const state = {
        filteredString: '',
        filteredPaths: new EnhancedPrimitiveSet(),
        filteredIds: new EnhancedPrimitiveSet(),
        filteredParentsMap: new FilteredParentsMap(),
        parentsWithAllChildrenLoadedIds: new EnhancedPrimitiveSet(),
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

    function getParentsWithAllChildrenLoadedIds() {
        return state.parentsWithAllChildrenLoadedIds
    }

    function setFilteredString(filteredString = '') {
        state.filteredString = filteredString
    }

    async function loadAllChildren(id) {
        getParentsWithAllChildrenLoadedIds().add(id)
        await manager.loadNodeChildren(id)
    }

    function clearParentsWithAllChildrenLoadedIds() {
        getParentsWithAllChildrenLoadedIds().clear()
    }

    async function setFilterProperties(
        filteredPaths = [],
        filteredString = ''
    ) {
        const currentPaths = getFilteredPaths()
        const havePathsChanged = !currentPaths.hasEqualValues(filteredPaths)
        const hasStringChanged = getFilteredString() !== filteredString

        if (!havePathsChanged && !hasStringChanged) {
            return
        }

        clearParentsWithAllChildrenLoadedIds()

        const currentIds = getFilteredIds()
        const currentParentsMap = getFilteredParentsMap()
        const isSwitchToFilterMode =
            currentPaths.isEmpty() && filteredPaths.length > 0
        const isSwitchToOpenedMode =
            currentPaths.hasEntries() > 0 && filteredPaths.length === 0
        const parentsToRefresh = new EnhancedPrimitiveSet()
        const labelsToRefresh = new EnhancedPrimitiveSet()

        if (havePathsChanged) {
            await handelFilteredPathsChange({
                filteredPaths,
                currentPaths,
                currentIds,
                currentParentsMap,
                parentsToRefresh,
                labelsToRefresh,
                isSwitchToFilterMode,
                isSwitchToOpenedMode,
            })
        }

        if (hasStringChanged) {
            handleFilterStringChange({
                filteredString,
                currentIds,
                parentsToRefresh,
                labelsToRefresh,
                isSwitchToOpenedMode,
            })
        }

        for (const id of parentsToRefresh) {
            manager.getOrganisationUnitNodeById(id)?.refreshChildren()
        }

        for (const id of labelsToRefresh) {
            manager.getOrganisationUnitNodeById(id)?.refreshLabel()
        }
    }

    async function handelFilteredPathsChange({
        filteredPaths,
        currentPaths,
        currentIds,
        currentParentsMap,
        parentsToRefresh,
        labelsToRefresh,
        isSwitchToFilterMode,
        isSwitchToOpenedMode,
    }) {
        const nextPaths = new EnhancedPrimitiveSet(filteredPaths)
        const nextIds = currentIds.clone()
        const nextParentsMap = currentParentsMap.clone()
        const { additions: addedPaths, deletions: deletedPaths } =
            currentPaths.diff(nextPaths)
        const idsToFetch = new EnhancedPrimitiveSet()

        currentPaths.reset(nextPaths)

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

        const changedParents = currentParentsMap.compare(nextParentsMap)

        parentsToRefresh.assign(changedParents)

        currentIds.diff(nextIds).deletions.forEach((id) => {
            if (!parentsToRefresh.has(getParentId(id))) {
                labelsToRefresh.add(id)
            }
        })

        currentPaths.reset(nextPaths)
        currentIds.reset(nextIds)
        currentParentsMap.reset(nextParentsMap)

        if (isSwitchToFilterMode) {
            // All open items need to be refreshed, most will simply close
            for (const openedId of manager.getOpenedIds()) {
                parentsToRefresh.add(openedId)
            }
        }

        if (isSwitchToOpenedMode) {
            /* All filtered items need to be refreshed, some will close,
             * some will show all children */
            for (const filteredParentId of currentParentsMap.keys()) {
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
        currentIds,
        parentsToRefresh,
        labelsToRefresh,
        isSwitchToOpenedMode,
    }) {
        setFilteredString(filteredString)

        if (isSwitchToOpenedMode) {
            return
        }

        currentIds.forEach((id) => {
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
        return getParentsWithAllChildrenLoadedIds().has(id)
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
        clearParentsWithAllChildrenLoadedIds,
        filterLocalTree,
        getFilteredIds,
        getFilteredParentsMap,
        getFilteredPaths,
        getFilteredString,
        getParentId,
        isInFilterMode,
        isNodeFilterMatch,
        isNodeInFilteredAncestors,
        isParentWithAllChildrenLoaded,
        loadAllChildren,
        retreiveFilteredOrganisationUnits,
        setFilteredString,
        setFilterProperties,
    }
}
