import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

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
    role,
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
        role={role}
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
 * @prop {string} [role]
 * @prop {string} [dataTest]
 */
TableCellHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** Uses less padding and height for information-dense layouts */
    dense: PropTypes.bool,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
}
