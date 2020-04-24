import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {StackedTableHead.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableHead } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTableHead = ({ children, className, dataTest }) => (
    <thead className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            thead {
                display: none;
            }
        `}</style>
    </thead>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [children]
 * Has to be instance of StackedTableRowHead
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
StackedTableHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableHead.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablehead',
}
