import { EnhancedPrimitiveSet } from '../helpers/index.js'

export const disabledManager = (manager) => {
    const state = {
        disabledIds: new EnhancedPrimitiveSet(),
    }

    function getDisabledIds() {
        return state.disabledIds
    }

    function isNodeDisabled(id) {
        return state.disabledIds.has(id)
    }

    function setDisabledIds(newDisabledIds = []) {
        if (state.disabledIds.hasEqualValues(newDisabledIds)) {
            return
        }

        if (manager.getIsReady()) {
            const { changes } = state.disabledIds.diff(newDisabledIds)
            state.disabledIds.reset(newDisabledIds)

            for (const id of changes) {
                const node = manager.getOrganisationUnitNodeById(id)
                if (node?.isVisible()) {
                    node.refreshLabel()
                }
            }
        } else {
            state.disabledIds.reset(newDisabledIds)
        }
    }

    return {
        getDisabledIds,
        isNodeDisabled,
        setDisabledIds,
    }
}
