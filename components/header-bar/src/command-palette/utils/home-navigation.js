import { GRID_SECTION, ACTIONS_SECTION } from './constants.js'
import GridNavigation from './grid-navigation.js'

const isFirstListIndex = (index) => index <= 0
const isLastListIndex = (index, listLength) => index >= listLength - 1

export const handleHomeNavigation = ({
    event,
    activeSection,
    rows,
    columns,
    highlightedIndex,
    actionsListLength,
    gridSize,
}) => {
    const grid = new GridNavigation(rows, columns)
    const gridVerticalGap = columns
    const listVerticalGap = 1

    const nextSection =
        activeSection === GRID_SECTION ? ACTIONS_SECTION : GRID_SECTION
    const verticalGap =
        activeSection === GRID_SECTION ? gridVerticalGap : listVerticalGap

    const defaultValue = { section: activeSection, index: highlightedIndex }

    const handleArrowLeft = () => {
        event.preventDefault()
        if (activeSection === GRID_SECTION) {
            return {
                section: activeSection,
                index: grid.getNextLeftIndex(highlightedIndex, gridSize),
            }
        }
        return defaultValue
    }

    const handleArrowRight = () => {
        event.preventDefault()
        if (activeSection === GRID_SECTION) {
            return {
                section: activeSection,
                index: grid.getNextRightIndex(highlightedIndex, gridSize),
            }
        }
        return defaultValue
    }

    const handleArrowUp = () => {
        event.preventDefault()
        const isTopIndex =
            activeSection === GRID_SECTION
                ? grid.isInFirstRow(highlightedIndex, gridSize)
                : isFirstListIndex(highlightedIndex)

        const lastIndexInNextSection =
            activeSection === GRID_SECTION
                ? actionsListLength - 1
                : grid.getFirstIndexOfLastRow()

        const nextTopIndex = GridNavigation.getNextUpperIndex({
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
                ? grid.isInLastRow(highlightedIndex, gridSize)
                : isLastListIndex(highlightedIndex, actionsListLength)

        const nextLowerIndex = GridNavigation.getNextLowerIndex({
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
