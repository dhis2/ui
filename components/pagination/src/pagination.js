import { requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { getDefaultPageSummaryText } from './get-default-page-summary-text.js'
import { getItemRange } from './get-item-range.js'
import i18n from './locales/index.js'
import { PageControls } from './page-controls.js'
import { PageSelect } from './page-select.js'
import { PageSizeSelect } from './page-size-select.js'
import { PageSummary } from './page-summary.js'
import { shouldDisableNextPage } from './should-disable-next-page.js'
import { shouldDisablePreviousPage } from './should-disable-previous-page.js'

const MAX_PAGE_COUNT = 2000

const Pagination = ({
    className,
    dataTest,
    disabled,
    hidePageSelect,
    hidePageSizeSelect,
    hidePageSummary,
    isLastPage,
    nextPageText,
    onPageChange,
    onPageSizeChange,
    page,
    pageCount,
    pageLength,
    pageSelectText,
    pageSize,
    pageSizes,
    pageSizeSelectText,
    pageSummaryText,
    previousPageText,
    total,
}) => {
    const [isNavigatingToPage, setIsNavigatingToPage] = useState(null)
    const [isChangingPageSize, setIsChangingPageSize] = useState(false)
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

    useEffect(() => {
        setIsNavigatingToPage(null)
    }, [page])

    useEffect(() => {
        setIsChangingPageSize(false)
    }, [pageSize])

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
                    onChange={(newPageSize) => {
                        setIsChangingPageSize(true)
                        onPageSizeChange(newPageSize)
                    }}
                    pageSizeSelectText={pageSizeSelectText}
                />
            )}
            {!hidePageSummary && (
                <PageSummary
                    dataTest={dataTest}
                    inactive={
                        disabled || !!isNavigatingToPage || isChangingPageSize
                    }
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
                        onChange={(newPage) => {
                            setIsNavigatingToPage(newPage)
                            onPageChange(newPage)
                        }}
                    />
                )}
                <PageControls
                    dataTest={dataTest}
                    nextPageText={nextPageText}
                    page={page}
                    previousPageText={previousPageText}
                    onClick={(newPage) => {
                        setIsNavigatingToPage(newPage)
                        onPageChange(newPage)
                    }}
                    isNextDisabled={
                        disabled ||
                        shouldDisableNextPage({
                            page,
                            pageCount,
                            isLastPage,
                            isNavigatingToPage,
                            isChangingPageSize,
                        })
                    }
                    isPreviousDisabled={
                        disabled ||
                        shouldDisablePreviousPage({
                            page,
                            isNavigatingToPage,
                            isChangingPageSize,
                        })
                    }
                />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
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

Pagination.defaultProps = {
    dataTest: 'dhis2-uiwidgets-pagination',
    pageSizes: ['5', '10', '20', '30', '40', '50', '75', '100'],
    nextPageText: () => i18n.t('Next'),
    pageSelectText: () => i18n.t('Page'),
    pageSizeSelectText: () => i18n.t('Items per page'),
    pageSummaryText: getDefaultPageSummaryText,
    previousPageText: () => i18n.t('Previous'),
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    hidePageSelect: PropTypes.bool,
    hidePageSizeSelect: PropTypes.bool,
    hidePageSummary: PropTypes.bool,
    isLastPage: PropTypes.bool,
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageCount: PropTypes.number,
    pageLength: requiredIf((props) => props.isLastPage, PropTypes.number),
    pageSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizeSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizes: PropTypes.arrayOf(PropTypes.string),
    pageSummaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    previousPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    total: PropTypes.number,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
}

export { Pagination }
