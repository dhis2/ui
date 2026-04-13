import React from 'react'

export interface TableBodyProps {
    /** Should be `<TableRow>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableBody: React.FC<TableBodyProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-tablebody',
    role,
}) => (
    <tbody className={className} data-test={dataTest} role={role}>
        {children}
    </tbody>
)
