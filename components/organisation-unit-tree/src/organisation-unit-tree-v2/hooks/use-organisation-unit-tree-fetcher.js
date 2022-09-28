import { useState, useEffect } from 'react'
import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitTreeFetcher = () => {
    const manager = useOrganisationUnitTreeManager()
    const [loadingState, setLoadingState] = useState(manager.getLoadingState())

    useEffect(
        () =>
            manager.onFetchStateChange((loadingState) => {
                setLoadingState(loadingState)
            }),
        [manager]
    )

    return {
        ...loadingState,
        isFetchingChildren: manager.isFetchingChildren(),
        hasChildrenWithErrors: manager.hasChildrenWithErrors(),
    }
}
