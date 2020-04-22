import React from 'react'
import propTypes from '@dhis2/prop-types'

import { StackedTableRow } from './StackedTableRow.js'

/**
 * @module
 * @param {StackedTableRowHead.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableRowHead } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTableRowHead = ({ children, className, dataTest }) => (
    <StackedTableRow className={className} dataTest={dataTest}>
        {children}
    </StackedTableRow>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * Has to be instance of StackedTableCellHead
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
StackedTableRowHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableRowHead.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablerowhead',
}
