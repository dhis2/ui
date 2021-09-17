import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import { patchMissingDisplayName } from './patch-missing-display-name.js'

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
                    paging: false,
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
export const useRootOrgData = (ids, { isUserDataViewFallback } = {}) => {
    const query = createRootQuery(ids)
    const variables = { isUserDataViewFallback }
    const { loading, error, data, refetch } = useDataQuery(query, {
        variables,
    })

    const patchedData = useMemo(() => {
        return data ? patchMissingDisplayName(data) : data
    }, [data])

    return {
        loading,
        error: error || null,
        data: patchedData || null,
        refetch,
    }
}
