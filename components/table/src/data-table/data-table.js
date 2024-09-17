import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { Table, TableScrollBox } from './table-elements/index.js'

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
                className={cx(className, 'tablescrollbox')}
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
