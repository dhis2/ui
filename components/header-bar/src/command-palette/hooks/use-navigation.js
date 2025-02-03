import { useCallback, useEffect, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { ACTIONS_SECTION, GRID_SECTION, HOME_VIEW } from '../utils/constants.js'
import useModal from './use-modal.js'

export const GRID_ITEMS_LENGTH = 8
export const MIN_APPS_NUM = GRID_ITEMS_LENGTH

export const useNavigation = ({ itemsArray, showGrid, actionsLength }) => {
    const modalRef = useRef(null)

    const {
        activeSection,
        currentView,
        filter,
        highlightedIndex,
        setHighlightedIndex,
        setFilter,
        setCurrentView,
        setActiveSection,
    } = useCommandPaletteContext()

    const { modalOpen, setModalOpen } = useModal(modalRef)

    // highlight first item in filtered results
    useEffect(() => {
        setHighlightedIndex(0)
    }, [filter, setHighlightedIndex])

    const defaultSection = showGrid ? GRID_SECTION : ACTIONS_SECTION

    const goToDefaultView = useCallback(() => {
        setFilter('')
        setCurrentView(HOME_VIEW)
        setActiveSection(defaultSection)
        setHighlightedIndex(0)
    }, [
        setActiveSection,
        setCurrentView,
        setFilter,
        setHighlightedIndex,
        defaultSection,
    ])

    const handleListViewNavigation = useCallback(
        ({ event, listLength }) => {
            const lastIndex = listLength - 1
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault()
                    setHighlightedIndex(
                        highlightedIndex >= lastIndex ? 0 : highlightedIndex + 1
                    )
                    break
                case 'ArrowUp':
                    event.preventDefault()
                    setHighlightedIndex(
                        highlightedIndex > 0 ? highlightedIndex - 1 : lastIndex
                    )
                    break
                case 'Escape':
                    event.preventDefault()
                    goToDefaultView()
                    break
                default:
                    break
            }
        },
        [goToDefaultView, highlightedIndex, setHighlightedIndex]
    )

    const handleHomeViewNavigation = useCallback(
        (event) => {
            // grid
            const gridRowLength = GRID_ITEMS_LENGTH / 2 // 4
            const topRowLastIndex = gridRowLength - 1 // 3
            const lastRowFirstIndex = gridRowLength // 4
            const lastRowLastIndex = GRID_ITEMS_LENGTH - 1 // 7

            // actions
            const lastActionIndex = actionsLength - 1

            if (showGrid) {
                switch (event.key) {
                    case 'ArrowLeft':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            // row 1
                            if (highlightedIndex <= topRowLastIndex) {
                                setHighlightedIndex(
                                    highlightedIndex > 0
                                        ? highlightedIndex - 1
                                        : topRowLastIndex
                                )
                            }
                            // row 2
                            if (highlightedIndex >= lastRowFirstIndex) {
                                setHighlightedIndex(
                                    highlightedIndex > lastRowFirstIndex
                                        ? highlightedIndex - 1
                                        : lastRowLastIndex
                                )
                            }
                        }
                        break
                    case 'ArrowRight':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            // row 1
                            if (highlightedIndex <= topRowLastIndex) {
                                setHighlightedIndex(
                                    highlightedIndex >= topRowLastIndex
                                        ? 0
                                        : highlightedIndex + 1
                                )
                            }
                            // row 2
                            if (highlightedIndex >= lastRowFirstIndex) {
                                setHighlightedIndex(
                                    highlightedIndex >= lastRowLastIndex
                                        ? lastRowFirstIndex
                                        : highlightedIndex + 1
                                )
                            }
                        }
                        break
                    case 'ArrowDown':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            if (highlightedIndex >= lastRowFirstIndex) {
                                setActiveSection(ACTIONS_SECTION)
                                setHighlightedIndex(0)
                            } else {
                                setHighlightedIndex(
                                    highlightedIndex + gridRowLength
                                )
                            }
                        } else if (activeSection === ACTIONS_SECTION) {
                            if (highlightedIndex >= actionsLength - 1) {
                                setActiveSection(GRID_SECTION)
                                setHighlightedIndex(0)
                            } else {
                                setHighlightedIndex(highlightedIndex + 1)
                            }
                        }
                        break
                    case 'ArrowUp':
                        event.preventDefault()
                        if (activeSection === GRID_SECTION) {
                            if (highlightedIndex < lastRowFirstIndex) {
                                setActiveSection(ACTIONS_SECTION)
                                setHighlightedIndex(lastActionIndex)
                            } else {
                                setHighlightedIndex(
                                    highlightedIndex - gridRowLength
                                )
                            }
                        } else if (activeSection === ACTIONS_SECTION) {
                            if (highlightedIndex <= 0) {
                                setActiveSection(GRID_SECTION)
                                setHighlightedIndex(lastRowFirstIndex)
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
                setActiveSection(defaultSection)
                setHighlightedIndex(0)
            }
        },
        [
            activeSection,
            actionsLength,
            defaultSection,
            handleListViewNavigation,
            highlightedIndex,
            setActiveSection,
            setHighlightedIndex,
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
            goToDefaultView,
            handleHomeViewNavigation,
            handleListViewNavigation,
            highlightedIndex,
            itemsArray,
            setActiveSection,
            showGrid,
        ]
    )

    return {
        handleKeyDown,
        goToDefaultView,
        modalRef,
        setModalOpen,
        showModal: modalOpen,
    }
}
