import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import { patchMissingDisplayName } from './patch-missing-display-name.ts'

type QueryVariable = string | string[] | boolean | undefined

export const createRootQuery = (
    ids: string[],
    displayProperty: 'displayName' | 'displayShortName' = 'displayName'
) =>
    ids.reduce<
        Record<
            string,
            {
                id: string
                resource: string
                params: (
                    vars: Record<string, QueryVariable>
                ) => Record<string, QueryVariable>
            }
        >
    >(
        (query, id) => ({
            ...query,
            [id]: {
                id,
                resource: `organisationUnits`,
                params: (variables: Record<string, QueryVariable>) => ({
                    isUserDataViewFallback: variables.isUserDataViewFallback,
                    fields: [
                        displayProperty === 'displayName'
                            ? 'displayName'
                            : `${displayProperty}~rename(displayName)`,
                        'path',
                        'id',
                    ],
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
    {
        isUserDataViewFallback,
        displayProperty = 'displayName',
    }: {
        isUserDataViewFallback?: boolean
        displayProperty?: 'displayName' | 'displayShortName'
    } = {}
): UseRootOrgDataReturn => {
    const query = useMemo(
        () => createRootQuery(ids, displayProperty),
        [ids, displayProperty]
    )
    const variables = { isUserDataViewFallback }
    const rootOrgUnits = useDataQuery(query, {
        variables,
    })
    const { called, loading, error, data, refetch } = rootOrgUnits

    const patchedData = useMemo(() => {
        return data
            ? patchMissingDisplayName(
                  data as unknown as Record<string, { displayName?: string }>
              )
            : data
    }, [data])

    return {
        called,
        loading,
        error: error || null,
        data: (patchedData as unknown as Record<string, RootOrgData>) || null,
        refetch,
    }
}
