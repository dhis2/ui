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

    const nextSection =
        activeSection === GRID_SECTION ? ACTIONS_SECTION : GRID_SECTION
    const verticalGap = activeSection === GRID_SECTION ? gridVerticalGap : 1

    const defaultValue = { section: activeSection, index: highlightedIndex }

    const handleArrowLeft = () => {
        event.preventDefault()
        if (activeSection === GRID_SECTION) {
            return {
                section: activeSection,
                index: getNextLeftIndex(rows, columns, highlightedIndex),
            }
        }
        return defaultValue
    }

    const handleArrowRight = () => {
        event.preventDefault()
        if (activeSection === GRID_SECTION) {
            return {
                section: activeSection,
                index: getNextRightIndex(rows, columns, highlightedIndex),
            }
        }
        return defaultValue
    }

    const handleArrowUp = () => {
        event.preventDefault()
        const firstIndexOfLastRow = getFirstIndexOfLastRow(rows, columns)
        const isTopIndex =
            activeSection === GRID_SECTION
                ? isInFirstRow(rows, columns, highlightedIndex)
                : isFirstListIndex(highlightedIndex)

        const lastIndexInNextSection =
            activeSection === GRID_SECTION
                ? actionsListLength - 1
                : firstIndexOfLastRow

        const nextTopIndex = getNextUpperIndex({
            isTopIndexInCurrentSection: isTopIndex,
            lastIndexInNextSection,
            verticalGap,
            highlightedIndex,
        })

        return {
            section: isTopIndex ? nextSection : activeSection,
            index: nextTopIndex,
        }
    }

    const handleArrowDown = () => {
        event.preventDefault()
        const isLastIndex =
            activeSection === GRID_SECTION
                ? isInLastRow(rows, columns, highlightedIndex)
                : isLastListIndex(highlightedIndex, actionsListLength)

        const nextLowerIndex = getNextLowerIndex({
            isLastIndexInCurrentSection: isLastIndex,
            verticalGap,
            highlightedIndex,
        })
        return {
            section: isLastIndex ? nextSection : activeSection,
            index: nextLowerIndex,
        }
    }

    switch (event.key) {
        case 'ArrowLeft':
            return handleArrowLeft()
        case 'ArrowRight':
            return handleArrowRight()
        case 'ArrowDown':
            return handleArrowDown()
        case 'ArrowUp':
            return handleArrowUp()
        default:
            return defaultValue
    }
}
