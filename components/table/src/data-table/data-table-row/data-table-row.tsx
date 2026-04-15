import cx from 'classnames'
import React, { useState, forwardRef } from 'react'
import { TableRow } from '../table-elements/index.ts'
import resolvedCss from './data-table-row.styles.ts'
import { DragHandleCell } from './drag-handle-cell.tsx'
import { ExpandHandleCell } from './expand-handle-cell.tsx'
import { ExpandedRow } from './expanded-row.tsx'

export interface DataTableRowProps {
    /** Should be `<DataTableCell>` or `<DataTableCellHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Renders and additional table cell with drag icon and applies draggable styles */
    draggable?: boolean
    /** This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon */
    expandableContent?: React.ReactNode
    /** Toggles expand icon (up/down) and expandable content visibility */
    expanded?: boolean
    role?: string
    /** Adds a green background color */
    selected?: boolean
    /** Callback for expand icon cell clicks */
    onExpandToggle?: (payload: { expanded: boolean }) => void
}

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-datatablerow',
            expandableContent,
            expanded,
            selected,
            draggable,
            role,
            onExpandToggle,
            ...rest
        },
        ref
    ) => {
        const [isHoveringExpandedContent, setIsHoveringExpandedContent] =
            useState(false)
        const classes = cx(className, resolvedCss.className, {
            expanded,
            selected,
            draggable,
            isHoveringExpandedContent,
        })
        const childCount = React.Children.count(children)
        const colSpan = String(
            draggable || expandableContent ? childCount + 1 : childCount
        )

        return (
            <>
                <TableRow
                    ref={ref}
                    className={classes}
                    dataTest={dataTest}
                    selected={selected}
                    draggable={draggable}
                    role={role}
                    {...rest}
                >
                    {draggable && <DragHandleCell />}
                    {expandableContent && (
                        <ExpandHandleCell
                            expanded={expanded}
                            onClick={onExpandToggle}
                        />
                    )}
                    {children}
                    {resolvedCss.styles}
                </TableRow>
                {expandableContent && expanded && (
                    <ExpandedRow
                        className={className}
                        dataTest={dataTest}
                        setIsHoveringExpandedContent={
                            setIsHoveringExpandedContent
                        }
                        colSpan={colSpan}
                        selected={selected}
                    >
                        {expandableContent}
                    </ExpandedRow>
                )}
            </>
        )
    }
)

DataTableRow.displayName = 'DataTableRow'
