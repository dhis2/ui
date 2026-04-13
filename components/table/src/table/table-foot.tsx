import React from 'react'

export interface TableFootProps {
    /** Should be `<TableRow>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableFoot: React.FC<TableFootProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-tablefoot',
    role,
}) => (
    <tfoot className={className} data-test={dataTest} role={role}>
        {children}
    </tfoot>
)
