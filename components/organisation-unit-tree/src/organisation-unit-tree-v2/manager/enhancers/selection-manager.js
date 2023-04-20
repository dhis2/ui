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
         * support. */
        if (manager.getIsReady() && state.singleSelection) {
            const lastSelectedId = state.selectedIds.getFirstValue()
            setSelectedIds([lastSelectedId])
        }
    }

    async function setSelectedIds(selectedIdsArray = []) {
        if (state.selectedIds.hasEqualValues(selectedIdsArray)) {
            return
        }

        const nextSelectedIds = new EnhancedPrimitiveSet(selectedIdsArray)
        const { changes, additions } = state.selectedIds.diff(nextSelectedIds)
        const nextSelectedAncestorsMap = state.selectedAncestorsMap.clone()

        state.selectedIds.reset(nextSelectedIds)

        await manager.ensureOrganisationUnitsAreLoaded(additions)

        for (const changedId of changes) {
            const node = manager.getOrganisationUnitNodeById(changedId)
            node.refreshLabel()
            nextSelectedAncestorsMap.togglePathEntries(node.getPath())
        }

        updateAncestorSelectionFromMap(nextSelectedAncestorsMap)
    }

    function hasNodeSelectedDescendant(id) {
        return state.selectedAncestorsMap.has(id)
    }

    function getNodeSelectedDescendantsCount(id) {
        return state.selectedAncestorsMap.get(id)?.size
    }

    function isNodeSelected(id) {
        return state.selectedIds.has(id)
    }

    function toggleNodeSelection(id, event) {
        const toggledNode = manager.getOrganisationUnitNodeById(id)

        if (state.singleSelection) {
            toggleNodeSingleSelection(toggledNode)
        } else {
            toggleNodeMultiSelection(toggledNode)
        }

        const idsArray = state.selectedIds.toArray()
        const onChange = manager.getOnChange()
        const payload = state.singleSelection
            ? {
                  id: idsArray[0],
                  ids: idsArray,
                  node: manager.getOrganisationUnitNodeById(idsArray[0]),
              }
            : {
                  ids: idsArray,
                  nodes: idsArray.map((id) =>
                      manager.getOrganisationUnitNodeById(id)
                  ),
              }

        onChange(payload, event)
    }

    function toggleNodeSingleSelection(toggledNode) {
        /* Selecting a selected node in single selection mode is
         * a noop, similar to native radio inputs and selects */
        if (toggledNode.isSelected()) {
            return
        }

        const nextSelectedAncestorsMap = state.selectedAncestorsMap.clone()

        if (state.selectedIds.hasEntries()) {
            const currentSelectedId = state.selectedIds.getFirstValue()
            const currentSelectedNode =
                manager.getOrganisationUnitNodeById(currentSelectedId)
            state.selectedIds.delete(currentSelectedId)
            currentSelectedNode.refreshLabel()
            nextSelectedAncestorsMap.togglePathEntries(
                currentSelectedNode.getPath()
            )
        }

        state.selectedIds.add(toggledNode.getId())
        toggledNode.refreshLabel()
        nextSelectedAncestorsMap.togglePathEntries(toggledNode.getPath())

        updateAncestorSelectionFromMap(nextSelectedAncestorsMap)
    }

    function toggleNodeMultiSelection(toggledNode) {
        const { unitId, ancestorIds } = manager.parsePath(toggledNode.getPath())

        state.selectedIds.toggleValue(toggledNode.getId())
        toggledNode.refreshLabel()

        for (const ancestorId of ancestorIds) {
            const currentDescendantSelectionCount =
                getNodeSelectedDescendantsCount(ancestorId)

            state.selectedAncestorsMap.toggleEntry(ancestorId, unitId)

            const nextDescendantSelectionCount =
                getNodeSelectedDescendantsCount(ancestorId)

            if (
                currentDescendantSelectionCount !== nextDescendantSelectionCount
            ) {
                refreshAncestorLabelById(ancestorId)
            }
        }
    }

    function updateAncestorSelectionFromMap(nextSelectedAncestorsMap) {
        const changedAncestorIds = state.selectedAncestorsMap.compare(
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
        getSelectedAncestorsMap,
        getSelectedIds,
        getSingleSelection,
        getNodeSelectedDescendantsCount,
        hasNodeSelectedDescendant,
        isNodeSelected,
        refreshAncestorLabelById,
        setSelectedAncestorsMap,
        setSelectedIds,
        setSingleSelection,
        toggleNodeMultiSelection,
        toggleNodeSelection,
        toggleNodeSingleSelection,
        updateAncestorSelectionFromMap,
    }
}
