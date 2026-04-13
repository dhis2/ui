import React, { forwardRef } from 'react'
import { TableDataCell, TableHeaderCell } from './table-elements/index.ts'

export interface DataTableCellProps {
    /** To toggle border color, for example for editing */
    active?: boolean
    align?: 'left' | 'center' | 'right'
    /** Sets background color of the cell. Disables dynamic background colors from active, hover, and selected states */
    backgroundColor?: string
    bordered?: boolean
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /** Mutually exclusive with muted and valid */
    error?: boolean
    /** When true a TableHeaderCell with sticky positioning will be rendered */
    fixed?: boolean
    large?: boolean
    /** Required when fixed */
    left?: string
    /** Mutually exclusive with error and valid */
    muted?: boolean
    role?: string
    rowSpan?: string
    scope?: string
    /** Surpress hover and active event styles */
    staticStyle?: boolean
    /** Render a TableDataCell or TableHeaderCell respectively */
    tag?: 'td' | 'th'
    /** Mutually exclusive with error and muted */
    valid?: boolean
    /** Required when fixed */
    width?: string
    onClick?: React.MouseEventHandler<HTMLTableCellElement>
}

export const DataTableCell = forwardRef<
    HTMLTableCellElement,
    DataTableCellProps
>(
    (
        {
            active,
            align = 'left',
            backgroundColor,
            bordered,
            children,
            className,
            colSpan,
            dataTest = 'dhis2-uicore-datatablecell',
            error,
            fixed,
            large,

            left = 'auto',
            muted,
            rowSpan,
            role,
            scope,
            staticStyle,
            tag,
            valid,
            width = 'auto',
            onClick,
            ...props
        },
        ref
    ) => {
        const TableCell =
            (!tag && fixed) || (tag && tag === 'th')
                ? TableHeaderCell
                : TableDataCell
        return (
            <TableCell
                {...props}
                active={active}
                align={align}
                backgroundColor={backgroundColor}
                bordered={bordered}
                className={className}
                colSpan={colSpan}
                dataTest={dataTest}
                error={error}
                fixed={fixed}
                large={large}
                left={left}
                muted={muted}
                rowSpan={rowSpan}
                ref={ref}
                role={role}
                staticStyle={staticStyle}
                scope={scope}
                valid={valid}
                width={width}
                onClick={onClick}
            >
                {children}
            </TableCell>
        )
    }
)

DataTableCell.displayName = 'DataTableCell'
