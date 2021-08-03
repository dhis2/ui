import { useDataQuery } from '@dhis2/app-runtime'
import { useState } from 'react'
import { sortNodeChildrenAlphabetically } from '../../helpers/index.js'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        id: ({ id }) => id,
        params: ({ isUserDataViewFallback }) => ({
            isUserDataViewFallback,
            fields: ['id', 'path', 'children[id,path,displayName]'],
            paging: false,
        }),
    },
}

/**
 * @param {string[]} ids
 * @param {Object} options
 * @param {string} options.displayName
 * @param {boolean} [options.withChildren]
 * @returns {Object}
 */
export const useOrgData = (
    id,
    {
        isUserDataViewFallback,
        suppressAlphabeticalSorting,
        onComplete,
        displayName,
        additionalQueryResources,
    }
) => {
    if (!displayName) {
        throw new Error('"displayName" is required')
    }

    const defaultData = { id, displayName }
    const variables = { id, isUserDataViewFallback }
    const [state, _setState] = useState({
        loading: true,
        error: null,
        data: { orgUnit: defaultData },
    })
    const setState = v => console.log('setState', v) || _setState(v)

    const query = {
        ...(additionalQueryResources || {}),
        ...ORG_DATA_QUERY,
    }
    console.log('query', query)
    useDataQuery(query, {
        variables,
        onComplete: ({ orgUnit: node, ...rest }) => {
            const sorted = !suppressAlphabeticalSorting
                ? sortNodeChildrenAlphabetically(node)
                : node

            const nextData = { ...defaultData, ...sorted }
            setState({
                ...state,
                data: {
                    ...rest,
                    orgUnit: nextData,
                },
                loading: false,
            })
            onComplete && onComplete(nextData)
        },
        onError: queryError => {
            setState({
                ...state,
                error: queryError,
                loading: false,
            })
        },
    })

    return state
}
