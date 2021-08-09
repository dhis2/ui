import { useDataQuery } from '@dhis2/app-runtime'

const query = {
    organisationUnits: {
        resource: 'organisationUnits',
        params: ({ ids, isUserDataViewFallback }) => ({
            isUserDataViewFallback,
            fields: ['displayName', 'path', 'id'],
            filter: `id:in:[${ids.join()}]`,
        }),
    },
}

/**
 * @param {string[]} ids
 * @param {Object} [options]
 * @param {boolean} [options.isUserDataViewFallback]
 * @returns {Object}
 */
export const useRootOrgData = (ids, { isUserDataViewFallback } = {}) => {
    const { loading, error, data, refetch } = useDataQuery(query, {
        variables: {
            ids,
            isUserDataViewFallback,
        },
    })

    return {
        loading,
        error,
        data: data?.organisationUnits.organisationUnits.reduce(
            (acc, orgUnit) => {
                acc[orgUnit.id] = {
                    ...orgUnit,
                    displayName: orgUnit.displayName || '',
                }
                return acc
            },
            {}
        ),
        refetch,
    }
}
