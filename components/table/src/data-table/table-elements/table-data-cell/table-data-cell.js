import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './table-data-cell.styles.js'

export const TableDataCell = forwardRef(
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
            large,
            left,
            muted,
            role,
            rowSpan,
            scope,
            staticStyle,
            valid,
            width,
            onClick,
            ...props
        },
        ref
    ) => (
        <td
            {...props}
            ref={ref}
            colSpan={colSpan}
            rowSpan={rowSpan}
            onClick={onClick}
            className={cx(className, {
                active,
                bordered,
                error,
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
                td {
                    left: ${left};
                    text-align: ${align};
                    width: ${width};
                    background-color: ${backgroundColor || colors.white};
                }
                :global(tr.selected) > td {
                    background-color: ${backgroundColor || colors.teal100};
                }
                :global(tr:hover) > td:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey100};
                }
                :global(tr:active) > td:not(.staticStyle) {
                    background-color: ${backgroundColor || colors.grey200};
                }
                :global(tr.selected:hover) > td:not(.staticStyle) {
                    background-color: ${backgroundColor || '#cdeae8'};
                }
            `}</style>
        </td>
    )
)

TableDataCell.displayName = 'TableDataCell'

TableDataCell.defaultProps = {
    align: 'left',
    dataTest: 'dhis2-uicore-tabledatacel',
    left: 'auto',
    width: 'auto',
}

const stylePropType = mutuallyExclusive(
    ['valid', 'error', 'muted'],
    PropTypes.bool
)

TableDataCell.propTypes = {
    /** To toggle border color, for example for editing */
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    backgroundColor: PropTypes.string,
    bordered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** Mutually exclusive with muted and valid */
    error: stylePropType,
    large: PropTypes.bool,
    /** Required when fixed */
    left: requiredIf((props) => props.fixed, PropTypes.string),
    /** Mutually exclusive with error and valid */
    muted: stylePropType,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    /** Surpress hover and active event styles */
    staticStyle: PropTypes.bool,
    /** Mutually exclusive with error and muted */
    valid: stylePropType,
    width: PropTypes.string,
    onClick: PropTypes.func,
}
