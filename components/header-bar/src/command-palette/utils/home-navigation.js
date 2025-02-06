import { GRID_COLUMNS, GRID_SECTION, ACTIONS_SECTION } from './constants.js'
import {
    getNextLeftIndex,
    getNextRightIndex,
    getFirstIndexOfLastRow,
    isInFirstRow,
    isInLastRow,
} from './grid-functions.js'

const isFirstListIndex = (index) => index <= 0
const isLastListIndex = (index, listLength) => index >= listLength - 1

const getNextUpperIndex = ({
    isTopIndexInCurrentSection,
    lastIndexInNextSection,
    verticalGap,
    highlightedIndex,
}) => {
    if (isTopIndexInCurrentSection) {
        return lastIndexInNextSection
    } else {
        return highlightedIndex - verticalGap
    }
}

const getNextLowerIndex = ({
    isLastIndexInCurrentSection,
    verticalGap,
    highlightedIndex,
}) => {
    if (isLastIndexInCurrentSection) {
        return 0
    } else {
        return highlightedIndex + verticalGap
    }
}

export const handleHomeNavigation = ({
    event,
    activeSection,
    rows,
    columns,
    highlightedIndex,
    actionsListLength,
}) => {
    const gridVerticalGap = GRID_COLUMNS
    const firstIndexOfLastRow = getFirstIndexOfLastRow(rows, columns)

    const nextSection =
        activeSection === GRID_SECTION ? ACTIONS_SECTION : GRID_SECTION

    const verticalGap = activeSection === GRID_SECTION ? gridVerticalGap : 1

    let nextTopIndex
    let nextLowerIndex
    let isTopIndex
    let isLastIndex

    if (activeSection === GRID_SECTION) {
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault()
                return {
                    section: activeSection,
                    index: getNextLeftIndex(rows, columns, highlightedIndex),
                }
            case 'ArrowRight':
                event.preventDefault()
                return {
                    section: activeSection,
                    index: getNextRightIndex(rows, columns, highlightedIndex),
                }
            case 'ArrowDown':
                event.preventDefault()
                isLastIndex = isInLastRow(rows, columns, highlightedIndex)

                nextLowerIndex = getNextLowerIndex({
                    isLastIndexInCurrentSection: isLastIndex,
                    verticalGap,
                    highlightedIndex,
                })
                return {
                    section: isLastIndex ? nextSection : activeSection,
                    index: nextLowerIndex,
                }
            case 'ArrowUp':
                event.preventDefault()
                isTopIndex = isInFirstRow(rows, columns, highlightedIndex)
                nextTopIndex = getNextUpperIndex({
                    isTopIndexInCurrentSection: isTopIndex,
                    lastIndexInNextSection: actionsListLength - 1,
                    verticalGap,
                    highlightedIndex,
                })

                return {
                    section: isTopIndex ? nextSection : activeSection,
                    index: nextTopIndex,
                }
        }
    } else if (activeSection === ACTIONS_SECTION) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault()
                isLastIndex = isLastListIndex(
                    highlightedIndex,
                    actionsListLength
                )

                nextLowerIndex = getNextLowerIndex({
                    isLastIndexInCurrentSection: isLastIndex,
                    verticalGap,
                    highlightedIndex,
                })
                return {
                    section: isLastIndex ? nextSection : activeSection,
                    index: nextLowerIndex,
                }
            case 'ArrowUp':
                event.preventDefault()
                isTopIndex = isFirstListIndex(highlightedIndex)
                nextTopIndex = getNextUpperIndex({
                    isTopIndexInCurrentSection: isTopIndex,
                    lastIndexInNextSection: firstIndexOfLastRow,
                    verticalGap,
                    highlightedIndex,
                })
                return {
                    section: isTopIndex ? nextSection : activeSection,
                    index: nextTopIndex,
                }
        }
    }

    return {
        section: activeSection,
        index: highlightedIndex,
    }
}
