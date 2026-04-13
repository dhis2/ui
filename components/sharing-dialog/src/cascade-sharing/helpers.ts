import i18n from '../locales/index.js'

interface DashboardItem {
    type: string
}

export const getVisualizationsCount = (
    dashboardItems: DashboardItem[]
): number => {
    if (dashboardItems.length === 0) {
        return dashboardItems.length
    }

    // Only these types will be updated
    const keep = ['VISUALIZATION', 'MAP', 'EVENT_CHART', 'EVENT_REPORT']

    // Filter the dashboardItems by the above types and count them only
    return dashboardItems.filter((item) => keep.includes(item.type)).length
}

export const getResultMessage = ({
    itemsCount,
    visualizationsCount,
    hasErrors,
    updatedItems,
}: {
    itemsCount: number
    visualizationsCount: number
    hasErrors: boolean
    updatedItems: number
}): string => {
    if (hasErrors) {
        if (updatedItems === 0) {
            return i18n.t(
                'No visualizations were updated. Check that you have permission to change sharing for all visualizations.'
            )
        }

        if (updatedItems && itemsCount) {
            return i18n.t(
                'Not all visualizations could be updated successfully. {{ success }} updated successfully, {{ failed }} failed to update. Check that you have permission to change sharing for all visualizations.',
                {
                    success: updatedItems,
                    failed: visualizationsCount - updatedItems,
                }
            )
        }
    }

    if (updatedItems === 0) {
        return i18n.t(
            'No visualizations were updated because sharing settings are already sufficient.'
        )
    }

    if (updatedItems === visualizationsCount) {
        return i18n.t('Successfully updated sharing for all visualizations.')
    }

    if (updatedItems < visualizationsCount) {
        return i18n.t(
            'Not all visualization sharing settings needed to be updated. {{ updated }} updated, {{ skipped }} already had sufficient sharing settings.',
            {
                updated: updatedItems,
                skipped: visualizationsCount - updatedItems,
            }
        )
    }

    return ''
}

export const getInfoMessage = ({
    entityAmount,
    visualizationsCount,
}: {
    entityAmount: number
    visualizationsCount: number
}): string => {
    if (entityAmount === 0) {
        return i18n.t(
            'There are no users or groups to apply sharing settings for.'
        )
    }

    return i18n.t(
        'Number of visualizations on this dashboard that will potentially get updated sharing settings: {{ visualizationsCount }}. The number of users or groups that these updated settings will apply to: {{ entityAmount }}.',
        {
            visualizationsCount,
            entityAmount,
            nsSeparator: '>',
        }
    )
}
