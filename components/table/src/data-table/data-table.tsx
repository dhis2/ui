import cx from 'classnames'
import React, { forwardRef } from 'react'
import { Table, TableScrollBox } from './table-elements/index.ts'

export interface DataTableProps {
    /**
     * Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Sets the `datatable-layout` property. Switching to `fixed` can prevent style
     * issues when dealing with a datatable with multiple frozen columns or when dealing
     * with filter elements in the datatable headers.
     */
    layout?: 'auto' | 'fixed' | 'initial' | 'inherit'
    role?: string
    /** Sets max-height of scrollbox */
    scrollHeight?: string
    /** Sets max-width of scrollbox */
    scrollWidth?: string
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling datatables with a fixed layout.
     */
    width?: string
}

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-datatable',
            layout = 'auto',
            role,
            scrollHeight,
            scrollWidth,
            width = '100%',
        },
        ref
    ) => {
        const scrollable = !!(scrollHeight || scrollWidth)
        const table = (
            <Table
                borderless={scrollable}
                className={className}
                dataTest={dataTest}
                layout={layout}
                ref={ref}
                role={role}
                width={width}
            >
                {children}
            </Table>
        )

        return !scrollable ? (
            table
        ) : (
            <TableScrollBox
                className={cx(className, 'tablescrollbox')}
                dataTest={`${dataTest}-scrollbox`}
                maxHeight={scrollHeight}
                maxWidth={scrollWidth}
            >
                {table}
            </TableScrollBox>
        )
    }
)

DataTable.displayName = 'DataTable'
