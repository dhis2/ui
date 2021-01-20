import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { TableRow } from './TableRow.js'
import { ExpandToggleCell } from './TableRowExpandable/ExpandToggleCell.js'

/**
 * @module
 * @param {TableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRow } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--expandable-table-rows|Storybook}
 */
export const TableRowExpandable = ({
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

TableRowExpandable.defaultProps = {
    dataTest: 'dhis2-uicore-TableRowExpandable',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string|node} expandableContent This content will be rendered as the row's
 *  expandableContent after the expand cell is clicked
 * @prop {TableCell|TableCellHead|Array.<TableCell|TableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-TableRowExpandable]
 * @prop {boolean} [draggable] Only responsible for rendering the sort icon
 * @prop {boolean} [selected] Only responsible for the selected background color
 */
TableRowExpandable.propTypes = {
    expandableContent: PropTypes.node.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    draggable: PropTypes.bool,
    selected: PropTypes.bool,
}
