import { useDataQuery } from '@dhis2/app-runtime'

import { addMissingDisplayNameProps, createQuery } from './useOrgData/helpers'

/**
 * @param {string[]} ids
 * @param {Object} [options]
 * @param {boolean} [options.withChildren]
 * @param {boolean} [options.isUserDataViewFallback]
 * @returns {Object}
 */
export const useOrgData = (
    ids,
    { withChildren = true, isUserDataViewFallback } = {}
) => {
    const query = createQuery(ids)
    const variables = { withChildren, isUserDataViewFallback }
    const { loading, error, data, refetch } = useDataQuery(query, { variables })
    const nodes = data ? addMissingDisplayNameProps(data) : {}

    return { loading, error, data: nodes, refetch }
}
