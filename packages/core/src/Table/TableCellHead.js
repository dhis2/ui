import React from 'react'
import propTypes from '@dhis2/prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

const tableCellHeadStyles = css`
    th {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
        padding: 13px 12px;
        height: 45px;
    }

    .dense {
        padding: 9px 12px;
        height: 36px;
    }
`

/**
 * @module
 * @param {TableCellHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableCellHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableCellHead = ({
    colSpan,
    rowSpan,
    dense,
    children,
    className,
    dataTest,
}) => (
    <th
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={cx({ dense }, className)}
        data-test={dataTest}
    >
        {children}

        <style jsx>{tableCellHeadStyles}</style>
    </th>
)

TableCellHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablecellhead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [colSpan]
 * @prop {string} [rowSpan]
 * @prop {bool} [dense]
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
TableCellHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    colSpan: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    rowSpan: propTypes.string,
}
