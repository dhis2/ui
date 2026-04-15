import i18n from './locales/index.js'

const isValidNumber = (input: unknown): input is number =>
    typeof input === 'number' && !isNaN(input)

export interface PageSummaryTextOptions {
    firstItem?: number
    lastItem?: number
    page: number
    pageCount?: number
    total?: number
}

export const getDefaultPageSummaryText = ({
    firstItem,
    lastItem,
    page,
    pageCount,
    total,
}: PageSummaryTextOptions): string => {
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
