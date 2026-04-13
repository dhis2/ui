import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import { getDefaultPageSummaryText } from './get-default-page-summary-text.ts'
import { getItemRange } from './get-item-range.ts'
import i18n from './locales/index.js'
import { PageControls } from './page-controls.tsx'
import { PageSelect } from './page-select.tsx'
import { PageSizeSelect } from './page-size-select.tsx'
import { PageSummary } from './page-summary.tsx'

const MAX_PAGE_COUNT = 2000

const defaultProps = {
    dataTest: 'dhis2-uiwidgets-pagination',
    nextPageText: () => i18n.t('Next'),
    pageSelectText: () => i18n.t('Page'),
    pageSizes: ['5', '10', '20', '30', '40', '50', '75', '100'],
    pageSizeSelectText: () => i18n.t('Items per page'),
    pageSummaryText: getDefaultPageSummaryText,
    previousPageText: () => i18n.t('Previous'),
}

type TextProp = string | ((interpolationObject?: Record<string, unknown>) => string)
type SummaryTextProp = string | ((...args: never[]) => string)

export interface PaginationProps {
    page: number
    pageSize: number
    className?: string
    dataTest?: string
    disabled?: boolean
    hidePageSelect?: boolean
    hidePageSizeSelect?: boolean
    hidePageSummary?: boolean
    isLastPage?: boolean
    nextPageText?: TextProp
    pageCount?: number
    pageLength?: number
    pageSelectText?: TextProp
    pageSizeSelectText?: TextProp
    pageSizes?: string[]
    pageSummaryText?: SummaryTextProp
    previousPageText?: TextProp
    total?: number
    onPageChange?: (page: number) => void
    onPageSizeChange?: (pageSize: number) => void
}

const Pagination = ({
    className,
    dataTest = defaultProps.dataTest,
    disabled,
    hidePageSelect,
    hidePageSizeSelect,
    hidePageSummary,
    isLastPage,
    nextPageText = defaultProps.nextPageText,
    onPageChange = () => {},
    onPageSizeChange = () => {},
    page,
    pageCount,
    pageLength,
    pageSelectText = defaultProps.pageSelectText,
    pageSize,
    pageSizes = defaultProps.pageSizes,
    pageSizeSelectText = defaultProps.pageSizeSelectText,
    pageSummaryText = defaultProps.pageSummaryText,
    previousPageText = defaultProps.previousPageText,
    total,
}: PaginationProps) => {
    const { firstItem, lastItem } = getItemRange({
        isLastPage,
        page,
        pageLength,
        pageSize,
        total,
    })
    const showPageSelect =
        !hidePageSelect &&
        typeof pageCount === 'number' &&
        pageCount > 1 &&
        pageCount <= MAX_PAGE_COUNT

    return (
        <div className={cx('container', className)} data-test={dataTest}>
            {hidePageSizeSelect ? (
                <div className="spacer" />
            ) : (
                <PageSizeSelect
                    dataTest={dataTest}
                    disabled={disabled}
                    pageSize={pageSize}
                    pageSizes={pageSizes}
                    onChange={onPageSizeChange}
                    pageSizeSelectText={pageSizeSelectText}
                />
            )}
            {!hidePageSummary && (
                <PageSummary
                    dataTest={dataTest}
                    inactive={disabled}
                    firstItem={firstItem}
                    lastItem={lastItem}
                    page={page}
                    pageCount={pageCount}
                    pageSummaryText={pageSummaryText}
                    total={total}
                />
            )}
            <div className="page-navigation">
                {showPageSelect && (
                    <PageSelect
                        dataTest={dataTest}
                        disabled={disabled}
                        pageSelectText={pageSelectText}
                        page={page}
                        pageCount={pageCount}
                        onChange={onPageChange}
                    />
                )}
                <PageControls
                    dataTest={dataTest}
                    nextPageText={nextPageText}
                    page={page}
                    previousPageText={previousPageText}
                    onClick={onPageChange}
                    isNextDisabled={
                        disabled || isLastPage || page === pageCount
                    }
                    isPreviousDisabled={disabled || page === 1}
                />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    row-gap: ${spacers.dp4};
                }
                .spacer {
                    flex-grow: 1;
                }
                .page-navigation {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                }
            `}</style>
        </div>
    )
}

export { Pagination }
