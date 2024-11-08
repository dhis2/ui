import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const TableRow = forwardRef(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tablerow',
            draggable,
            role,
            selected,
            ...props
        },
        ref
    ) => (
        <tr
            {...props}
            ref={ref}
            className={cx(className, {
                selected,
                draggable,
            })}
            data-test={dataTest}
            role={role}
        >
            {children}
            <style jsx>{`
                :global(tbody) > tr.draggable,
                :global(tfoot) > tr.draggable {
                    cursor: move;
                    user-select: none;
                }
            `}</style>
        </tr>
    )
)

TableRow.displayName = 'TableRow'

TableRow.propTypes = {
    /** Should be `<TableDataCell>` or `<TableDataCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Applies draggable cursor styles */
    draggable: PropTypes.bool,
    role: PropTypes.string,
    /** Sets a selected (teal) background color */
    selected: PropTypes.bool,
}
