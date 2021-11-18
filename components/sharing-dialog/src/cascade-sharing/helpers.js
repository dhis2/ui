import i18n from '../locales/index.js'

export const getVisualizationsCount = (dashboardItems) => {
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
}) => {
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

export const getInfoMessage = ({ entityAmount, visualizationsCount }) => {
    if (entityAmount === 0) {
        return i18n.t(
            'There are no users or groups to apply sharing settings for.'
        )
    }

    return i18n.t(
        'Amount of visualizations on this dashboard that will potentially get updated sharing settings: {{ visualizationsCount }}. The amount of users or groups that these updated settings will apply to: {{ entityAmount }}.',
        {
            visualizationsCount,
            entityAmount,
        }
    )
}
