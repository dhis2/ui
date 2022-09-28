import { EnhancedPrimitiveSet } from '../helpers/index.js'

export const disabledManager = (manager) => {
    const disabledIds = new EnhancedPrimitiveSet()

    function getDisabledIds() {
        return disabledIds
    }

    function isNodeDisabled(id) {
        return disabledIds.has(id)
    }

    function setDisabledIds(newDisabledIds = []) {
        if (disabledIds.hasEqualValues(newDisabledIds)) {
            return
        }

        if (manager.getIsReady()) {
            const { changes } = disabledIds.diff(newDisabledIds)
            disabledIds.reset(newDisabledIds)

            for (const id of changes) {
                const node = manager.getOrganisationUnitNodeById(id)
                if (node?.isVisible()) {
                    node.refreshLabel()
                }
            }
        } else {
            disabledIds.reset(newDisabledIds)
        }
    }

    return {
        getDisabledIds,
        isNodeDisabled,
        setDisabledIds,
    }
}
