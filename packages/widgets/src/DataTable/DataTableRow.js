import { requiredIf } from '@dhis2/prop-types'
import { TableRow } from '@dhis2/ui-core'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, forwardRef } from 'react'
import resolvedCss from './DataTableRow/DataTableRow.styles.js'
import { DragHandleCell } from './DataTableRow/DragHandleCell.js'
import { ExpandedRow } from './DataTableRow/ExpandedRow.js'
import { ExpandHandleCell } from './DataTableRow/ExpandHandleCell.js'

/**
 * @module
 * @param {DataTableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { DataTableRow } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/datatable--default|Storybook}
 */
export const DataTableRow = forwardRef(
    (
        {
            children,
            className,
            dataTest,
            expandable,
            expandableContent,
            expanded,
            selected,
            draggable,
            role,
            onExpandToggle,
        },
        ref
    ) => {
        const [
            isHoveringExpandedContent,
            setIsHoveringExpandedContent,
        ] = useState(false)
        const classes = cx(className, resolvedCss.className, {
            expanded,
            selected,
            draggable,
            isHoveringExpandedContent,
        })
        const childCount = React.Children.count(children)
        const colSpan = String(
            draggable || expandable ? childCount + 1 : childCount
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
                >
                    {draggable && <DragHandleCell />}
                    {expandable && (
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {DataTableCell|DataTableCellHead|Array.<DataTableCell|DataTableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-datatablerow]
 * @prop {boolean} [draggable] Renders and additional table cell with drag icon and applies draggable styles
 * @prop {boolean} [expandable] Displays an additional table cell with expand icon
 * @prop {string|node} [expandableContent] This content will be rendered into an additional row with fullwidth cell
 * @prop {boolean} [expandable] Toggles expand icon (up/down) and expandable content visibility
 * @prop {string} [role]
 * @prop {boolean} [selected] Adds a green background color
 * @prop {function} [onExpandToggle] Callback for expand icon cell clicks
 */
DataTableRow.propTypes = {
    /** Should be `<DataTableCell>` or `<DataTableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Renders and additional table cell with drag icon and applies draggable styles */
    draggable: PropTypes.bool,
    /** Displays an additional table cell with expand icon */
    expandable: requiredIf(
        props => props.expandableContent || props.onExpandToggle,
        PropTypes.bool
    ),
    /** This content will be rendered into an additional row with fullwidth cell */
    expandableContent: requiredIf(
        props => props.expandable || props.onExpandToggle,
        PropTypes.node
    ),
    /** Toggles expand icon (up/down) and expandable content visibility */
    expanded: PropTypes.bool,
    role: PropTypes.string,
    /** Adds a green background color */
    selected: PropTypes.bool,
    /** Callback for expand icon cell clicks */
    onExpandToggle: requiredIf(
        props => props.expandable || props.expandableContent,
        PropTypes.func
    ),
}
