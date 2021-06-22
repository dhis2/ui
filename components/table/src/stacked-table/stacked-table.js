import PropTypes from 'prop-types'
import React from 'react'
import { extractHeaderLabels } from './extract-header-labels.js'
import { Provider } from './table-context.js'
import { Table } from './table.js'

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
