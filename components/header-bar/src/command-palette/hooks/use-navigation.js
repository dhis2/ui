import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { ACTIONS_SECTION, HOME_VIEW } from '../utils/constants.js'
import useHomeNavigation from './use-home-navigation.js'
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
    } = useCommandPaletteContext()

    const activeItems = useMemo(() => {
        if (currentView === HOME_VIEW && activeSection === ACTIONS_SECTION) {
            return actionsArray
        }
        return itemsArray
    }, [itemsArray, actionsArray, currentView, activeSection])

    const { modalOpen, setModalOpen } = useModal(modalRef)

    const { goToDefaultView } = useViewAndSectionHandler()

    // highlight first item in filtered results
    useEffect(() => {
        setHighlightedIndex(0)
    }, [filter, setHighlightedIndex])

    const handleListNavigation = useListNavigation()
    const handleHomeNavigation = useHomeNavigation({
        actionsLength: actionsArray.length,
    })

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
            handleHomeNavigation(event)

            if (event.key === 'Escape') {
                event.preventDefault()
                setModalOpen(false)
            }
        },
        [handleHomeNavigation, setModalOpen]
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
        ]
    )

    return {
        handleKeyDown,
        modalRef,
        setModalOpen,
        showModal: modalOpen,
    }
}
