import { useCallback, useEffect, useRef } from 'react'
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

export const useNavigation = ({ itemsArray, actionsLength }) => {
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

    const { modalOpen, setModalOpen } = useModal(modalRef)

    const { goToDefaultSection, goToDefaultView } = useViewAndSectionHandler()

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
                goToDefaultSection()
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
            goToDefaultSection,
        ]
    )

    const handleKeyDown = useCallback(
        (event) => {
            const modal = modalRef.current.childNodes[0]

            if (currentView === HOME_VIEW) {
                if (filter.length > 0) {
                    // search mode
                    handleListViewNavigation({
                        event,
                        listLength: itemsArray.length,
                    })
                } else {
                    handleHomeViewNavigation(event)
                }
            } else {
                setActiveSection(null)
                handleListViewNavigation({
                    event,
                    listLength: itemsArray.length,
                })
            }

            if (event.key === 'Enter') {
                if (activeSection === ACTIONS_SECTION) {
                    modal
                        ?.querySelector('.actions-menu')
                        ?.childNodes?.[highlightedIndex]?.click()
                } else {
                    // open apps, shortcuts link
                    window.open(itemsArray[highlightedIndex]?.['defaultAction'])
                    // TODO: execute commands
                }
            }
        },
        [
            activeSection,
            currentView,
            filter.length,
            handleHomeViewNavigation,
            handleListViewNavigation,
            highlightedIndex,
            itemsArray,
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
