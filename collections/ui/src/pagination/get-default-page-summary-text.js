import i18n from './locales/index.js'

const isValidNumber = (input) => typeof input === 'number' && !isNaN(input)

export const getDefaultPageSummaryText = ({
    firstItem,
    lastItem,
    page,
    pageCount,
    total,
}) => {
    if (isValidNumber(total) && isValidNumber(lastItem)) {
        return i18n.t(
            'Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}',
            {
                page,
                pageCount,
                firstItem,
                lastItem,
                total,
            }
        )
    }

    if (isValidNumber(lastItem)) {
        return i18n.t('Page {{page}}, items {{firstItem}}-{{lastItem}}', {
            page,
            firstItem,
            lastItem,
        })
    }

    return i18n.t('Page {{page}}', { page })
}
