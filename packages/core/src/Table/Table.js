import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {Table.PropTypes} props
 * @returns {React.Component}
 * @example import { Table } from '@dhis2/ui'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/data-table.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const Table = forwardRef(
    ({ children, className, dataTest, layout, width, role }, ref) => {
        return (
            <table
                className={className}
                data-test={dataTest}
                ref={ref}
                role={role}
            >
                {children}
                <style jsx>{`
                    table {
                        table-layout: ${layout};
                        border-collapse: separate;
                        border-spacing: 0;
                        width: ${width};
                        box-sizing: border-box;
                        border: 1px solid ${colors.grey300};
                    }
                `}</style>
            </table>
        )
    }
)

Table.displayName = 'Table'

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
    width: '100%',
    layout: 'auto',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableHead|TableBody|TableFoot|Array.<TableHead|TableBody|TableFoot>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest=dhis2-uicore-table]
 */
Table.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    layout: propTypes.oneOf(['auto', 'fixed']),
    role: propTypes.string,
    width: propTypes.string,
}
