import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

// TODO: i18n translate
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

const getItemRange = ({ page, pageSize, pageLength, total }) => {
    // page is 1-based
    let firstItem = (page - 1) * pageSize + 1
    let lastItem = firstItem + pageSize - 1

    if (typeof total === 'number') {
        if (total === 0) {
            /*
             * if no items are found, the pager total is 0
             * and the first and last item should be be 0 too
             */
            firstItem = 0
            lastItem = 0
        } else if (lastItem > total) {
            lastItem = total
        }
    }

    if (typeof pageLength === 'number') {
        lastItem = firstItem + pageLength - 1
    }

    return { firstItem, lastItem }
}

const PageSummary = ({
    dataTest,
    page,
    pageCount,
    pageLength,
    pageSize,
    pageSummaryText,
    total,
}) => {
    const { firstItem, lastItem } = getItemRange({
        page,
        pageSize,
        pageLength,
        total,
    })
    const summary = translate(pageSummaryText, {
        page,
        pageCount,
        firstItem,
        lastItem,
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
    pageSize: PropTypes.number.isRequired,
    pageSummaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    pageCount: PropTypes.number,
    pageLength: PropTypes.number,
    total: PropTypes.number,
}

export { PageSummary, getItemRange }
