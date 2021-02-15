import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
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
            role,
            selected,
            draggable,
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
 * @prop {string} [role]
 * @prop {string} [dataTest=dhis2-uicore-tablerow]
 * @prop {boolean} [draggable] Only responsible for rendering the sort icon
 * @prop {boolean} [selected] Only responsible for the selected background color
 * @prop {string|node} [expandableContent] This content will be rendered as an additional row
 */
TableRow.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    draggable: propTypes.bool,
    expandableContent: propTypes.node,
    role: propTypes.string,
    selected: propTypes.bool,
}
