import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo, useEffect, useRef } from 'react'
import { sortNodeChildrenAlphabetically } from '../helpers/index.ts'
import type { OrgUnitChild } from '../helpers/index.ts'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: (variables: Record<string, any>) => variables.id as string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params: (variables: Record<string, any>) => ({
            fields:
                variables.displayProperty === 'displayName'
                    ? 'children[id,path,displayName]'
                    : `children[id,path,${variables.displayProperty}~rename(displayName)]`,
        }),
    },
}

interface OrgChildrenNode {
    id: string
    path: string
    displayName: string
    children?: number | OrgUnitChild[]
}

interface UseOrgChildrenArgs {
    node: OrgChildrenNode
    isUserDataViewFallback?: boolean
    displayProperty?: 'displayName' | 'displayShortName'
    suppressAlphabeticalSorting?: boolean
    onComplete?: (node: OrgChildrenNode & { children: OrgUnitChild[] }) => void
}

interface UseOrgChildrenReturn {
    called: boolean
    loading: boolean
    error: Error | null
    data: OrgUnitChild[] | undefined
}

export const useOrgChildren = ({
    node,
    suppressAlphabeticalSorting,
    onComplete,
    displayProperty = 'displayName',
}: UseOrgChildrenArgs): UseOrgChildrenReturn => {
    const onCompleteCalledRef = useRef(false)
    const { called, loading, error, data } = useDataQuery(ORG_DATA_QUERY, {
        variables: { id: node.id, displayProperty },
    })

    const orgChildren = useMemo(() => {
        if (!data) {
            return undefined
        }

        // undefined or zero
        if (!node.children) {
            return []
        }

        const { orgUnit } = data as unknown as {
            orgUnit: { children: OrgUnitChild[] }
        }

        return suppressAlphabeticalSorting
            ? orgUnit.children
            : sortNodeChildrenAlphabetically(orgUnit.children)
    }, [data, node.children, suppressAlphabeticalSorting])

    useEffect(() => {
        if (onComplete && orgChildren && !onCompleteCalledRef.current) {
            // For backwards compatibility: Pass entire node incl. children
            onComplete({ ...node, children: orgChildren })
            onCompleteCalledRef.current = true
        }
    }, [node, onComplete, orgChildren, onCompleteCalledRef])

    return { called, loading, error: error || null, data: orgChildren }
}
