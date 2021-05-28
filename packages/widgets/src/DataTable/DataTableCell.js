import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { TableDataCell, TableHeaderCell } from './TableElements/index.js'

/**
 * @module
 * @param {DataTableCell.PropTypes} props
 * @returns {React.Component}
 * @example import { DataTableCell } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/datatable--default|Storybook}
 */
export const DataTableCell = forwardRef(
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
            tag,
            valid,
            width,
            onClick,
        },
        ref
    ) => {
        const TableCell =
            (!tag && fixed) || (tag && tag === 'th')
                ? TableHeaderCell
                : TableDataCell
        return (
            <TableCell
                active={active}
                align={align}
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
    props => props.fixed,
    PropTypes.string
)
/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {boolean} [active] To toggle background color, for example for editing
 * @prop {left|center|right} [align=left]
 * @prop {boolean} [bordered]
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {string} [dataTest=dhis2-uicore-tabledatacell]
 * @prop {boolean} [error] Mutually exclusive with muted and valid
 * @prop {boolean} [fixed] When true a TableHeaderCell with sticky positioning will be rendered
 * @prop {boolean} [large]
 * @prop {string} [left=auto] Required when fixed
 * @prop {boolean} [muted] Mutually exclusive with error and valid
 * @prop {string} [role]
 * @prop {string} [rowSpan]
 * @prop {string} [scope]
 * @prop {string} [staticStyle] Surpress hover and active event styles
 * @prop {td,th} [tag] Render a TableDataCell or TableHeaderCell respectively
 * @prop {boolean} [valid] Mutually exclusive with error and muted
 * @prop {string} [width=auto] Required when fixed
 * @prop {function} [onClick]
 */
DataTableCell.propTypes = {
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
