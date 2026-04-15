import { colors } from '@dhis2/ui-constants'
import React from 'react'
import i18n from '../../locales/index.js'
import { TableHeaderCellAction } from '../table-elements/index.ts'

export const ASC = 'asc'
export const DESC = 'desc'
export const DEFAULT = 'default'
export const SORT_DIRECTIONS = [DEFAULT, ASC, DESC] as const

export type SortDirection = (typeof SORT_DIRECTIONS)[number]

export const getNextSortDirection = (
    currentDirection: SortDirection
): SortDirection => {
    const currentIndex = SORT_DIRECTIONS.indexOf(currentDirection)
    const nextIndex = (currentIndex + 1) % SORT_DIRECTIONS.length

    return SORT_DIRECTIONS[nextIndex]
}

export interface SorterProps {
    name?: string
    sortDirection?: SortDirection
    title?: string
    onClick?: (
        payload: { name?: string; direction: SortDirection },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const Sorter: React.FC<SorterProps> = ({
    name,
    sortDirection,
    title,
    onClick,
}) => {
    const nextSortDirection = sortDirection
        ? getNextSortDirection(sortDirection)
        : DEFAULT
    const clickHandler = onClick
        ? (event: React.MouseEvent<HTMLButtonElement>) => {
              onClick({ name, direction: nextSortDirection }, event)
          }
        : undefined

    return (
        <TableHeaderCellAction
            onClick={clickHandler}
            title={title || i18n.t('Sort items')}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className={sortDirection}
            >
                <g fill="none" fillRule="evenodd">
                    <polygon className="top" points="4 9 12 9 8 14" />
                    <polygon className="bottom" points="4 7 12 7 8 2" />
                </g>
            </svg>
            <style jsx>{`
                svg .top,
                svg .bottom {
                    fill: ${colors.grey500};
                }
                svg.asc .top,
                svg.desc .bottom {
                    fill: ${colors.blue700};
                }
            `}</style>
        </TableHeaderCellAction>
    )
}
