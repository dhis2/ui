import { useDataQuery } from '@dhis2/app-runtime'
import { useState } from 'react'
import { sortNodeChildrenAlphabetically } from '../helpers/index.js'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        id: ({ id }) => id,
        params: ({ isUserDataViewFallback }) => ({
            isUserDataViewFallback,
            fields: ['id', 'path', 'children[id,path,displayName]'],
            paging: false,
        }),
    }
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
    { isUserDataViewFallback, displayName } = {}
) => {
    const defaultData = { displayName }
    const variables = { id, isUserDataViewFallback }
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(defaultData)

    useDataQuery(ORG_DATA_QUERY, {
        variables,
        onComplete: ({ orgUnit: node }) => {
            const sorted = sortNodeChildrenAlphabetically(node)
            setData({ ...defaultData, ...sorted })
            setLoading(false)
        },
        onError: queryError => {
            setError(queryError)
            setLoading(false)
        },
    })

    return { loading, error, data }
}
