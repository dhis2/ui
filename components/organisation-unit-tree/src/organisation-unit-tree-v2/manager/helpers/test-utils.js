import * as fixtures from '../__fixtures__/index.js'

export const pluckDisplayName = (node) => node.getDisplayName()

export const mockDataEngineForRootIds = (rootIds) => {
    const query = (obj) => {
        let response
        if (
            obj?.filledOrganisationUnitLevels?.resource ===
            '/filledOrganisationUnitLevels'
        ) {
            response = fixtures.filledOrganisationUnitLevels
        } else if (
            obj?.offlineOrganisationUnitLevel?.resource ===
            'configuration/offlineOrganisationUnitLevel'
        ) {
            response = fixtures.offlineOrganisationUnitLevel
        } else if (obj?.response?.resource === '/organisationUnits') {
            response = {
                response: {
                    // Only return root nodes with matching IDs
                    organisationUnits: fixtures.rootOrganisationUnits.filter(
                        ({ id }) => rootIds.includes(id)
                    ),
                },
            }
        } else if (obj?.response?.resource?.startsWith('/organisationUnits/')) {
            // Offline units are requested per root node
            const regEx = /\/organisationUnits\/(.*)/
            const rootId = regEx.exec(obj.response.resource)[1]
            response = fixtures.prefetchedOrganisationUnits[rootId]
        }

        return Promise.resolve(response)
    }

    return { query }
}
