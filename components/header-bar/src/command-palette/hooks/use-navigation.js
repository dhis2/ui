import { useCallback, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'

export const GRID_ITEMS_LENGTH = 8

export const useNavigation = ({ setShow, itemsArray, show }) => {
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

    const goToDefaultView = useCallback(() => {
        setFilter('')
        setCurrentView('home')
        setActiveSection('grid')
        setHighlightedIndex(0)
    }, [setActiveSection, setCurrentView, setFilter, setHighlightedIndex])

    const handleListViewNavigation = useCallback(
        (event) => {
            const lastIndex = itemsArray.length - 1
            switch (event.key) {
                case 'ArrowDown':
                    setHighlightedIndex(
                        highlightedIndex >= lastIndex ? 0 : highlightedIndex + 1
                    )
                    break
                case 'ArrowUp':
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
        [
            goToDefaultView,
            highlightedIndex,
            itemsArray.length,
            setHighlightedIndex,
        ]
    )

    const handleHomeViewNavigation = useCallback(
        (event) => {
            // grid
            const gridRowLength = GRID_ITEMS_LENGTH / 2
            const topRowLastIndex = gridRowLength - 1
            const lastRowFirstIndex = gridRowLength
            const lastRowLastIndex = GRID_ITEMS_LENGTH - 1

            switch (event.key) {
                case 'ArrowLeft':
                    if (activeSection === 'grid') {
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
                    if (activeSection === 'grid') {
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
                    if (activeSection === 'grid') {
                        if (highlightedIndex >= lastRowFirstIndex) {
                            setActiveSection('actions')
                            setHighlightedIndex(0)
                        } else {
                            setHighlightedIndex(
                                highlightedIndex + gridRowLength
                            )
                        }
                    } else if (activeSection === 'actions') {
                        if (highlightedIndex >= 3) {
                            setActiveSection('grid')
                            setHighlightedIndex(0)
                        } else {
                            setHighlightedIndex(highlightedIndex + 1)
                        }
                    }
                    break
                case 'ArrowUp':
                    if (activeSection === 'grid') {
                        if (highlightedIndex < lastRowFirstIndex) {
                            setActiveSection('actions')
                            setHighlightedIndex(3)
                        } else {
                            setHighlightedIndex(
                                highlightedIndex - gridRowLength
                            )
                        }
                    } else if (activeSection === 'actions') {
                        if (highlightedIndex <= 0) {
                            setActiveSection('grid')
                            setHighlightedIndex(lastRowFirstIndex)
                        } else {
                            setHighlightedIndex(highlightedIndex - 1)
                        }
                    }
                    break
                case 'Escape':
                    event.preventDefault()
                    setShow(false)
                    setActiveSection('grid')
                    setHighlightedIndex(0)
                    break
                default:
                    break
            }
        },
        [
            activeSection,
            highlightedIndex,
            setActiveSection,
            setHighlightedIndex,
            setShow,
        ]
    )

    const handleKeyDown = useCallback(
        (event) => {
            const modal = modalRef.current

            if (currentView === 'home') {
                if (filter.length > 0) {
                    // search mode
                    handleListViewNavigation(event)
                } else {
                    handleHomeViewNavigation(event)
                }
            } else {
                setActiveSection(null)
                handleListViewNavigation(event)
            }

            if ((event.metaKey || event.ctrlKey) && event.key === '/') {
                setShow(!show)
                goToDefaultView()
            }

            if (event.key === 'Enter') {
                if (activeSection === 'grid') {
                    window.open(itemsArray[highlightedIndex]?.['defaultAction'])
                } else if (activeSection === 'actions') {
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
            setShow,
            show,
        ]
    )

    return {
        handleKeyDown,
        goToDefaultView,
        modalRef,
        activeSection,
        setActiveSection,
    }
}
