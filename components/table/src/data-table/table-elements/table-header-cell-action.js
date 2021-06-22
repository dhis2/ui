import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableHeaderCellAction.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHeaderCellAction } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/data-display-table--header-actions|Storybook}
 */
export const TableHeaderCellAction = forwardRef(
    ({ onClick, children, className, dataTest, title, ...props }, ref) => (
        <button
            {...props}
            className={className}
            data-test={dataTest}
            onClick={onClick}
            title={title}
            ref={ref}
        >
            {children}
            <style jsx>{`
                button {
                    border: none;
                    padding: 0;
                    background: transparent;
                    width: 24px;
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    cursor: pointer;
                }
                button:hover,
                button:focus-visible {
                    background: ${colors.grey400};
                }
                button:active,
                button:focus {
                    outline: none;
                }
            `}</style>
        </button>
    )
)

TableHeaderCellAction.displayName = 'TableHeaderCellAction'

TableHeaderCellAction.defaultProps = {
    dataTest: 'dhis2-uicore-tableheadercellaction',
}

TableHeaderCellAction.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
}
