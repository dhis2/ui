import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {Table.PropTypes} props
 * @returns {React.Component}
 * @example import { Table } from '@dhis2/ui'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/data-table.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const Table = forwardRef(
    (
        {
            children,
            className,
            dataTest,
            layout,
            role,
            borderless,
            width,
            ...props
        },
        ref
    ) => (
        <table
            {...props}
            className={cx(className, { borderless })}
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
                table.borderless {
                    border: none;
                }
            `}</style>
        </table>
    )
)

Table.displayName = 'Table'

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
    width: '100%',
    layout: 'auto',
}

Table.propTypes = {
    /**
     * Removes border from the table
     */
    borderless: PropTypes.bool,
    /**
     * Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components
     */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /**
     * Sets the `table-layout` property. Switching to `fixed` can prevent style
     * issues when dealing with a table with multiple frozen columns or when dealing
     * with filter elements in the table headers.
     */
    layout: PropTypes.oneOf(['auto', 'fixed', 'initial', 'inherit']),
    role: PropTypes.string,
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling tables with a fixed layout.
     */
    width: PropTypes.string,
}
