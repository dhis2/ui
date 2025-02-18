import { useCallback, useMemo, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { GRID_SECTION, HOME_VIEW } from '../utils/constants.js'
import { handleHomeNavigation } from '../utils/home-navigation.js'
import { handleListNavigation } from '../utils/list-navigation.js'
import useModal from './use-modal.js'

export const useNavigation = ({ itemsArray, actionsArray, gridLayout }) => {
    const modalRef = useRef(null)

    const {
        activeSection,
        currentView,
        filter,
        highlightedIndex,
        setHighlightedIndex,
        showGrid,
        setActiveSection,
        goToDefaultView,
    } = useCommandPaletteContext()

    const activeItems = useMemo(() => {
        if (filter) {
            return itemsArray
        }

        if (currentView === HOME_VIEW) {
            if (activeSection === GRID_SECTION) {
                return itemsArray
            } else {
                return actionsArray
            }
        } else {
            return actionsArray.concat(itemsArray)
        }
    }, [filter, itemsArray, actionsArray, currentView, activeSection])

    const { modalOpen, setModalOpen } = useModal(modalRef)

    const handleListViewNavigation = useCallback(
        ({ event, listLength }) => {
            const index = handleListNavigation({
                event,
                listLength,
                highlightedIndex,
            })
            setHighlightedIndex(index)

            if (!filter.length && event.key === 'Backspace') {
                event.preventDefault()
                goToDefaultView()
            }
        },
        [filter, goToDefaultView, highlightedIndex, setHighlightedIndex]
    )

    const handleHomeViewNavigation = useCallback(
        (event) => {
            const actionsListLength = actionsArray.length

            if (showGrid) {
                const { columns, rows, size } = gridLayout

                const { section, index } = handleHomeNavigation({
                    event,
                    activeSection,
                    rows,
                    columns,
                    highlightedIndex,
                    actionsListLength,
                    gridSize: size,
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
        },
        [
            actionsArray,
            activeSection,
            highlightedIndex,
            showGrid,
            setActiveSection,
            setHighlightedIndex,
            gridLayout,
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

            switch (event.key) {
                case 'Escape':
                    event.preventDefault()
                    setModalOpen(false)
                    break
                case 'Enter':
                    event.preventDefault()
                    activeItems[highlightedIndex]?.['action']?.()
                    break
                case 'Tab':
                    event.preventDefault()
                    break
                default:
                    break
            }
        },
        [
            activeItems,
            currentView,
            filter.length,
            handleHomeViewNavigation,
            handleListViewNavigation,
            highlightedIndex,
            setModalOpen,
        ]
    )

    return {
        handleKeyDown,
        modalRef,
        setModalOpen,
        showModal: modalOpen,
    }
}
