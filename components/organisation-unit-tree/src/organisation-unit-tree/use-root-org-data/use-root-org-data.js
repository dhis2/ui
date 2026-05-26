import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import { patchMissingDisplayName } from './patch-missing-display-name.js'

export const createRootQuery = (ids, displayProperty) =>
    ids.reduce(
        (query, id) => ({
            ...query,
            [id]: {
                id,
                resource: `organisationUnits`,
                params: ({ isUserDataViewFallback }) => ({
                    isUserDataViewFallback,
                    fields: [
                        displayProperty === 'displayName'
                            ? 'displayName'
                            : `${displayProperty}~rename(displayName)`,
                        'path',
                        'id',
                    ],
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
 * @param {'displayName'|'displayShortName'} [options.displayProperty]
 * @returns {Object}
 */
export const useRootOrgData = (
    ids,
    { isUserDataViewFallback, displayProperty = 'displayName' } = {}
) => {
    const query = useMemo(
        () => createRootQuery(ids, displayProperty),
        [ids, displayProperty]
    )
    const variables = { isUserDataViewFallback }
    const rootOrgUnits = useDataQuery(query, {
        variables,
    })
    const { called, loading, error, data, refetch } = rootOrgUnits

    const patchedData = useMemo(() => {
        return data ? patchMissingDisplayName(data) : data
    }, [data])

    return {
        called,
        loading,
        error: error || null,
        data: patchedData || null,
        refetch,
    }
}
