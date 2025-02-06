import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ACTIONS_SECTION,
    GRID_COLUMNS,
    GRID_ROWS,
    GRID_SECTION,
    HOME_VIEW,
} from '../utils/constants.js'
import { handleHomeNavigation } from '../utils/home-navigation.js'
import { handleListNavigation } from '../utils/list-navigation.js'
import useModal from './use-modal.js'

export const useNavigation = ({ itemsArray, actionsArray }) => {
    const modalRef = useRef(null)

    const {
        activeSection,
        currentView,
        filter,
        highlightedIndex,
        setHighlightedIndex,
        showGrid,
        setActiveSection,
        setFilter,
        setCurrentView,
    } = useCommandPaletteContext()

    const activeItems = useMemo(() => {
        if (currentView === HOME_VIEW && activeSection === ACTIONS_SECTION) {
            return actionsArray
        }
        return itemsArray
    }, [itemsArray, actionsArray, currentView, activeSection])

    const { modalOpen, setModalOpen } = useModal(modalRef)

    const goToDefaultView = useCallback(() => {
        const defaultSection = showGrid ? GRID_SECTION : ACTIONS_SECTION

        setFilter('')
        setCurrentView(HOME_VIEW)
        setActiveSection(defaultSection)
        setHighlightedIndex(0)
    }, [
        showGrid,
        setCurrentView,
        setFilter,
        setActiveSection,
        setHighlightedIndex,
    ])

    // highlight first item in filtered results
    useEffect(() => {
        setHighlightedIndex(0)
    }, [filter, setHighlightedIndex])

    const handleListViewNavigation = useCallback(
        ({ event, listLength }) => {
            const index = handleListNavigation({
                event,
                listLength,
                highlightedIndex,
            })
            setHighlightedIndex(index)

            if (event.key === 'Escape') {
                event.preventDefault()
                goToDefaultView()
            }
        },
        [goToDefaultView, highlightedIndex, setHighlightedIndex]
    )

    const handleHomeViewNavigation = useCallback(
        (event) => {
            const actionsListLength = actionsArray.length

            if (showGrid) {
                const { section, index } = handleHomeNavigation({
                    event,
                    activeSection,
                    showGrid,
                    rows: GRID_ROWS,
                    columns: GRID_COLUMNS,
                    highlightedIndex,
                    actionsListLength,
                })
                setActiveSection(section)
                setHighlightedIndex(index)
            } else {
                const index = handleListNavigation({
                    event,
                    listLength: actionsListLength,
                    highlightedIndex,
                })
                setHighlightedIndex(index)
            }

            if (event.key === 'Escape') {
                event.preventDefault()
                setModalOpen(false)
            }
        },
        [
            actionsArray,
            activeSection,
            highlightedIndex,
            showGrid,
            setActiveSection,
            setHighlightedIndex,
            setModalOpen,
        ]
    )

    const handleKeyDown = useCallback(
        (event) => {
            if (currentView === HOME_VIEW && filter?.length === 0) {
                handleHomeViewNavigation(event)
            } else {
                handleListViewNavigation({
                    event,
                    listLength: activeItems.length,
                })
            }

            if (event.key === 'Enter') {
                activeItems[highlightedIndex]?.['action']?.()
            }
        },
        [
            activeItems,
            currentView,
            filter.length,
            handleHomeViewNavigation,
            handleListViewNavigation,
            highlightedIndex,
        ]
    )

    return {
        handleKeyDown,
        modalRef,
        setModalOpen,
        showModal: modalOpen,
        goToDefaultView,
    }
}
