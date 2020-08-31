import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'

import translate from '../translate'

const getItemRange = (page, pageSize, total) => {
    let firstItem, lastItem

    if (total === 0) {
        // if no items are found, the pager total is 0
        // and we want to force the first and last item to be 0 too
        firstItem = 0
        lastItem = 0
    } else {
        // page is 1-based
        firstItem = (page - 1) * pageSize + 1
        lastItem = firstItem + pageSize - 1
    }

    if (lastItem > total) {
        lastItem = total
    }

    return { firstItem, lastItem }
}

const PageSummary = ({
    dataTest,
    page,
    pageCount,
    pageSize,
    pageSummaryText,
    total,
}) => {
    const { firstItem, lastItem } = getItemRange(page, pageSize, total)
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
    dataTest: propTypes.string.isRequired,
    page: propTypes.number.isRequired,
    pageCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    pageSummaryText: propTypes.oneOfType([propTypes.string, propTypes.func])
        .isRequired,
    total: propTypes.number.isRequired,
}

export { PageSummary, getItemRange }
