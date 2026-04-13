import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'
import styles from './table-header-cell.styles.ts'

const AUTO = 'auto'

export interface TableHeaderCellProps {
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
    fixed?: boolean
    large?: boolean
    /** Left or top required when fixed */
    left?: string
    /** Mutually exclusive with error and valid */
    muted?: boolean
    rowSpan?: string
    role?: string
    scope?: string
    /** Surpress hover and active event styles */
    staticStyle?: boolean
    /** Left or top required when fixed */
    top?: string
    /** Mutually exclusive with error and muted */
    valid?: boolean
    width?: string
    onClick?: React.MouseEventHandler<HTMLTableCellElement>
}

export const TableHeaderCell = forwardRef<
    HTMLTableCellElement,
    TableHeaderCellProps
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
            dataTest = 'dhis2-uicore-tablecell',
            error,
            fixed,
            large,
            left = AUTO,
            muted,
            rowSpan,
            role,
            scope,
            staticStyle,
            top = AUTO,
            valid,
            width = AUTO,
            onClick,
            ...props
        },
        ref
    ) => (
        <th
            {...props}
            ref={ref}
            colSpan={colSpan ? Number(colSpan) : undefined}
            rowSpan={rowSpan ? Number(rowSpan) : undefined}
            onClick={onClick}
            className={cx(className, {
                active,
                bordered,
                error,
                fixed,
                fixedHorizontally: fixed && left !== AUTO,
                large,
                muted,
                staticStyle,
                valid,
            })}
            data-test={dataTest}
            role={role}
            scope={scope}
        >
            {children}
            <style jsx>{styles}</style>
            <style jsx>{`
                th {
                    inset-inline-start: ${left};
                    top: ${top};
                    text-align: ${align};
                    width: ${width};
                    background-color: ${backgroundColor || colors.grey200};
                }
                :global(thead) th.fixedHorizontally {
                    background-color: ${backgroundColor || colors.grey300};
                }
                :global(tbody) > :global(tr:hover) > th:not(.staticStyle),
                :global(tfoot) > :global(tr:hover) > th:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey300};
                }
                :global(tbody) > :global(tr:active) > th:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey200};
                }
            `}</style>
        </th>
    )
)

TableHeaderCell.displayName = 'TableHeaderCell'
