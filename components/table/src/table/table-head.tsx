import React from 'react'

export interface TableHeadProps {
    /** Should be `<TableRowHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-tablehead',
    role,
}) => (
    <thead className={className} data-test={dataTest} role={role}>
        {children}
    </thead>
)
