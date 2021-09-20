import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from './locales/index.js'
import { PageControls } from './page-controls'
import { PageSelect } from './page-select'
import { PageSizeSelect } from './page-size-select.js'
import { PageSummary } from './page-summary.js'

const Pagination = ({
    className,
    dataTest,
    hidePageSizeSelect,
    hidePageSelect,
    hidePageSummary,
    page,
    pageCount,
    pageSize,
    total,
    pageSizes,
    onPageChange,
    onPageSizeChange,
    nextPageText,
    pageSelectText,
    pageSizeSelectText,
    pageSummaryText,
    previousPageText,
}) => {
    return (
        <div className={cx('container', className)} data-test={dataTest}>
            {hidePageSizeSelect ? (
                <div className="spacer" />
            ) : (
                <PageSizeSelect
                    dataTest={dataTest}
                    pageSize={pageSize}
                    pageSizes={pageSizes}
                    onChange={onPageSizeChange}
                    pageSizeSelectText={pageSizeSelectText}
                />
            )}
            {!hidePageSummary && (
                <PageSummary
                    dataTest={dataTest}
                    page={page}
                    pageCount={pageCount}
                    pageSize={pageSize}
                    total={total}
                    pageSummaryText={pageSummaryText}
                />
            )}
            <div className="page-navigation">
                {!hidePageSelect && (
                    <PageSelect
                        dataTest={dataTest}
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
                    pageCount={pageCount}
                    previousPageText={previousPageText}
                    onClick={onPageChange}
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
    pageSummaryText: interpolationObject =>
        i18n.t(
            'Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}',
            interpolationObject
        ),
    previousPageText: () => i18n.t('Previous'),
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    hidePageSelect: PropTypes.bool,
    hidePageSizeSelect: PropTypes.bool,
    hidePageSummary: PropTypes.bool,
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizeSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizes: PropTypes.arrayOf(PropTypes.string),
    pageSummaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    previousPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
}

export { Pagination }
