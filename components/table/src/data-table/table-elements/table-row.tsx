import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface TableRowProps {
    /** Should be `<TableDataCell>` or `<TableDataCellHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Applies draggable cursor styles */
    draggable?: boolean
    role?: string
    /** Sets a selected (teal) background color */
    selected?: boolean
    onMouseOver?: React.MouseEventHandler<HTMLTableRowElement>
    onMouseOut?: React.MouseEventHandler<HTMLTableRowElement>
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tablerow',
            draggable,
            role,
            selected,
            ...props
        },
        ref
    ) => (
        <tr
            {...props}
            ref={ref}
            className={cx(className, {
                selected,
                draggable,
            })}
            data-test={dataTest}
            role={role}
        >
            {children}
            <style jsx>{`
                :global(tbody) > tr.draggable,
                :global(tfoot) > tr.draggable {
                    cursor: move;
                    user-select: none;
                }
            `}</style>
        </tr>
    )
)

TableRow.displayName = 'TableRow'
