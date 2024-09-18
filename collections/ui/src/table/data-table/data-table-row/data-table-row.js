import { requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, forwardRef } from 'react'
import { TableRow } from '../table-elements/index.js'
import resolvedCss from './data-table-row.styles.js'
import { DragHandleCell } from './drag-handle-cell.js'
import { ExpandHandleCell } from './expand-handle-cell.js'
import { ExpandedRow } from './expanded-row.js'

export const DataTableRow = forwardRef(
    (
        {
            children,
            className,
            dataTest,
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

DataTableRow.defaultProps = {
    dataTest: 'dhis2-uicore-datatablerow',
}

DataTableRow.propTypes = {
    /** Should be `<DataTableCell>` or `<DataTableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Renders and additional table cell with drag icon and applies draggable styles */
    draggable: PropTypes.bool,
    /** This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon */
    expandableContent: requiredIf(
        (props) => props.onExpandToggle,
        PropTypes.node
    ),
    /** Toggles expand icon (up/down) and expandable content visibility */
    expanded: PropTypes.bool,
    role: PropTypes.string,
    /** Adds a green background color */
    selected: PropTypes.bool,
    /** Callback for expand icon cell clicks */
    onExpandToggle: requiredIf(
        (props) => props.expandableContent,
        PropTypes.func
    ),
}
