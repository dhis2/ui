import { useDataEngine } from '@dhis2/app-runtime'

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

    return ({ ids, variables }) => {
        const query = createRootQuery(ids)
        return engine.query(query, { variables })
    }
}
