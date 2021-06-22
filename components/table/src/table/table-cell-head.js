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
