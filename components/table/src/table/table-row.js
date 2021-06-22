import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import css from 'styled-jsx/css'
import { TableContext } from './table-context'

const tableRowStyles = css`
    .zebraStriping:nth-child(even) {
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
export const TableRow = ({
    role,
    children,
    className,
    dataTest,
    suppressZebraStriping,
}) => {
    const {
        suppressZebraStriping: suppressZebraStripingFromContext,
    } = useContext(TableContext)

    const zebraStriping =
        typeof suppressZebraStriping !== 'undefined'
            ? !suppressZebraStriping
            : !suppressZebraStripingFromContext

    return (
        <tr
            className={cx(className, { zebraStriping })}
            data-test={dataTest}
            role={role}
        >
            {children}

            <style jsx>{tableRowStyles}</style>
        </tr>
    )
}

TableRow.defaultProps = {
    dataTest: 'dhis2-uicore-tablerow',
}

TableRow.propTypes = {
    /** Should be `<TableCell>` or `<TableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
    /** Disables the default row striping for this row */
    suppressZebraStriping: PropTypes.bool,
}
