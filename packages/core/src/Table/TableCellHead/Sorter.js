import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { Action } from './Action'

const ASC = 'asc'
const DESC = 'desc'
const DEFAULT = 'default'
export const SORT_DIRECTIONS = [ASC, DESC, DEFAULT]

export const getNextSortDirection = currentDirection => {
    const currentIndex = SORT_DIRECTIONS.indexOf(currentDirection)
    const lastIndex = SORT_DIRECTIONS.length - 1
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1

    return SORT_DIRECTIONS[nextIndex]
}

export const Sorter = ({ name, sortDirection, onSortIconClick }) => {
    const nextSortDirection = getNextSortDirection(sortDirection)
    const handleSortIconClick = event => {
        onSortIconClick({ name, direction: nextSortDirection }, event)
    }

    return (
        <Action onClick={handleSortIconClick}>
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
        </Action>
    )
}

Sorter.propTypes = {
    name: propTypes.string,
    sortDirection: propTypes.requiredIf(
        props => props.onSortIconClick,
        propTypes.oneOf(SORT_DIRECTIONS)
    ),
    onSortIconClick: propTypes.requiredIf(
        props => typeof props.sortDirection !== 'undefined',
        propTypes.func
    ),
}
