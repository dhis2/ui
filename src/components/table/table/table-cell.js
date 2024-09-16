import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
        padding: 13px 12px;
        height: 45px;
    }

    td:dir(rtl) {
        text-align: right;
    }

    .dense {
        padding: 9px 12px;
        height: 36px;
    }
`

export const TableCell = ({
    role,
    className,
    children,
    colSpan,
    rowSpan,
    dense,
    dataTest,
}) => (
    <td
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={cx({ dense }, className)}
        data-test={dataTest}
        role={role}
    >
        {children}

        <style jsx>{tableCellStyles}</style>
    </td>
)

TableCell.defaultProps = {
    dataTest: 'dhis2-uicore-tablecell',
}

TableCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** Usees less padding and height for information-dense layouts */
    dense: PropTypes.bool,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
}
