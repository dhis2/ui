import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React, { forwardRef, useState } from 'react'
import { Action } from './TableCellHead/Action'
import { Sorter } from './TableCellHead/Sorter'
import styles from './TableCellHead/TableCellHead.styles.js'

const SORT_DIRECTIONS = ['asc', 'desc', null]
const AUTO = 'auto'
const flexboxAlignLookup = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
}

/**
 * @module
 * @param {TableCellHead.PropTypes} props
 * @returns {React.Component}
 * @example import { TableCellHead } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableCellHead = forwardRef(
    (
        {
            align,
            children,
            className,
            colSpan,
            dataTest,
            filter,
            fixed,
            large,
            left,
            name,
            rowSpan,
            role,
            scope,
            sortDirection,
            top,
            width,
            onSortIconClick,
        },
        ref
    ) => {
        const [showFilter, setShowFilter] = useState(false)
        const toggleFilter = () => setShowFilter(!showFilter)
        const fixedLeft = fixed && left !== AUTO
        const filterIconColor = showFilter ? colors.blue700 : colors.grey600
        return (
            <th
                colSpan={colSpan}
                rowSpan={rowSpan}
                className={cx(className, {
                    fixed,
                    large,
                    fixedLeft,
                })}
                data-test={dataTest}
                ref={ref}
                role={role}
                scope={scope}
            >
                <span className="container">
                    <span className="top">
                        <span className="label">{children}</span>
                        {sortDirection && (
                            <Sorter
                                name={name}
                                sortDirection={sortDirection}
                                onSortIconClick={onSortIconClick}
                            />
                        )}
                        {filter && (
                            <Action onClick={toggleFilter}>
                                <IconSearch16 color={filterIconColor} />
                            </Action>
                        )}
                    </span>
                    {filter && showFilter && (
                        <span className="bottom">{filter}</span>
                    )}
                </span>
                <style jsx>{styles}</style>
                <style jsx>{`
                    th {
                        left: ${left};
                        top: ${top};
                        width: ${width};
                        text-align: ${align};
                    }
                    .label {
                        justify-content: ${flexboxAlignLookup[align]};
                    }
                `}</style>
            </th>
        )
    }
)

TableCellHead.displayName = 'TableCellHead'

TableCellHead.defaultProps = {
    align: 'left',
    dataTest: 'dhis2-uicore-tablecellhead',
    left: AUTO,
    top: AUTO,
    width: AUTO,
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {left|center|right} [align=left]
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {string} [dataTest=dhis2-uicore-tablecellhead]
 * @prop {node} [filter] The filter element (JSX)
 * @prop {boolean} [fixed]
 * @prop {boolean} [large]
 * @prop {string} [left] Left or top required when fixed
 * @prop {string} [name] Can be used to match a column with a property name
 * @prop {string} [rowSpan]
 * @prop {string} [role]
 * @prop {string} [scope]
 * @prop {'asc'|'desc'|null} [sortDirection]
 * @prop {string} [top] Left or top required when fixed
 * @prop {string} [width]
 * @prop {function} [onSortIconClick] Sort icon click callback with `nextSortDirection` and `name` in payload
 */
TableCellHead.propTypes = {
    align: propTypes.oneOf(['left', 'center', 'right']),
    children: propTypes.node,
    className: propTypes.string,
    colSpan: propTypes.string,
    dataTest: propTypes.string,
    filter: propTypes.node,
    fixed: propTypes.bool,
    large: propTypes.bool,
    left: propTypes.requiredIf(
        props => props.fixed && !props.top,
        propTypes.string
    ),
    name: propTypes.string,
    role: propTypes.string,
    rowSpan: propTypes.string,
    scope: propTypes.string,
    sortDirection: propTypes.requiredIf(
        props => props.onSortIconClick,
        propTypes.oneOf(SORT_DIRECTIONS)
    ),
    top: propTypes.requiredIf(
        props => props.fixed && !props.left,
        propTypes.string
    ),
    width: propTypes.string,
    onSortIconClick: propTypes.requiredIf(
        props => typeof props.sortDirection !== 'undefined',
        propTypes.func
    ),
}
