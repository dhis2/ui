import propTypes from '@dhis2/prop-types'
import React from 'react'
import { StackedTableRow } from './stacked-table-row.js'

export const StackedTableRowHead = ({ children, className, dataTest }) => (
    <StackedTableRow className={className} dataTest={dataTest}>
        {children}
    </StackedTableRow>
)

StackedTableRowHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableRowHead.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablerowhead',
}
