import { useDataQuery } from '@dhis2/app-runtime'
import { useCallback, useState } from 'react'
import { sortNodeChildrenAlphabetically } from '../../helpers/index.js'
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

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    })

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

            // the order is important as otherwise
            // a re-render happens with loading: false and data: null
            setState({
                ...state,
                data: nextData,
                loading: false
            })
        },
        onError: queryError => {
            setState({
                ...state,
                error: queryError,
                loading: false
            })
        },
    })

    const refetch = useCallback(() => {
        setState({ ...state, data: null, error: null, loading: true })
        queryRefetch()
    }, [queryRefetch, setState])

    return {
        loading: state.loading,
        error: state.error,
        data: state.data,
        refetch,
    }
}
