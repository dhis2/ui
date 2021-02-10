import PropTypes from 'prop-types'
import React from 'react'

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
    /** Should be `<TableRowHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
