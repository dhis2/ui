import { useCallback } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { ACTIONS_SECTION, GRID_SECTION, HOME_VIEW } from '../utils/constants.js'

const useViewAndSectionHandler = () => {
    const {
        setHighlightedIndex,
        setFilter,
        setCurrentView,
        setActiveSection,
        showGrid,
    } = useCommandPaletteContext()

    const goToDefaultSection = useCallback(() => {
        const defaultSection = showGrid ? GRID_SECTION : ACTIONS_SECTION
        setActiveSection(defaultSection)
        setHighlightedIndex(0)
    }, [showGrid, setActiveSection, setHighlightedIndex])

    const goToDefaultView = useCallback(() => {
        setFilter('')
        setCurrentView(HOME_VIEW)
        goToDefaultSection()
    }, [setCurrentView, setFilter, goToDefaultSection])

    return {
        goToDefaultView,
        goToDefaultSection,
    }
}

export default useViewAndSectionHandler
