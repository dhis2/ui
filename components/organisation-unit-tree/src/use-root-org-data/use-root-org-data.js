import { useDataQuery } from '@dhis2/app-runtime'
import { useState } from 'react'
import { sortNodeChildrenAlphabetically } from '../helpers/index.js'
import { patchMissingDisplayName } from './patch-missing-display-name.js'

export const createRootQuery = ids =>
    ids.reduce(
        (query, id) => ({
            ...query,
            [id]: ({
                id,
                resource: `organisationUnits`,
                params: ({ isUserDataViewFallback }) => ({
                    isUserDataViewFallback,
                    fields: ['displayName', 'path', 'id'],
                    paging: false,
                }),
            }),
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
export const useRootOrgData = (
    ids,
    {
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
    } = {}
) => {
    const query = createRootQuery(ids)
    const variables = { isUserDataViewFallback }
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const { refetch: queryRefetch } = useDataQuery(query, {
        variables,
        onComplete: queryData => {
            let nextData = queryData ? patchMissingDisplayName(queryData) : {}

            if (!suppressAlphabeticalSorting) {
                nextData = Object.values(nextData)
                    .map(sortNodeChildrenAlphabetically)
                    .reduce(
                        (current, node) => ({
                            ...current,
                            [node.id]: node,
                        }),
                        {}
                    )
            }

            setData(nextData)
            setLoading(false)
        },
        onError: queryError => {
            setError(queryError)
            setLoading(false)
        },
    })

    const refetch = (...args) => {
        setLoading(true)
        setError(null)
        setData(null)
        queryRefetch(...args)
    }

    return {
        loading,
        error,
        data,
        refetch,
    }
}
