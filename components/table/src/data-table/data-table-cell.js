import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { TableDataCell, TableHeaderCell } from './table-elements/index.js'

export const DataTableCell = forwardRef(
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
            tag,
            valid,
            width,
            onClick,
            ...props
        },
        ref
    ) => {
        const TableCell =
            (!tag && fixed) || (tag && tag === 'th')
                ? TableHeaderCell
                : TableDataCell
        return (
            <TableCell
                {...props}
                active={active}
                align={align}
                backgroundColor={backgroundColor}
                bordered={bordered}
                className={className}
                colSpan={colSpan}
                dataTest={dataTest}
                error={error}
                fixed={fixed}
                large={large}
                left={left}
                muted={muted}
                rowSpan={rowSpan}
                ref={ref}
                role={role}
                staticStyle={staticStyle}
                scope={scope}
                valid={valid}
                width={width}
                onClick={onClick}
            >
                {children}
            </TableCell>
        )
    }
)

DataTableCell.displayName = 'DataTableCell'

DataTableCell.defaultProps = {
    align: 'left',
    dataTest: 'dhis2-uicore-datatablecell',
    left: 'auto',
    width: 'auto',
}

const stylePropType = mutuallyExclusive(
    ['valid', 'error', 'muted'],
    PropTypes.bool
)
const requiredIfFixedPropType = requiredIf(
    (props) => props.fixed,
    PropTypes.string
)
DataTableCell.propTypes = {
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
    /** When true a TableHeaderCell with sticky positioning will be rendered */
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    /** Required when fixed */
    left: requiredIfFixedPropType,
    /** Mutually exclusive with error and valid */
    muted: stylePropType,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    /** Surpress hover and active event styles */
    staticStyle: PropTypes.bool,
    /** Render a TableDataCell or TableHeaderCell respectively */
    tag: PropTypes.oneOf(['td', 'th']),
    /** Mutually exclusive with error and muted */
    valid: stylePropType,
    /** Required when fixed */
    width: requiredIfFixedPropType,
    onClick: PropTypes.func,
}
