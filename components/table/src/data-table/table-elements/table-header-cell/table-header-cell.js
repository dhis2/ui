import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
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
