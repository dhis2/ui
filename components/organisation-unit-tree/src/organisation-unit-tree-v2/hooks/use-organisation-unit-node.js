import { useOrganisationUnitTreeManager } from './use-organisation-unit-tree-manager.js'

export const useOrganisationUnitNode = (id) => {
    const manager = useOrganisationUnitTreeManager()

    return manager.getOrganisationUnitNodeById(id)
}
