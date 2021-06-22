import { useDataQuery } from '@dhis2/app-runtime'
import {
    addMissingDisplayNameProps,
    createQuery,
    sortNodeChildrenAlphabetically,
} from './use-org-data/helpers.js'

/**
 * @param {string[]} ids
 * @param {Object} [options]
 * @param {boolean} [options.withChildren]
 * @param {boolean} [options.isUserDataViewFallback]
 * @returns {Object}
 */
export const useOrgData = (
    ids,
    {
        withChildren = true,
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
    } = {}
) => {
    const query = createQuery(ids)
    const variables = { withChildren, isUserDataViewFallback }
    const { loading, error, data, refetch } = useDataQuery(query, { variables })
    const nodes = data ? addMissingDisplayNameProps(data) : {}

    let sorted = nodes
    if (!suppressAlphabeticalSorting) {
        sorted = Object.values(nodes)
            .map(sortNodeChildrenAlphabetically)
            .reduce(
                (current, node) => ({
                    ...current,
                    [node.id]: node,
                }),
                {}
            )
    }

    return { loading, error, data: sorted, refetch }
}
