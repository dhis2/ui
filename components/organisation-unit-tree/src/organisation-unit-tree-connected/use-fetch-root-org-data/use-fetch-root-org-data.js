import { useDataEngine } from '@dhis2/app-runtime'
import { useCallback, useState } from 'react'

export const createRootQuery = ids =>
    ids.reduce(
        (query, id) => ({
            ...query,
            [id]: {
                id,
                resource: `organisationUnits`,
                params: ({ isUserDataViewFallback }) => ({
                    isUserDataViewFallback,
                    fields: ['displayName', 'path', 'id'],
                }),
            },
        }),
        {}
    )

/**
 * @param {string[]} ids
 * @param {Object} [options]
 * @param {boolean} [options.withChildren]
 * @param {boolean} [options.isUserDataViewFallback]
 * @returns {Object}
 */
export const useFetchRootOrgData = () => {
    const engine = useDataEngine()
    const [persistedEngine] = useState(engine)

    return useCallback(
        ({ ids, variables, signal }) => {
            const query = createRootQuery(ids)
            return persistedEngine.query(query, { variables, signal })
        },
        [persistedEngine]
    )
}
