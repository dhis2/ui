import { useCallback, useEffect, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'

export const GRID_ITEMS_LENGTH = 8
export const MIN_APPS_NUM = GRID_ITEMS_LENGTH

export const useNavigation = ({
    setShow,
    itemsArray,
    show,
    showGrid,
    actionsLength,
}) => {
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

    // highlight first item in filtered results
    useEffect(() => {
        setHighlightedIndex(0)
    }, [filter, setHighlightedIndex])

    const defaultSection = showGrid ? 'grid' : 'actions'

    const goToDefaultView = useCallback(() => {
        setFilter('')
        setCurrentView('home')
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
                        event.preventDefault()
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
                        event.preventDefault()
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
                            if (highlightedIndex >= actionsLength - 1) {
                                setActiveSection('grid')
                                setHighlightedIndex(0)
                            } else {
                                setHighlightedIndex(highlightedIndex + 1)
                            }
                        }
                        break
                    case 'ArrowUp':
                        event.preventDefault()
                        if (activeSection === 'grid') {
                            if (highlightedIndex < lastRowFirstIndex) {
                                setActiveSection('actions')
                                setHighlightedIndex(lastActionIndex)
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
                    default:
                        break
                }
            } else {
                if (activeSection === 'actions') {
                    handleListViewNavigation({
                        event,
                        listLength: actionsLength,
                    })
                }
            }

            if (event.key === 'Escape') {
                event.preventDefault()
                setShow(false)
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
            setShow,
        ]
    )

    const handleKeyDown = useCallback(
        (event) => {
            const modal = modalRef.current

            if (currentView === 'home') {
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

            if ((event.metaKey || event.ctrlKey) && event.key === '/') {
                setShow((show) => !show)
                goToDefaultView()
            }

            if (event.key === 'Enter') {
                if (activeSection === 'actions') {
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
            showGrid,
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
