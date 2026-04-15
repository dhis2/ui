import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'
import styles from './table-data-cell.styles.ts'

const rtlCorrespondingAlignments: Record<string, string> = {
    left: 'right',
    right: 'left',
    center: 'center',
}

export interface TableDataCellProps {
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
    /** Mutually exclusive with error and muted */
    valid?: boolean
    width?: string
    onClick?: React.MouseEventHandler<HTMLTableCellElement>
}

export const TableDataCell = forwardRef<
    HTMLTableCellElement,
    TableDataCellProps
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
            dataTest = 'dhis2-uicore-tabledatacel',
            error,
            large,
            left = 'auto',
            muted,
            role,
            rowSpan,
            scope,
            staticStyle,
            valid,
            width = 'auto',
            onClick,
            ...props
        },
        ref
    ) => {
        const rtlAlign = rtlCorrespondingAlignments[align] ?? align
        return (
            <td
                {...props}
                ref={ref}
                colSpan={colSpan ? Number(colSpan) : undefined}
                rowSpan={rowSpan ? Number(rowSpan) : undefined}
                onClick={onClick}
                className={cx(className, {
                    active,
                    bordered,
                    error,
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
                    td {
                        inset-inline-start: ${left};
                        text-align: ${align};
                        width: ${width};
                        background-color: ${backgroundColor || colors.white};
                    }
                    :dir(rtl) {
                        text-align: ${rtlAlign};
                    }
                    :global(tr.selected) > td {
                        background-color: ${backgroundColor || colors.teal100};
                    }
                    :global(tr:hover) > td:not(.staticStyle) {
                        background-color: ${backgroundColor || colors.grey100};
                    }
                    :global(tr:active) > td:not(.staticStyle) {
                        background-color: ${backgroundColor || colors.grey200};
                    }
                    :global(tr.selected:hover) > td:not(.staticStyle) {
                        background-color: ${backgroundColor || '#cdeae8'};
                    }
                `}</style>
            </td>
        )
    }
)

TableDataCell.displayName = 'TableDataCell'
