import propTypes from '@dhis2/prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHead } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableHead = forwardRef(
    ({ children, className, dataTest, role }, ref) => (
        <thead className={className} data-test={dataTest} ref={ref} role={role}>
            {children}
        </thead>
    )
)

TableHead.displayName = 'TableHead'

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
