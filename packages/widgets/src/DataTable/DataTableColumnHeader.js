import { requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './DataTableColumnHeader/DataTableColumnHeader.styles.js'
import { FilterHandle } from './DataTableColumnHeader/FilterHandle.js'
import { Sorter } from './DataTableColumnHeader/Sorter.js'
import { TableHeaderCell } from './TableElements/index.js'

const SORT_DIRECTIONS = ['default', 'asc', 'desc']
const flexboxAlignLookup = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
}

/**
 * @module
 * @param {DataTableColumnHeader.PropTypes} props
 * @returns {React.Component}
 * @example import { DataTableColumnHeader } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/datatable--default|Storybook}
 */
export const DataTableColumnHeader = forwardRef(
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
    ) => (
        <TableHeaderCell
            align={align}
            className={className}
            colSpan={colSpan}
            dataTest={dataTest}
            fixed={fixed}
            large={large}
            left={left}
            ref={ref}
            rowSpan={rowSpan}
            role={role}
            scope={scope}
            top={top}
            width={width}
        >
            <span className={cx('container', { showFilter })}>
                <span className={cx('top', { large })}>
                    {children}
                    {sortDirection && (
                        <Sorter
                            name={name}
                            sortDirection={sortDirection}
                            onClick={onSortIconClick}
                        />
                    )}
                    {filter && (
                        <FilterHandle
                            name={name}
                            active={showFilter}
                            onClick={onFilterIconClick}
                        />
                    )}
                </span>
                {showFilter && filter}
            </span>
            <style jsx>{styles}</style>
            <style jsx>{`
                .label {
                    justify-content: ${flexboxAlignLookup[align]};
                }
            `}</style>
        </TableHeaderCell>
    )
)

DataTableColumnHeader.displayName = 'DataTableColumnHeader'

DataTableColumnHeader.defaultProps = {
    dataTest: 'dhis2-uicore-datatablecellhead',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {left|center|right} [align=left]
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {string} [dataTest=dhis2-uicore-datatablecellhead]
 * @prop {node} [filter] The filter element (JSX), required when onFilterIconClick or showFilter are present
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
DataTableColumnHeader.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** The filter element (JSX), required when onFilterIconClick or showFilter are present */
    filter: requiredIf(
        props => props.onFilterIconClick || props.showFilter,
        PropTypes.node
    ),
    fixed: PropTypes.bool,
    large: PropTypes.bool,
    /** Left or top required when fixed */
    left: requiredIf(props => props.fixed && !props.top, PropTypes.string),
    /** Can be used to match a column with a property name */
    name: PropTypes.string,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    showFilter: requiredIf(props => props.filter, PropTypes.bool),
    sortDirection: requiredIf(
        props => props.onSortIconClick,
        PropTypes.oneOf(SORT_DIRECTIONS)
    ),
    /** Left or top required when fixed */
    top: requiredIf(props => props.fixed && !props.left, PropTypes.string),
    width: PropTypes.string,
    onFilterIconClick: requiredIf(props => props.filter, PropTypes.func),
    /** Sort icon click callback with `nextSortDirection` and `name` in payload */
    onSortIconClick: requiredIf(props => props.sortDirection, PropTypes.func),
}
