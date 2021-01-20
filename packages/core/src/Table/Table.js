import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { ConditionalScrollBox } from './ConditionalScrollBox.js'

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
            scrollHeight,
            scrollWidth,
            width,
        },
        ref
    ) => (
        <ConditionalScrollBox
            className={className ? `${className}-scrollbox` : undefined}
            dataTest={`${dataTest}-scrollbox`}
            scrollHeight={scrollHeight}
            scrollWidth={scrollWidth}
        >
            <table
                className={cx(className, {
                    scrollable: scrollHeight || scrollWidth,
                })}
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
                    table.scrollable {
                        border: none;
                    }
                `}</style>
            </table>
        </ConditionalScrollBox>
    )
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
 * @prop {string} [dataTest=dhis2-uicore-table]
 * @prop {(auto|fixed)} [layout=auto] Sets the `table-layout` property. Switching to `fixed` can prevent
 *  style issues when dealing with a table with multiple frozen columns or when dealing with filter
 *  elements in the table headers.
 * @prop {string} [role]
 * @prop {string} [width=100%] Sets the `width` property. Providing an explicit width can prevent style
 *  issues when dealing with horizontally scrolling tables with a fixed layout.
 */
Table.propTypes = {
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
    scrollHeight: PropTypes.string,
    scrollWidth: PropTypes.string,
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling tables with a fixed layout.
     */
    width: PropTypes.string,
}
