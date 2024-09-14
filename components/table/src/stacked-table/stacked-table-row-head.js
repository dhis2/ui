import PropTypes from 'prop-types'
import React from 'react'
import { StackedTableRow } from './stacked-table-row.js'

export const StackedTableRowHead = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablerowhead',
}) => (
    <StackedTableRow className={className} dataTest={dataTest}>
        {children}
    </StackedTableRow>
)

StackedTableRowHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
