import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, forwardRef } from 'react'
import { DragHandleCell } from './TableRow/DragHandleCell.js'
import { ExpandedRowContent } from './TableRow/ExpandedRowContent.js'
import styles from './TableRow/TableRow.styles.js'

/**
 * @module
 * @param {TableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRow } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableRow = forwardRef(
    (
        {
            children,
            className,
            dataTest,
            expandableContent,
            selected,
            draggable,
            role,
        },
        ref
    ) => {
        const [
            isHoveringExpandedContent,
            setIsHoveringExpandedContent,
        ] = useState(false)
        const classes = cx(className, {
            isExpanded: !!expandableContent,
            selected,
            draggable,
            isHoveringExpandedContent,
        })
        const childCount = React.Children.count(children)
        const colSpan = String(draggable ? childCount + 1 : childCount)

        return (
            <>
                <tr
                    ref={ref}
                    className={classes}
                    data-test={dataTest}
                    role={role}
                >
                    {draggable && <DragHandleCell />}
                    {children}
                    <style jsx>{styles}</style>
                </tr>
                {expandableContent && (
                    <ExpandedRowContent
                        className={classes}
                        setIsHoveringExpandedContent={
                            setIsHoveringExpandedContent
                        }
                        colSpan={colSpan}
                    >
                        {expandableContent}
                    </ExpandedRowContent>
                )}
            </>
        )
    }
)

TableRow.displayName = 'TableRow'

TableRow.defaultProps = {
    dataTest: 'dhis2-uicore-tablerow',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCell|TableCellHead|Array.<TableCell|TableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablerow]
 * @prop {boolean} [draggable] Only responsible for rendering the sort icon
 * @prop {boolean} [selected] Only responsible for the selected background color
 * @prop {string} [role]
 * @prop {string|node} [expandableContent] This content will be rendered as an additional row
 */
TableRow.propTypes = {
    /** Should be `<TableCell>` or `<TableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    draggable: PropTypes.bool,
    expandableContent: PropTypes.node,
    role: PropTypes.string,
    selected: PropTypes.bool,
}
