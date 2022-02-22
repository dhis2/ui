import { requiredIf } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { TableHeaderCell } from '../table-elements/index.js'
import {
    styles,
    resolvedTableHeaderCss,
} from './data-table-column-header.styles.js'
import { FilterHandle } from './filter-handle.js'
import { Sorter, SORT_DIRECTIONS } from './sorter.js'

const flexboxAlignLookup = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
}

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
            small,
            sortDirection,
            sortIconTitle,
            top,
            width,
            onFilterIconClick,
            onSortIconClick,
        },
        ref
    ) => (
        <TableHeaderCell
            align={align}
            className={cx(
                className,
                'DataTableColumnHeader',
                resolvedTableHeaderCss.className
            )}
            colSpan={colSpan}
            dataTest={dataTest}
            fixed={fixed}
            large={large}
            left={left}
            ref={ref}
            rowSpan={rowSpan}
            role={role}
            scope={scope}
            small={small}
            top={top}
            width={width}
        >
            <span className="container">
                <span className={cx('top', { large, small })}>
                    <span className="content">{children}</span>
                    {sortDirection && (
                        <Sorter
                            name={name}
                            sortDirection={sortDirection}
                            onClick={onSortIconClick}
                            title={sortIconTitle}
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
            {resolvedTableHeaderCss.styles}
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
const sizePropType = mutuallyExclusive(['small', 'large'], PropTypes.bool)

DataTableColumnHeader.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    /** The filter element (JSX), required when onFilterIconClick or showFilter are present */
    filter: requiredIf(
        (props) => props.onFilterIconClick || props.showFilter,
        PropTypes.node
    ),
    fixed: PropTypes.bool,
    large: sizePropType,
    /** Left or top required when fixed */
    left: requiredIf((props) => props.fixed && !props.top, PropTypes.string),
    /** Can be used to match a column with a property name */
    name: PropTypes.string,
    role: PropTypes.string,
    rowSpan: PropTypes.string,
    scope: PropTypes.string,
    small: sizePropType,
    showFilter: requiredIf((props) => props.filter, PropTypes.bool),
    sortDirection: requiredIf(
        (props) => props.onSortIconClick,
        PropTypes.oneOf(SORT_DIRECTIONS)
    ),
    sortIconTitle: PropTypes.string,
    /** Left or top required when fixed */
    top: requiredIf((props) => props.fixed && !props.left, PropTypes.string),
    width: PropTypes.string,
    onFilterIconClick: requiredIf((props) => props.filter, PropTypes.func),
    /** Sort icon click callback with `nextSortDirection` and `name` in payload */
    onSortIconClick: requiredIf((props) => props.sortDirection, PropTypes.func),
}
