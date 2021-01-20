import { requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { FilterHandle } from './TableCellHead/FilterHandle.js'
import { Sorter } from './TableCellHead/Sorter.js'
import styles from './TableCellHead/TableCellHead.styles.js'

const SORT_DIRECTIONS = ['default', 'asc', 'desc']
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
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
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
            role,
            rowSpan,
            scope,
            showFilter,
            sortDirection,
            top,
            width,
            onFilterIconClick,
            onSortIconClick,
        },
        ref
    ) => {
        const fixedLeft = fixed && left !== AUTO

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
                role={role}
                ref={ref}
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
                            <FilterHandle
                                name={name}
                                active={showFilter}
                                onFilterIconClick={onFilterIconClick}
                            />
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
 * @prop {string} [role]
 * @prop {string} [rowSpan]
 * @prop {string} [scope]
 * @prop {boolean} [showFilter]
 * @prop {'asc'|'desc'|null} [sortDirection]
 * @prop {string} [top] Left or top required when fixed
 * @prop {string} [width]
 * @prop {function} [onFilterIconClick]
 * @prop {function} [onSortIconClick] Sort icon click callback with `nextSortDirection` and `name` in payload
 */
TableCellHead.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    filter: requiredIf(
        props => props.onFilterIconClick || props.showFilter,
        PropTypes.node
    ),
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    left: requiredIf(props => props.fixed && !props.top, PropTypes.string),
    name: PropTypes.string,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    showFilter: requiredIf(props => props.filter, PropTypes.bool),
    sortDirection: requiredIf(
        props => props.onSortIconClick,
        PropTypes.oneOf(SORT_DIRECTIONS)
    ),
    top: requiredIf(props => props.fixed && !props.left, PropTypes.string),
    width: PropTypes.string,
    onFilterIconClick: requiredIf(props => props.filter, PropTypes.func),
    onSortIconClick: requiredIf(props => props.sortDirection, PropTypes.func),
}
