import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 * @param {Table.PropTypes} props
 * @returns {React.Component}
 * @example import { Table } from '@dhis2/ui-core'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/data-table.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const Table = ({ children, className, dataTest, role }) => {
    return (
        <table className={className} data-test={dataTest} role={role}>
            {children}
            <style jsx>{`
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
            `}</style>
        </table>
    )
}

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableHead|TableBody|TableFoot|Array.<TableHead|TableBody|TableFoot>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest]
 */
Table.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    role: propTypes.string,
}
