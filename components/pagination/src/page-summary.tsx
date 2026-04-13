import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

const translate = (
    prop: string | ((...args: never[]) => string),
    interpolationObject: Record<string, unknown>
): string => {
    if (typeof prop === 'function') {
        return (prop as (interpolationObject: Record<string, unknown>) => string)(interpolationObject)
    }

    return prop
}

export interface PageSummaryProps {
    dataTest: string
    page: number
    pageSummaryText: string | ((...args: never[]) => string)
    firstItem?: number
    inactive?: boolean
    lastItem?: number
    pageCount?: number
    total?: number
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
}: PageSummaryProps) => {
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
                    margin-inline-end: ${spacers.dp12};
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

export { PageSummary }
