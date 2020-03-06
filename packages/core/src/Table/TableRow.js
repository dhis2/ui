import React from 'react'
import css from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'

const tableRowStyles = css`
    tr:nth-child(even) {
        background: #fbfcfd;
    }
`

/**
 * @module
 * @param {TableRow.PropTypes} props
 * @returns {React.Component}
 * @example import { TableRow } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableRow = ({ children, className, dataTest }) => (
    <tr className={className} data-test={dataTest}>
        {children}

        <style jsx>{tableRowStyles}</style>
    </tr>
)

TableRow.defaultProps = {
    dataTest: 'dhis2-uicore-tablerow',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableCell|TableCellHead|Array.<TableCell|TableCellHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
TableRow.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
