import { useCallback } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { HOME_VIEW } from '../utils/constants.js'

const useViewHandler = ({ section }) => {
    const { setHighlightedIndex, setFilter, setCurrentView, setActiveSection } =
        useCommandPaletteContext()

    const goToDefaultView = useCallback(() => {
        setFilter('')
        setCurrentView(HOME_VIEW)
        setActiveSection(section)
        setHighlightedIndex(0)
    }, [
        setActiveSection,
        setCurrentView,
        setFilter,
        setHighlightedIndex,
        section,
    ])

    return goToDefaultView
}

export default useViewHandler
