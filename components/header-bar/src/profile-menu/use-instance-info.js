import { useDataQuery } from '@dhis2/app-runtime'

const QUERY_INSTANCE_INFO = {
    systemInfo: {
        resource: 'system/info',
        params: {
            fields: ['version', 'revision'],
        },
    },
}

export const useInstanceInfo = () => useDataQuery(QUERY_INSTANCE_INFO)
