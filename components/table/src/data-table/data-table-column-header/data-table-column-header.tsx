import cx from 'classnames'
import React, { forwardRef } from 'react'
import { TableHeaderCell } from '../table-elements/index.ts'
import {
    styles,
    resolvedTableHeaderCss,
} from './data-table-column-header.styles.ts'
import { FilterHandle } from './filter-handle.tsx'
import { Sorter, SORT_DIRECTIONS } from './sorter.tsx'
import type { SortDirection } from './sorter.tsx'

const flexboxAlignLookup: Record<string, string> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
}

export interface DataTableColumnHeaderProps {
    align?: 'left' | 'center' | 'right'
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /** The filter element (JSX), required when onFilterIconClick or showFilter are present */
    filter?: React.ReactNode
    fixed?: boolean
    large?: boolean
    /** Left or top required when fixed */
    left?: string
    /** Can be used to match a column with a property name */
    name?: string
    role?: string
    rowSpan?: string
    scope?: string
    showFilter?: boolean
    sortDirection?: SortDirection
    sortIconTitle?: string
    /** Left or top required when fixed */
    top?: string
    width?: string
    onFilterIconClick?: (
        payload: { name?: string; show: boolean },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
    /** Sort icon click callback with `nextSortDirection` and `name` in payload */
    onSortIconClick?: (
        payload: { name?: string; direction: SortDirection },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const DataTableColumnHeader = forwardRef<
    HTMLTableCellElement,
    DataTableColumnHeaderProps
>(
    (
        {
            align,
            children,
            className,
            colSpan,
            dataTest = 'dhis2-uicore-datatablecellhead',
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
            top={top}
            width={width}
        >
            <span className="container">
                <span className={cx('top', { large })}>
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
                    justify-content: ${flexboxAlignLookup[align || 'left']};
                }
            `}</style>
        </TableHeaderCell>
    )
)

DataTableColumnHeader.displayName = 'DataTableColumnHeader'

export { SORT_DIRECTIONS }
export type { SortDirection }
