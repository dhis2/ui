import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './table-header-cell.styles.js'

const AUTO = 'auto'

export const TableHeaderCell = forwardRef(
    (
        {
            active,
            align,
            backgroundColor,
            bordered,
            children,
            className,
            colSpan,
            dataTest,
            error,
            fixed,
            large,
            left,
            muted,
            rowSpan,
            role,
            scope,
            staticStyle,
            top,
            valid,
            width,
            onClick,
            ...props
        },
        ref
    ) => (
        <th
            {...props}
            ref={ref}
            colSpan={colSpan}
            rowSpan={rowSpan}
            onClick={onClick}
            className={cx(className, {
                active,
                bordered,
                error,
                fixed,
                fixedHorizontally: fixed && left !== AUTO,
                large,
                muted,
                staticStyle,
                valid,
            })}
            data-test={dataTest}
            role={role}
            scope={scope}
        >
            {children}
            <style jsx>{styles}</style>
            <style jsx>{`
                th {
                    inset-inline-start: ${left};
                    top: ${top};
                    text-align: ${align};
                    width: ${width};
                    background-color: ${backgroundColor || colors.grey200};
                }
                :global(thead) th.fixedHorizontally {
                    background-color: ${backgroundColor || colors.grey300};
                }
                :global(tbody) > :global(tr:hover) > th:not(.staticStyle),
                :global(tfoot) > :global(tr:hover) > th:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey300};
                }
                :global(tbody) > :global(tr:active) > th:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey200};
                }
            `}</style>
        </th>
    )
)

TableHeaderCell.displayName = 'TableHeaderCell'

TableHeaderCell.defaultProps = {
    align: 'left',
    dataTest: 'dhis2-uicore-tablecell',
    left: AUTO,
    width: AUTO,
    top: AUTO,
}

const stylePropType = mutuallyExclusive(
    ['valid', 'error', 'muted'],
    PropTypes.bool
)

TableHeaderCell.propTypes = {
    /** To toggle border color, for example for editing */
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    /** Sets background color of the cell. Disables dynamic background colors from active, hover, and selected states */
    backgroundColor: PropTypes.string,
    bordered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** Mutually exclusive with muted and valid */
    error: stylePropType,
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    /** Left or top required when fixed */
    left: requiredIf((props) => props.fixed && !props.top, PropTypes.string),
    /** Mutually exclusive with error and valid */
    muted: stylePropType,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    /** Surpress hover and active event styles */
    staticStyle: PropTypes.bool,
    /** Left or top required when fixed */
    top: requiredIf((props) => props.fixed && !props.left, PropTypes.string),
    /** Mutually exclusive with error and muted */
    valid: stylePropType,
    width: PropTypes.string,
    onClick: PropTypes.func,
}
