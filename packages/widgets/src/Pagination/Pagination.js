import i18n from '@dhis2/d2-i18n'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { PageControls } from './PageControls'
import { PageSelect } from './PageSelect'
import { PageSizeSelect } from './PageSizeSelect.js'
import { PageSummary } from './PageSummary.js'

/**
 * @module
 * @param {Pagination.PropTypes} props
 *
 * @returns {React.Component}
 *
 * @example import { Pagination } from @dhis2/ui
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/pagination.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/pagination--default|Storybook}
 */
const Pagination = ({
    className,
    dataTest,
    hidePageSizeSelect,
    hidePageSelect,
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
            <PageSummary
                dataTest={dataTest}
                page={page}
                pageCount={pageCount}
                pageSize={pageSize}
                total={total}
                pageSummaryText={pageSummaryText}
            />
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {number} page
 * @prop {number} pageCount
 * @prop {number} pageSize
 * @prop {number} total
 * @prop {function} onPageChange
 * @prop {function} onPageSizeChange
 * @prop {string} [dataTest="dhis2-uiwidgets-pagination"]
 * @prop {bool} hidePageSelect
 * @prop {bool} hidePageSizeSelect
 * @prop {string|function} [nextPageText]
 * @prop {string|function} [pageSelectText]
 * @prop {string|function} [pageSizeSelectText]
 * @prop {Array.<string>} [pageSizes=['5', '10', '20', '30', '40', '50', '75', '100']]
 * @prop {string|function} [pageSummaryText]
 * @prop {string|function} [previousPageText]
 */
Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onPageSizeChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    hidePageSelect: PropTypes.bool,
    hidePageSizeSelect: PropTypes.bool,
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizeSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    pageSizes: PropTypes.arrayOf(PropTypes.string),
    pageSummaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    previousPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export { Pagination }
