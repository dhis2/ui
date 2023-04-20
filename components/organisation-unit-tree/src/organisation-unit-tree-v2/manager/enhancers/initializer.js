export const initializer = (manager) => {
    async function init({
        disabledIds = [],
        filteredString = '',
        onChange = () => {},
        openedPaths = [],
        rootIds = [],
        selectedIds = [],
        singleSelection = false,
        filteredPaths = [],
    }) {
        manager.setOnChange(onChange)
        manager.setRootIds(rootIds)
        manager.setDisabledIds(disabledIds)
        manager.setSingleSelection(singleSelection)

        try {
            await manager.loadDeduplicatedRootNodesWithOfflineLevels()
            /* Ensure all opened and filtered units are fetched,
             * because they need to be displayed */
            await manager.setOpenedPaths(openedPaths)
            await manager.setFilterProperties(filteredPaths, filteredString)
            /* Ensure all selected units are fetched because some
             * of the visible nodes may be need to show a indetermined
             * checkbox state if they have selected descendants. To
             * determine this we need to inspect the `path` field of the
             * selected item */
            await manager.setSelectedIds(selectedIds)
            manager.setError(null)
            manager.setIsReady(true)
        } catch (error) {
            console.error(error)
            manager.setError(error)
        } finally {
            manager.setIsLoading(false)
            manager.setIsFetching(false)
            manager.refreshTree()
            manager.notifyOnReadySubscribers()
        }
    }

    return {
        init,
    }
}
