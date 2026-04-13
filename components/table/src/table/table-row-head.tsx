import React from 'react'
import { TableRow } from './table-row.tsx'

export interface TableRowHeadProps {
    /** Should be `<TableCellHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /** Disables the default row striping for this row */
    suppressZebraStriping?: boolean
}

export const TableRowHead: React.FC<TableRowHeadProps> = ({
    role,
    children,
    className,
    dataTest = 'dhis2-uicore-tablerowhead',
    suppressZebraStriping,
}) => (
    <TableRow
        className={className}
        dataTest={dataTest}
        suppressZebraStriping={suppressZebraStriping}
        role={role}
    >
        {children}
    </TableRow>
)
