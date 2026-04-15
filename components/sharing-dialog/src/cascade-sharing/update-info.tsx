import { useDataQuery } from '@dhis2/app-runtime'
import { NoticeBox } from '@dhis2-ui/notice-box'
import React from 'react'
import { getVisualizationsCount, getInfoMessage } from './helpers.ts'

const query = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }: Record<string, string>) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

export interface UpdateInfoProps {
    id: string
    entityAmount: number
}

export const UpdateInfo = ({ id, entityAmount }: UpdateInfoProps) => {
    const { data, loading } = useDataQuery(query, {
        variables: { id },
    })

    if (loading) {
        return null
    }

    const { dashboard } = data as {
        dashboard: { dashboardItems: Array<{ type: string }> }
    }
    const visualizationsCount = getVisualizationsCount(dashboard.dashboardItems)

    if (!visualizationsCount) {
        return null
    }

    const message = getInfoMessage({ visualizationsCount, entityAmount })

    return <NoticeBox>{message}</NoticeBox>
}
