import { useConfig, useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'

const QUERY_INSTANCE_INFO = {
    systemInfo: {
        resource: 'system/info',
        params: {
            fields: ['version', 'revision']
        }
    }
}

export const useInstanceInfo = () => {
    const config = useConfig()
    const result = useDataQuery(QUERY_INSTANCE_INFO)
    const data = useMemo(() => {
        if (!result.data) {
            return result.data
        }

        const { systemInfo } = result.data
        return { ...systemInfo, ...config }
    }, [result.data])

    return { ...result, data }
}
