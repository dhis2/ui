import { NoticeBox } from '@dhis2-ui/notice-box'
import React from 'react'
import { getVisualizationsCount, getResultMessage } from './helpers.ts'

interface DashboardItem {
    type: string
}

export interface ResultInfoProps {
    hasErrors: boolean
    updatedItems: number
    dashboardItems: DashboardItem[]
    itemsCount: number
}

export const ResultInfo = ({
    hasErrors,
    updatedItems,
    dashboardItems,
    itemsCount,
}: ResultInfoProps) => {
    const visualizationsCount = getVisualizationsCount(dashboardItems)

    if (!visualizationsCount) {
        return null
    }

    const message = getResultMessage({
        visualizationsCount,
        itemsCount,
        hasErrors,
        updatedItems,
    })

    return <NoticeBox>{message}</NoticeBox>
}
