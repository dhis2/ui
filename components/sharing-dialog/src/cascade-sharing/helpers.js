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
            const successAmount = i18n.t(
                '{{count}} visualization was updated',
                {
                    count: updatedItems,
                    defaultValue: '{{count}} visualization was updated',
                    defaultValue_plural:
                        '{{count}} visualizations were updated.',
                }
            )

            const failAmount = i18n.t(
                '{{count}} visualization could not be updated.',
                {
                    count: visualizationsCount - updatedItems,
                    defaultValue:
                        '{{count}} visualization could not be updated.',
                    defaultValue_plural:
                        '{{count}} visualizations could not be updated.',
                }
            )

            const checkPermissions = i18n.t(
                'Check that you have permission to change sharing for all visualizations.'
            )

            /**
             * It's likely this will not be the correct order for certain languages. Our
             * translators will also not know that their translations are being concatenated
             * whilst translating. The i18next.com examples for nesting counts does not seem
             * to work for our i18n helper. We'll need to resolve this for proper translations.
             */
            return `${successAmount} ${failAmount} ${checkPermissions}`
        }
    }

    if (updatedItems === 0) {
        return i18n.t(
            'No visualizations were updated because sharing settings are already sufficient.'
        )
    }

    if (updatedItems === visualizationsCount) {
        return i18n.t(
            'Successfully updated sharing for {{count}} visualization.',
            {
                count: visualizationsCount,
                defaultValue:
                    'Successfully updated sharing for {{count}} visualization.',
                defaultValue_plural:
                    'Successfully updated sharing for {{count}} visualizations.',
            }
        )
    }

    if (updatedItems < visualizationsCount) {
        const successAmount = i18n.t('{{count}} visualization was updated.', {
            count: updatedItems,
            defaultValue: '{{count}} visualization was updated.',
            defaultValue_plural: '{{count}} visualizations were updated.',
        })

        const sufficientAmount = i18n.t(
            '{{count}} visualization already has sufficient sharing settings.',
            {
                count: visualizationsCount - updatedItems,
                defaultValue:
                    '{{count}} visualization already has sufficient sharing settings.',
                defaultValue_plural:
                    '{{count}} visualizations already have sufficient sharing settings.',
            }
        )

        return `${successAmount} ${sufficientAmount}`
    }
}
