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
    }
) => {
    if (!displayName) {
        throw new Error('"displayName" is required')
    }

    const defaultData = { displayName }
    const variables = { id, isUserDataViewFallback }
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: defaultData,
    })

    useDataQuery(ORG_DATA_QUERY, {
        variables,
        onComplete: ({ orgUnit: node }) => {
            const sorted = !suppressAlphabeticalSorting
                ? sortNodeChildrenAlphabetically(node)
                : node

            const nextData = { ...defaultData, ...sorted }
            setState({
                ...state,
                data: nextData,
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
