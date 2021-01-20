import { mutuallyExclusive, requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './TableCell/TableCell.styles.js'

/**
 * @module
 * @param {TableCell.PropTypes} props
 * @returns {React.Component}
 * @example import { TableCell } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableCell = forwardRef(
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
            tag,
            valid,
            width,
            onClick,
        },
        ref
    ) => {
        const CellTag = tag || (fixed ? 'th' : 'td')
        return (
            <CellTag
                ref={ref}
                colSpan={colSpan}
                rowSpan={rowSpan}
                onClick={onClick}
                className={cx(className, {
                    active,
                    bordered,
                    error,
                    fixed,
                    large,
                    muted,
                    valid,
                })}
                data-test={dataTest}
                role={role}
                scope={scope}
            >
                {children}
                <style jsx>{styles}</style>
                <style jsx>{`
                    th,
                    td {
                        left: ${left};
                        text-align: ${align};
                        width: ${width};
                    }
                `}</style>
            </CellTag>
        )
    }
)

TableCell.displayName = 'TableCell'

TableCell.defaultProps = {
    align: 'left',
    dataTest: 'dhis2-uicore-tablecell',
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
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablecell]
 * @prop {string} [colSpan]
 * @prop {string} [rowSpan]
 * @prop {string} [role]
 * @prop {string} [scope]
 * @prop {string} [tag] HTML tag to render (will default to td)
 * @prop {boolean} [active] To toggle background color, for example for editing
 * @prop {function} [onClick]
 * @prop {boolean} [large]
 * @prop {boolean} [bordered]
 * @prop {boolean} [fixed]
 * @prop {string} [width=auto] Required when fixed
 * @prop {string} [left=auto] Required when fixed
 * @prop {left|center|right} [align=left]
 * @prop {boolean} [error] Mutually exclusive
 * @prop {boolean} [valid] Mutually exclusive
 * @prop {boolean} [muted] Mutually exclusive
 */
TableCell.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bordered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    error: stylePropType,
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    left: requiredIfFixedPropType,
    muted: stylePropType,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    tag: PropTypes.oneOf(['td', 'th']),
    valid: stylePropType,
    width: requiredIfFixedPropType,
    onClick: PropTypes.func,
}
