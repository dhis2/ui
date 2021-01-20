import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './TableDataCell/TableDataCell.styles.js'

/**
 * @module
 * @param {TableDataCell.PropTypes} props
 * @returns {React.Component}
 * @example import { TableDataCell } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableDataCell = forwardRef(
    (
        {
            active,
            align,
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

/**
 * @typedef {Object} PropTypes
 * @staticStyle
 * @prop {boolean} [active] To toggle background color, for example for editing
 * @prop {left|center|right} [align=left]
 * @prop {boolean} [bordered]
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {string} [dataTest=dhis2-uicore-tabledatacell]
 * @prop {boolean} [error] Mutually exclusive with muted and valid
 * @prop {boolean} [large]
 * @prop {string} [left=auto] Required when fixed
 * @prop {boolean} [muted] Mutually exclusive with error and valid
 * @prop {string} [role]
 * @prop {string} [rowSpan]
 * @prop {string} [scope]
 * @prop {string} [staticStyle] Surpress hover and active event styles
 * @prop {boolean} [valid] Mutually exclusive with error and muted
 * @prop {string} [width=auto]
 * @prop {function} [onClick]
 */
TableDataCell.propTypes = {
    /** To toggle background color, for example for editing */
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bordered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** Mutually exclusive with muted and valid */
    error: stylePropType,
    large: PropTypes.bool,
    /** Required when fixed */
    left: requiredIf(props => props.fixed, PropTypes.string),
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
