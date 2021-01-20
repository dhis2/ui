import { Table, TableScrollBox } from '@dhis2/ui-core'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {DataTable.PropTypes} props
 * @returns {React.Component}
 * @example import { DataTable } from '@dhis2/ui'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/data-datatable.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/datatable--default|Storybook}
 */
export const DataTable = forwardRef(
    (
        {
            children,
            className,
            dataTest,
            layout,
            role,
            scrollHeight,
            scrollWidth,
            width,
        },
        ref
    ) => {
        const scrollable = !!(scrollHeight || scrollWidth)
        const table = (
            <Table
                borderless={scrollable}
                className={className}
                dataTest={dataTest}
                layout={layout}
                ref={ref}
                role={role}
                width={width}
            >
                {children}
            </Table>
        )

        return !scrollable ? (
            table
        ) : (
            <TableScrollBox
                className={className ? `${className}-scrollbox` : undefined}
                dataTest={`${dataTest}-scrollbox`}
                maxHeight={scrollHeight}
                maxWidth={scrollWidth}
            >
                {table}
            </TableScrollBox>
        )
    }
)

DataTable.displayName = 'DataTable'

DataTable.defaultProps = {
    dataTest: 'dhis2-uicore-datatable',
    width: '100%',
    layout: 'auto',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {DataTableHead|DataTableBody|DataTableFoot|Array.<DataTableHead|DataTableBody|DataTableFoot>} [children]
 * Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-datatable]
 * @prop {(auto|fixed)} [layout=auto] Sets the `datatable-layout` property. Switching to `fixed` can prevent
 *  style issues when dealing with a datatable with multiple frozen columns or when dealing with filter
 *  elements in the datatable headers.
 * @prop {string} [scrollHeight] Sets max-height of scrollbox
 * @prop {string} [scrollWidth] Sets max-width of scrollbox
 * @prop {string} [role]
 * @prop {string} [width=100%] Sets the `width` property. Providing an explicit width can prevent style
 *  issues when dealing with horizontally scrolling datatables with a fixed layout.
 */
DataTable.propTypes = {
    /**
     * Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components
     */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /**
     * Sets the `datatable-layout` property. Switching to `fixed` can prevent style
     * issues when dealing with a datatable with multiple frozen columns or when dealing
     * with filter elements in the datatable headers.
     */
    layout: PropTypes.oneOf(['auto', 'fixed', 'initial', 'inherit']),
    role: PropTypes.string,
    /** Sets max-height of scrollbox */
    scrollHeight: PropTypes.string,
    /** Sets max-width of scrollbox */
    scrollWidth: PropTypes.string,
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling datatables with a fixed layout.
     */
    width: PropTypes.string,
}
