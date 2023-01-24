import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

const PageSummary = ({
    dataTest,
    firstItem,
    inactive,
    lastItem,
    page,
    pageCount,
    pageSummaryText,
    total,
}) => {
    const summary = translate(pageSummaryText, {
        firstItem,
        lastItem,
        page,
        pageCount,
        total,
    })

    return (
        <div data-test={`${dataTest}-summary`}>
            <span className={cx({ inactive })}>{summary}</span>
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    margin-right: ${spacers.dp12};
                }
                span {
                    color: ${colors.grey700};
                    font-size: 14px;
                }
                span.inactive {
                    color: ${colors.grey500};
                }
            `}</style>
        </div>
    )
}

PageSummary.propTypes = {
    dataTest: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pageSummaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    firstItem: PropTypes.number,
    inactive: PropTypes.bool,
    lastItem: PropTypes.number,
    pageCount: PropTypes.number,
    total: PropTypes.number,
}

export { PageSummary }
