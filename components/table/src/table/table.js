import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import { Provider } from './table-context.js'

const tableStyles = css`
    table {
        border: 1px solid #e8edf2;
        background-color: #ffffff;
        min-width: 100%;
        text-align: left;
        border-collapse: collapse;
        vertical-align: top;
    }
`

/**
 * @module
 * @param {Table.PropTypes} props
 * @returns {React.Component}
 * @example import { Table } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const Table = ({
    role,
    children,
    className,
    dataTest,
    suppressZebraStriping,
}) => (
    <Provider value={{ suppressZebraStriping }}>
        <table className={className} data-test={dataTest} role={role}>
            {children}

            <style jsx>{tableStyles}</style>
        </table>
    </Provider>
)

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
}

Table.propTypes = {
    /** Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
    /** Remove the default striping on alternating rows */
    suppressZebraStriping: PropTypes.bool,
}
