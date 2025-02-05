import { useCallback } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ACTIONS_SECTION,
    GRID_COLUMNS,
    GRID_ROWS,
    GRID_SECTION,
} from '../utils/constants.js'
import useGrid from './use-grid.js'
import useListNavigation from './use-list-navigation.js'

const useHomeNavigation = ({ actionsLength }) => {
    const {
        highlightedIndex,
        setHighlightedIndex,
        showGrid,
        activeSection,
        setActiveSection,
    } = useCommandPaletteContext()

    const gridVerticalGap = GRID_COLUMNS
    const verticalGap = activeSection === GRID_SECTION ? gridVerticalGap : 1

    const nextSection =
        activeSection === GRID_SECTION ? ACTIONS_SECTION : GRID_SECTION

    const {
        nextLeftIndex,
        nextRightIndex,
        lastRowFirstIndex,
        isInFirstRow,
        isInLastRow,
    } = useGrid({
        columns: GRID_COLUMNS,
        rows: GRID_ROWS,
    })
    const handleListNavigation = useListNavigation()

    const isFirstListIndex = (index) => index <= 0
    const isLastListIndex = (index, listLength) => index >= listLength - 1

    const getNextUpperIndex = useCallback(
        ({ isTopIndexInCurrentSection, lastIndexInNextSection }) => {
            if (isTopIndexInCurrentSection) {
                setActiveSection(nextSection)
                return lastIndexInNextSection
            } else {
                return highlightedIndex - verticalGap
            }
        },
        [setActiveSection, highlightedIndex, nextSection, verticalGap]
    )

    const getNextLowerIndex = useCallback(
        ({ isLastIndexInCurrentSection }) => {
            if (isLastIndexInCurrentSection) {
                setActiveSection(nextSection)
                return 0
            } else {
                return highlightedIndex + verticalGap
            }
        },
        [highlightedIndex, setActiveSection, nextSection, verticalGap]
    )

    const handleHomeNavigation = useCallback(
        (event) => {
            let nextTopIndex
            let nextLowerIndex

            if (showGrid) {
                if (activeSection === GRID_SECTION) {
                    switch (event.key) {
                        case 'ArrowLeft':
                            event.preventDefault()
                            setHighlightedIndex(nextLeftIndex)
                            break
                        case 'ArrowRight':
                            event.preventDefault()
                            setHighlightedIndex(nextRightIndex)
                            break
                        case 'ArrowDown':
                            event.preventDefault()
                            nextLowerIndex = getNextLowerIndex({
                                isLastIndexInCurrentSection:
                                    isInLastRow(highlightedIndex),
                            })
                            setHighlightedIndex(nextLowerIndex)
                            break
                        case 'ArrowUp':
                            event.preventDefault()
                            nextTopIndex = getNextUpperIndex({
                                isTopIndexInCurrentSection:
                                    isInFirstRow(highlightedIndex),
                                lastIndexInNextSection: actionsLength - 1,
                            })
                            setHighlightedIndex(nextTopIndex)
                            break
                        default:
                            break
                    }
                } else if (activeSection === ACTIONS_SECTION) {
                    switch (event.key) {
                        case 'ArrowDown':
                            event.preventDefault()
                            nextLowerIndex = getNextLowerIndex({
                                isLastIndexInCurrentSection: isLastListIndex(
                                    highlightedIndex,
                                    actionsLength
                                ),
                            })
                            setHighlightedIndex(nextLowerIndex)
                            break
                        case 'ArrowUp':
                            event.preventDefault()
                            nextTopIndex = getNextUpperIndex({
                                isTopIndexInCurrentSection:
                                    isFirstListIndex(highlightedIndex),
                                lastIndexInNextSection: lastRowFirstIndex,
                            })
                            setHighlightedIndex(nextTopIndex)
                            break
                        default:
                            break
                    }
                }
            } else {
                handleListNavigation({ event, listLength: actionsLength })
            }
        },
        [
            actionsLength,
            activeSection,
            getNextLowerIndex,
            getNextUpperIndex,
            handleListNavigation,
            highlightedIndex,
            isInFirstRow,
            isInLastRow,
            lastRowFirstIndex,
            nextLeftIndex,
            nextRightIndex,
            setHighlightedIndex,
            showGrid,
        ]
    )
    return handleHomeNavigation
}

export default useHomeNavigation
