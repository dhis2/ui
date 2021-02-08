import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 * @param {TableHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHead } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableHead = ({ children, className, dataTest, role }) => (
    <thead className={className} data-test={dataTest} role={role}>
        {children}
    </thead>
)

TableHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablehead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest=dhis2-uicore-tablehead]
 */
TableHead.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    role: propTypes.string,
}
