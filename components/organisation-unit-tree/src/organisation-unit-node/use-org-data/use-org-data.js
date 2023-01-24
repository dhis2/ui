import { useDataQuery } from '@dhis2/app-runtime'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        id: ({ id }) => id,
        params: ({ isUserDataViewFallback }) => ({
            isUserDataViewFallback,
            fields: ['path', 'children::size'],
        }),
    },
}

/**
 * @param {string[]} ids
 * @param {Object} options
 * @param {string} options.displayName
 * @param {bool} options.isUserDataViewFallback
 * @returns {Object}
 */
export const useOrgData = (id, { displayName, isUserDataViewFallback }) => {
    if (!displayName) {
        throw new Error('"displayName" is required')
    }

    const variables = { id, isUserDataViewFallback }
    const {
        loading,
        error,
        data = {},
    } = useDataQuery(ORG_DATA_QUERY, {
        variables,
    })

    return {
        loading,
        error: error || null,
        data: { id, displayName, ...data.orgUnit },
    }
}
