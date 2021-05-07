import PropTypes from 'prop-types'
import React from 'react'
import { extractHeaderLabels } from './extract-header-labels.js'
import { Provider } from './table-context.js'
import { Table } from './table.js'

/**
 * @module
 * @param {StackedTable.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTable } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTable = ({
    children,
    className,
    dataTest,
    headerLabels,
}) => {
    const contextHeaderLabels = extractHeaderLabels(children)
    const context = {
        headerLabels: headerLabels || contextHeaderLabels,
    }

    return (
        <Provider value={context}>
            <Table className={className} dataTest={dataTest}>
                {children}
            </Table>
        </Provider>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {string[]} [headerLabels]
 * If a specific column should not have a header,
 * an empty string must be provided
 */
StackedTable.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Labels for columns. Use an empty string for a column without a header. */
    headerLabels: PropTypes.arrayOf(PropTypes.string),
}

StackedTable.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtable',
}
