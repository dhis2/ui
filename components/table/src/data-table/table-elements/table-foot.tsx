import React, { forwardRef } from 'react'

export interface TableFootProps {
    /** Should be `<TableRow>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tablefoot',
            role,
            ...props
        },
        ref
    ) => (
        <tfoot
            {...props}
            className={className}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
        </tfoot>
    )
)

TableFoot.displayName = 'TableFoot'
