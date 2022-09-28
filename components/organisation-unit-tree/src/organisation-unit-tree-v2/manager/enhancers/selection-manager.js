import { SelectedAncestorsMap, EnhancedPrimitiveSet } from '../helpers/index.js'

export function selectionManager(manager) {
    const state = {
        selectedAncestorsMap: new SelectedAncestorsMap(manager),
        singleSelection: false,
        selectedIds: new EnhancedPrimitiveSet(),
    }

    function getSingleSelection() {
        return state.singleSelection
    }

    function getSelectedIds() {
        return state.selectedIds
    }

    function getSelectedAncestorsMap() {
        return state.selectedAncestorsMap
    }

    function setSelectedAncestorsMap(newSelectedAncestorsMap = []) {
        state.selectedAncestorsMap = newSelectedAncestorsMap
    }

    function setSingleSelection(value) {
        if (state.singleSelection === value) {
            return
        }

        state.singleSelection = value

        /* When switching from multi to single selection we have to
         * limit the amount of selected IDs to 1. Which one to
         * keep is pretty ambiguous, and we are holding on to the first
         * selected ID because that's easy. Changing selection mode
         * during usage can be considered an antipattern and there is no
         * "correct" behaviour. So no great effort needs to be taken to
         * support  */
        if (state.singleSelection) {
            const lastSelectedId = state.singleSelection.getFirstValue()
            setSelectedIds([lastSelectedId])
        }
    }

    async function setSelectedIds(selectedIdsArray = []) {
        const currentSelectedIds = getSelectedIds()

        if (currentSelectedIds.hasEqualValues(selectedIdsArray)) {
            return
        }

        const nextSelectedIds = new EnhancedPrimitiveSet(selectedIdsArray)
        const { changes, additions } = currentSelectedIds.diff(nextSelectedIds)
        const nextSelectedAncestorsMap = getSelectedAncestorsMap().clone()

        currentSelectedIds.reset(nextSelectedIds)

        await manager.ensureOrganisationUnitsAreLoaded(additions)

        for (const changedId of changes) {
            const node = manager.getOrganisationUnitNodeById(changedId)
            node.refreshLabel()
            nextSelectedAncestorsMap.togglePathEntries(node.getPath())
        }

        updateAncestorSelectionFromMap(nextSelectedAncestorsMap)
    }

    function hasNodeSelectedDescendant(id) {
        return getSelectedAncestorsMap().has(id)
    }

    function isNodeSelected(id) {
        return getSelectedIds().has(id)
    }

    function toggleNodeSelection(id) {
        const toggledNode = manager.getOrganisationUnitNodeById(id)

        if (getSingleSelection()) {
            toggleNodeSingleSelection(toggledNode)
        } else {
            toggleNodeMultiSelection(toggledNode)
        }
    }

    function toggleNodeSingleSelection(toggledNode) {
        const selectedIds = getSelectedIds()

        /* Selecting a selected node in single selection mode is
         * a noop, similar to native radio inputs and selects */
        if (toggledNode.isNodeSelected()) {
            return
        }

        const currentSelectedId = selectedIds.getFirstValue()
        const currentSelectedNode =
            manager.getOrganisationUnitNodeById(currentSelectedId)
        const nextSelectedAncestorsMap = getSelectedAncestorsMap().clone()

        selectedIds.delete(currentSelectedId)
        currentSelectedNode.refreshLabel()
        nextSelectedAncestorsMap.togglePathEntries(
            currentSelectedNode.getPath()
        )
        selectedIds.add(toggledNode.getId())
        toggledNode.refreshLabel()
        nextSelectedAncestorsMap.togglePathEntries(toggledNode.getPath())

        updateAncestorSelectionFromMap(nextSelectedAncestorsMap)
    }

    function toggleNodeMultiSelection(toggledNode) {
        const selectedIds = getSelectedIds()
        const selectedAncestorsMap = getSelectedAncestorsMap()
        const { unitId, ancestorIds } = manager.parsePath(toggledNode.getPath())

        selectedIds.toggleValue(toggledNode.getId())
        toggledNode.refreshLabel()

        for (const ancestorId of ancestorIds) {
            const currentAncestorSelection =
                hasNodeSelectedDescendant(ancestorId)

            selectedAncestorsMap.toggleEntry(ancestorId, unitId)

            const nextAncestorSelection = hasNodeSelectedDescendant(ancestorId)

            if (currentAncestorSelection !== nextAncestorSelection) {
                refreshAncestorLabelById(ancestorId)
            }
        }
    }

    function updateAncestorSelectionFromMap(nextSelectedAncestorsMap) {
        const changedAncestorIds = getSelectedAncestorsMap().compare(
            nextSelectedAncestorsMap
        )

        setSelectedAncestorsMap(nextSelectedAncestorsMap)

        for (const changedAncestorId of changedAncestorIds) {
            refreshAncestorLabelById(changedAncestorId)
        }
    }

    function refreshAncestorLabelById(id) {
        const ancestor = manager.getOrganisationUnitNodeById(id)
        /* A selected node can be orphaned - i.e. not have a parent - but
         * still have available nodes further up the tree. This means it
         * is impossible to use the `forEachAncestor` method. Instead we
         * use the path to traverse up and simply update what is available */
        ancestor?.refreshLabel()
    }

    return {
        getSingleSelection,
        getSelectedIds,
        getSelectedAncestorsMap,
        setSelectedAncestorsMap,
        setSingleSelection,
        setSelectedIds,
        hasNodeSelectedDescendant,
        isNodeSelected,
        toggleNodeSelection,
        toggleNodeSingleSelection,
        toggleNodeMultiSelection,
        updateAncestorSelectionFromMap,
        refreshAncestorLabelById,
    }
}
