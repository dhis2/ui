import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {TableHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHead } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableHead = ({ children, className, dataTest }) => (
    <thead className={className} data-test={dataTest}>
        {children}
    </thead>
)

TableHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablehead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRowHead|Array.<TableRowHead>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
TableHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
