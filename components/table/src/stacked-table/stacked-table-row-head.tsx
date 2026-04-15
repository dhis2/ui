import React from 'react'
import { StackedTableRow } from './stacked-table-row.tsx'

export interface StackedTableRowHeadProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableRowHead: React.FC<StackedTableRowHeadProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablerowhead',
}) => (
    <StackedTableRow className={className} dataTest={dataTest}>
        {children}
    </StackedTableRow>
)
