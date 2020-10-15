import propTypes from '@dhis2/prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import { Provider } from './TableContext.js'

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
    children,
    className,
    dataTest,
    suppressZebraStriping,
}) => (
    <Provider value={{ suppressZebraStriping }}>
        <table className={className} data-test={dataTest}>
            {children}

            <style jsx>{tableStyles}</style>
        </table>
    </Provider>
)

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableHead|TableBody|TableFoot|Array.<TableHead|TableBody|TableFoot>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {bool} [suppressZebraStriping]
 */
Table.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    suppressZebraStriping: propTypes.bool,
}
