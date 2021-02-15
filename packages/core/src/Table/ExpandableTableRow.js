import propTypes from '@dhis2/prop-types'
import React, { useState } from 'react'
import { ExpandToggleCell } from './ExpandableTableRow/ExpandToggleCell.js'
import { TableRow } from './TableRow.js'

/**
 * @module
 * @param {TableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRow } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--expandable-table-rows|Storybook}
 */
export const ExpandableTableRow = ({
    children,
    className,
    dataTest,
    draggable,
    expandableContent,
    selected,
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpandableContent = () => setIsExpanded(!isExpanded)

    return (
        <TableRow
            className={className}
            dataTest={dataTest}
            expandableContent={isExpanded && expandableContent}
            selected={selected}
            draggable={draggable}
        >
            <ExpandToggleCell
                onClick={toggleExpandableContent}
                isExpanded={isExpanded}
            />
            {children}
        </TableRow>
    )
}

ExpandableTableRow.defaultProps = {
    dataTest: 'dhis2-uicore-expandabletablerow',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string|node} expandableContent This content will be rendered as the row's
 *  expandableContent after the expand cell is clicked
 * @prop {TableCell|TableCellHead|Array.<TableCell|TableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-expandabletablerow]
 * @prop {boolean} [draggable] Only responsible for rendering the sort icon
 * @prop {boolean} [selected] Only responsible for the selected background color
 */
ExpandableTableRow.propTypes = {
    expandableContent: propTypes.node.isRequired,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    draggable: propTypes.bool,
    selected: propTypes.bool,
}
