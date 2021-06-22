import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './table-header-cell.styles.js'

const AUTO = 'auto'

/**
 * @module
 * @param {TableHeaderCell.PropTypes} props
 * @returns {React.Component}
 * @example import { TableHeaderCell } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableHeaderCell = forwardRef(
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
                    left: ${left};
                    top: ${top};
                    text-align: ${align};
                    width: ${width};
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {boolean} [active] To toggle background color, for example for editing
 * @prop {left|center|right} [align=left]
 * @prop {boolean} [bordered]
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {string} [dataTest=dhis2-uicore-tabledatacell]
 * @prop {boolean} [error] Mutually exclusive with muted and valid
 * @prop {boolean} [fixed]
 * @prop {boolean} [large]
 * @prop {string} [left=auto] Required when fixed
 * @prop {boolean} [muted] Mutually exclusive with error and valid
 * @prop {string} [role]
 * @prop {string} [rowSpan]
 * @prop {string} [scope]
 * @prop {string} [staticStyle] surpress hover and active event styles
 * @prop {string} [top] Left or top required when fixed
 * @prop {boolean} [valid] Mutually exclusive with error and muted
 * @prop {string} [width=auto]
 * @prop {function} [onClick]
 */
TableHeaderCell.propTypes = {
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
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    /** Left or top required when fixed */
    left: requiredIf(props => props.fixed && !props.top, PropTypes.string),
    /** Mutually exclusive with error and valid */
    muted: stylePropType,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    /** Surpress hover and active event styles */
    staticStyle: PropTypes.bool,
    /** Left or top required when fixed */
    top: requiredIf(props => props.fixed && !props.left, PropTypes.string),
    /** Mutually exclusive with error and muted */
    valid: stylePropType,
    width: PropTypes.string,
    onClick: PropTypes.func,
}
