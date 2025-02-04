import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ACTIONS_SECTION,
    GRID_COLUMNS,
    GRID_ROWS,
    GRID_SECTION,
    HOME_VIEW,
} from '../utils/constants.js'
import useGrid from './use-grid.js'
import useListNavigation from './use-list-navigation.js'
import useModal from './use-modal.js'
import useViewAndSectionHandler from './use-view-handler.js'

export const useNavigation = ({ itemsArray, actionsArray }) => {
    const modalRef = useRef(null)

    const {
        activeSection,
        currentView,
        filter,
        highlightedIndex,
        setHighlightedIndex,
        setActiveSection,
        showGrid,
    } = useCommandPaletteContext()

    const actionsLength = actionsArray?.length || 0

    const activeItems = useMemo(() => {
        if (currentView === HOME_VIEW && activeSection === ACTIONS_SECTION) {
            return actionsArray
        }
        return itemsArray
    }, [itemsArray, actionsArray, currentView, activeSection])

    const { modalOpen, setModalOpen } = useModal(modalRef)

    const { goToDefaultView } = useViewAndSectionHandler()

    const { nextLeftIndex, nextRightIndex, lastRowFirstIndex } = useGrid({
        columns: GRID_COLUMNS,
        rows: GRID_ROWS,
    })

    // highlight first item in filtered results
    useEffect(() => {
        setHighlightedIndex(0)
    }, [filter, setHighlightedIndex])

    const switchActiveSection = useCallback(
        ({ section, index }) => {
            setActiveSection(section)
            setHighlightedIndex(index)
        },
        [setActiveSection, setHighlightedIndex]
    )

    const handleListNavigation = useListNavigation()

    const handleListViewNavigation = useCallback(
        ({ event, listLength }) => {
            handleListNavigation({ event, listLength })

            if (event.key === 'Escape') {
                event.preventDefault()
                goToDefaultView()
            }
        },
        [handleListNavigation, goToDefaultView]
    )

    const handleHomeViewNavigation = useCallback(
        (event) => {
            // grid
            const verticalPositionGap = GRID_COLUMNS

            // actions
            const lastActionIndex = actionsLength - 1

            if (showGrid) {
                switch (event.key) {
                    case 'ArrowLeft':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            setHighlightedIndex(nextLeftIndex)
                        }
                        break
                    case 'ArrowRight':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            setHighlightedIndex(nextRightIndex)
                        }
                        break
                    case 'ArrowDown':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            if (highlightedIndex >= lastRowFirstIndex) {
                                switchActiveSection({
                                    section: ACTIONS_SECTION,
                                    index: 0,
                                })
                            } else {
                                setHighlightedIndex(
                                    highlightedIndex + verticalPositionGap
                                )
                            }
                        } else if (activeSection === ACTIONS_SECTION) {
                            if (highlightedIndex >= actionsLength - 1) {
                                switchActiveSection({
                                    section: GRID_SECTION,
                                    index: 0,
                                })
                            } else {
                                setHighlightedIndex(highlightedIndex + 1)
                            }
                        }
                        break
                    case 'ArrowUp':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            if (highlightedIndex < lastRowFirstIndex) {
                                switchActiveSection({
                                    section: ACTIONS_SECTION,
                                    index: lastActionIndex,
                                })
                            } else {
                                setHighlightedIndex(
                                    highlightedIndex - verticalPositionGap
                                )
                            }
                        } else if (activeSection === ACTIONS_SECTION) {
                            if (highlightedIndex <= 0) {
                                switchActiveSection({
                                    section: GRID_SECTION,
                                    index: lastRowFirstIndex,
                                })
                            } else {
                                setHighlightedIndex(highlightedIndex - 1)
                            }
                        }
                        break
                    default:
                        break
                }
            } else {
                if (activeSection === ACTIONS_SECTION) {
                    handleListViewNavigation({
                        event,
                        listLength: actionsLength,
                    })
                }
            }

            if (event.key === 'Escape') {
                event.preventDefault()
                setModalOpen(false)
            }
        },
        [
            activeSection,
            actionsLength,
            handleListViewNavigation,
            highlightedIndex,
            nextLeftIndex,
            nextRightIndex,
            lastRowFirstIndex,
            setModalOpen,
            showGrid,
            switchActiveSection,
            setHighlightedIndex,
        ]
    )

    const handleKeyDown = useCallback(
        (event) => {
            if (currentView === HOME_VIEW) {
                if (filter.length > 0) {
                    // search mode
                    handleListViewNavigation({
                        event,
                        listLength: activeItems.length,
                    })
                } else {
                    handleHomeViewNavigation(event)
                }
            } else {
                setActiveSection(null)
                handleListViewNavigation({
                    event,
                    listLength: activeItems.length,
                })
            }

            if (event.key === 'Enter') {
                const activeItem = activeItems[highlightedIndex]

                if (activeItem?.['action']) {
                    activeItem?.['action']?.()
                } else if (activeItem?.['defaultAction']) {
                    window.open(activeItem?.['defaultAction'])
                }
                // TODO: execute commands, shortcuts
            }
        },
        [
            activeItems,
            currentView,
            filter.length,
            handleHomeViewNavigation,
            handleListViewNavigation,
            highlightedIndex,
            setActiveSection,
        ]
    )

    return {
        handleKeyDown,
        modalRef,
        setModalOpen,
        showModal: modalOpen,
    }
}
