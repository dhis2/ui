import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import React, { forwardRef } from 'react'
import styles from './TableCell/TableCell.styles.js'

/**
 * @module
 * @param {TableCell.PropTypes} props
 * @returns {React.Component}
 * @example import { TableCell } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
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
            role,
            rowSpan,
            tag,
            valid,
            width,
            onClick,
        },
        ref
    ) => {
        const CellTag = tag || fixed ? 'th' : 'td'
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
            >
                {children}
                <style jsx>{styles}</style>
                <style jsx>{`
                    th,
                    td {
                        text-align: ${align};
                        width: ${width};
                        left: ${left};
                    }
                `}</style>
            </CellTag>
        )
    }
)

TableCell.displayName = 'TableCell'

TableCell.defaultProps = {
    dataTest: 'dhis2-uicore-tablecell',
    width: 'auto',
    left: 'auto',
    align: 'left',
}

const stylePropType = propTypes.mutuallyExclusive(
    ['valid', 'error', 'muted'],
    propTypes.bool
)
const requiredIfFixedPropType = propTypes.requiredIf(
    props => props.fixed,
    propTypes.string
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
    active: propTypes.boolean,
    align: propTypes.left,
    bordered: propTypes.boolean,
    children: propTypes.node,
    className: propTypes.string,
    colSpan: propTypes.string,
    dataTest: propTypes.string,
    error: stylePropType,
    fixed: propTypes.boolean,
    large: propTypes.boolean,
    left: requiredIfFixedPropType,
    muted: stylePropType,
    role: propTypes.string,
    rowSpan: propTypes.string,
    tag: propTypes.oneOf(['td', 'tr']),
    valid: stylePropType,
    width: requiredIfFixedPropType,
    onClick: propTypes.function,
}
