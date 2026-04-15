import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface StackedTableCellHeadProps {
    children?: string
    className?: string
    colSpan?: string
    dataTest?: string
    rowSpan?: string
}

export const StackedTableCellHead: React.FC<StackedTableCellHeadProps> = ({
    children = '',
    className,
    colSpan,
    dataTest = 'dhis2-uicore-stackedtablecellhead',
    rowSpan,
}) => (
    <th
        colSpan={colSpan ? Number(colSpan) : undefined}
        rowSpan={rowSpan ? Number(rowSpan) : undefined}
        className={className}
        data-test={dataTest}
    >
        {children && <div>{children}</div>}

        <style jsx>{`
            th {
                border-bottom: 1px solid ${colors.grey300};
                padding: 0 12px;
            }

            div {
                min-height: 36px;
            }
        `}</style>
    </th>
)
