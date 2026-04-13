import React, { forwardRef } from 'react'

export interface TableHeadProps {
    /** Should be `<TableRowHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
    ({ children, className, dataTest, role, ...props }, ref) => (
        <thead
            {...props}
            className={className}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
        </thead>
    )
)

TableHead.displayName = 'TableHead'
