import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import { patchMissingDisplayName } from './patch-missing-display-name.ts'

export const createRootQuery = (ids: string[]) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ids.reduce<Record<string, { id: string; resource: string; params: (vars: Record<string, any>) => Record<string, string | string[] | boolean | undefined> }>>(
        (query, id) => ({
            ...query,
            [id]: {
                id,
                resource: `organisationUnits`,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                params: (variables: Record<string, any>) => ({
                    isUserDataViewFallback: variables.isUserDataViewFallback,
                    fields: ['displayName', 'path', 'id'],
                }),
            },
        }),
        {}
    )

interface RootOrgData {
    id: string
    displayName: string
    path: string
}

interface UseRootOrgDataReturn {
    called: boolean
    loading: boolean
    error: Error | null
    data: Record<string, RootOrgData> | null
    refetch: (() => void) | undefined
}

export const useRootOrgData = (
    ids: string[],
    { isUserDataViewFallback }: { isUserDataViewFallback?: boolean } = {}
): UseRootOrgDataReturn => {
    const query = useMemo(() => createRootQuery(ids), [ids])
    const variables = { isUserDataViewFallback }
    const rootOrgUnits = useDataQuery(query, {
        variables,
    })
    const { called, loading, error, data, refetch } = rootOrgUnits

    const patchedData = useMemo(() => {
        return data ? patchMissingDisplayName(data as unknown as Record<string, { displayName?: string }>) : data
    }, [data])

    return {
        called,
        loading,
        error: error || null,
        data: (patchedData as unknown as Record<string, RootOrgData>) || null,
        refetch,
    }
}
