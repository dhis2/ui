import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { ContentWithTitle } from './content-with-title.tsx'

export interface StackedTableCellProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    column?: number
    dataTest?: string
    headerLabels?: string[]
    hideTitle?: boolean
    rowSpan?: string
    title?: string
}

const defaultHeaderLabels: string[] = []

export const StackedTableCell: React.FC<StackedTableCellProps> = ({
    children,
    className,
    colSpan,
    column,
    dataTest = 'dhis2-uicore-stackedtablecell',
    headerLabels = defaultHeaderLabels,
    hideTitle,
    rowSpan,
    title,
}) => {
    const cellTitle = title || (column !== undefined ? headerLabels[column] : '') || ''
    const realTitle = hideTitle ? '' : cellTitle

    return (
        <td
            colSpan={colSpan ? Number(colSpan) : undefined}
            rowSpan={rowSpan ? Number(rowSpan) : undefined}
            className={className}
            data-test={dataTest}
        >
            <ContentWithTitle title={realTitle}>{children}</ContentWithTitle>

            <style jsx>{`
                td {
                    border-bottom: 1px solid ${colors.grey300};
                    padding: 0 12px;
                    font-size: 14px;
                    width: 100%;
                    display: block;
                }
                td:dir(rtl) {
                    text-align: right;
                }

                td:last-child {
                    border-bottom: 0;
                }
            `}</style>
        </td>
    )
}
