import { colors, spacers } from '@dhis2/ui-constants'
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
            <span>{summary}</span>
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
    lastItem: PropTypes.number,
    pageCount: PropTypes.number,
    total: PropTypes.number,
}

export { PageSummary }
