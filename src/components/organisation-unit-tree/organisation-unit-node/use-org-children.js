import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo, useEffect, useRef } from 'react'
import { sortNodeChildrenAlphabetically } from '../helpers/index.js'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        id: ({ id }) => id,
        params: {
            fields: 'children[id,path,displayName]',
        },
    },
}

/**
 * @param {string[]} ids
 * @param {Object} options
 * @param {string} options.displayName
 * @param {boolean} [options.withChildren]
 * @returns {Object}
 */
export const useOrgChildren = ({
    node,
    suppressAlphabeticalSorting,
    onComplete,
}) => {
    const onCompleteCalledRef = useRef(false)
    const { called, loading, error, data } = useDataQuery(ORG_DATA_QUERY, {
        variables: { id: node.id },
    })

    const orgChildren = useMemo(() => {
        if (!data) {
            return undefined
        }

        // undefined or zero
        if (!node.children) {
            return []
        }

        const { orgUnit } = data

        return suppressAlphabeticalSorting
            ? orgUnit.children
            : sortNodeChildrenAlphabetically(orgUnit.children)
    }, [data, suppressAlphabeticalSorting])

    useEffect(() => {
        if (onComplete && orgChildren && !onCompleteCalledRef.current) {
            // For backwards compatibility: Pass entire node incl. children
            onComplete({ ...node, children: orgChildren })
            onCompleteCalledRef.current = true
        }
    }, [onComplete, orgChildren, onCompleteCalledRef])

    return { called, loading, error: error || null, data: orgChildren }
}
