import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface TableProps {
    /**
     * Removes border from the table
     */
    borderless?: boolean
    /**
     * Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Sets the `table-layout` property. Switching to `fixed` can prevent style
     * issues when dealing with a table with multiple frozen columns or when dealing
     * with filter elements in the table headers.
     */
    layout?: 'auto' | 'fixed' | 'initial' | 'inherit'
    role?: string
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling tables with a fixed layout.
     */
    width?: string
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-table',
            layout = 'auto',
            role,
            borderless,
            width = '100%',
            ...props
        },
        ref
    ) => (
        <table
            {...props}
            className={cx(className, { borderless })}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
            <style jsx>{`
                table {
                    table-layout: ${layout};
                    border-collapse: separate;
                    border-spacing: 0;
                    width: ${width};
                    box-sizing: border-box;
                    border: 1px solid ${colors.grey300};
                }
                table.borderless {
                    border: none;
                }
            `}</style>
        </table>
    )
)

Table.displayName = 'Table'
