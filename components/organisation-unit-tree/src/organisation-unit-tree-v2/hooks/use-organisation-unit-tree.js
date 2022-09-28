import { useState, useEffect } from 'react'
import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitTree = ({
    disabledIds,
    filteredString,
    onChange,
    openedPaths,
    rootIds,
    selectedIds,
    singleSelection,
    filteredPaths,
}) => {
    const manager = useOrganisationUnitTreeManager()
    const [loadingState, setLoadingState] = useState(manager.getLoadingState())

    useEffect(() => {
        if (!manager.getIsReady()) {
            manager.init({
                disabledIds,
                filteredString,
                onChange,
                openedPaths,
                rootIds,
                selectedIds,
                singleSelection,
                filteredPaths,
            })
        }
    }, [
        disabledIds,
        filteredString,
        onChange,
        openedPaths,
        rootIds,
        selectedIds,
        singleSelection,
        filteredPaths,
        manager,
    ])

    // Propagate prop changes to manager
    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setDisabledIds(disabledIds)
        }
    }, [manager, disabledIds])

    useEffect(() => {
        /* We deal with these two props together because in a typical
         * scenario they will be updated together and this way we can
         * prevent double rerenders in the manager */
        if (manager.getIsReady()) {
            manager.setFilterProperties(filteredString, filteredPaths)
        }
    }, [manager, filteredString, filteredPaths])

    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setOnChange(onChange)
        }
    }, [manager, onChange])

    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setOpenedPaths(openedPaths)
        }
    }, [manager, openedPaths])

    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setRootIds(rootIds)
        }
    }, [manager, rootIds])

    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setSelectedIds(selectedIds)
        }
    }, [manager, selectedIds])

    useEffect(() => {
        if (manager.getIsReady()) {
            manager.setSingleSelection(singleSelection)
        }
    }, [manager, singleSelection])

    useEffect(
        () =>
            manager.onTreeStateChange((loadingState) => {
                setLoadingState(loadingState)
            }),
        [manager]
    )

    return {
        isReady: loadingState.isReady,
        isLoading: loadingState.isLoading,
        error: loadingState.error,
    }
}
