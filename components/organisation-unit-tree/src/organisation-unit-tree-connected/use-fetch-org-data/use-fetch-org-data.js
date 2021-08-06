import { useDataEngine } from '@dhis2/app-runtime'
import { useCallback, useState } from 'react'

const ORG_DATA_QUERY = {
    organisationUnit: {
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
export const useFetchOrgData = () => {
    const engine = useDataEngine()
    const [persistedEngine] = useState(engine)

    const fetchOrgData = useCallback(
        ({ variables, signal }) => persistedEngine.query(ORG_DATA_QUERY, { variables, signal }),
        [persistedEngine]
    )

    return fetchOrgData
}
