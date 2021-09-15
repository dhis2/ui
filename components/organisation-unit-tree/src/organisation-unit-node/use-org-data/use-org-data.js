import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo, useEffect } from 'react'
import { sortNodeChildrenAlphabetically } from '../../helpers/index.js'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        id: ({ id }) => id,
        params: ({ isUserDataViewFallback }) => ({
            isUserDataViewFallback,
            fields: ['id', 'path', 'children[id,path,displayName]'],
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

    const defaultData = { id, displayName }
    const variables = { id, isUserDataViewFallback }
    const { loading, error, data } = useDataQuery(ORG_DATA_QUERY, {
        variables,
    })

    const transformedData = useMemo(() => {
        if (!data) {
            return defaultData
        }

        const { orgUnit: node } = data
        const transformed = suppressAlphabeticalSorting
            ? node
            : sortNodeChildrenAlphabetically(node)
        const merged = { ...defaultData, ...transformed }

        return merged
    }, [data, suppressAlphabeticalSorting, id, displayName])

    useEffect(() => {
        onComplete && onComplete(transformedData)
    }, [onComplete, transformedData])

    return { loading, error: error || null, data: transformedData }
}
