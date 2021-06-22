import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 * @param {StackedTableBody.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableBody } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTableBody = ({ children, className, dataTest }) => (
    <tbody className={className} data-tset={dataTest}>
        {children}
        <style jsx>{`
            tbody {
                display: block;
            }
        `}</style>
    </tbody>
)

StackedTableBody.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableBody.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablebody',
}
