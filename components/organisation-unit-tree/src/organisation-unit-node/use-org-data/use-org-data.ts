import { useDataQuery } from '@dhis2/app-runtime'

const ORG_DATA_QUERY = {
    orgUnit: {
        resource: `organisationUnits`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: (variables: Record<string, any>) => variables.id as string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params: (variables: Record<string, any>) => ({
            isUserDataViewFallback: variables.isUserDataViewFallback,
            fields: ['path', 'children::size'],
        }),
    },
}

interface UseOrgDataOptions {
    displayName: string
    isUserDataViewFallback?: boolean
}

interface OrgDataResult {
    loading: boolean
    error: Error | null
    data: { id: string; displayName: string; path?: string; children?: number }
}

export const useOrgData = (
    id: string,
    { displayName, isUserDataViewFallback }: UseOrgDataOptions
): OrgDataResult => {
    if (!displayName) {
        throw new Error('"displayName" is required')
    }

    const variables = { id, isUserDataViewFallback }
    const {
        loading,
        error,
        data = {},
    } = useDataQuery(ORG_DATA_QUERY, {
        variables,
    })

    return {
        loading,
        error: error || null,
        data: {
            id,
            displayName,
            ...(data as Record<string, Record<string, unknown>>).orgUnit,
        },
    }
}
