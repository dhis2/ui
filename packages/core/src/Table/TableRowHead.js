import PropTypes from 'prop-types'
import React from 'react'
import { TableRow } from './TableRow.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {TableRowHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRowHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableRowHead = ({
    role,
    children,
    className,
    dataTest,
    suppressZebraStriping,
}) => (
    <TableRow
        className={className}
        dataTest={dataTest}
        suppressZebraStriping={suppressZebraStriping}
        role={role}
    >
        {children}
    </TableRow>
)

TableRowHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablerowhead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCellHead|Array.<TableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest]
 */
TableRowHead.propTypes = {
    /** Should be `<TableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
    /** Disables the default row striping for this row */
    suppressZebraStriping: PropTypes.bool,
}
