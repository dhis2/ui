import PropTypes from 'prop-types'
import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import { ACTIONS_SECTION, GRID_SECTION, HOME_VIEW } from '../utils/constants.js'

const commandPaletteContext = createContext()

export const CommandPaletteContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [currentView, setCurrentView] = useState(HOME_VIEW)
    // home view sections
    const [activeSection, setActiveSection] = useState(null)
    const [showGrid, setShowGrid] = useState(null)

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

    const contextValue = useMemo(
        () => ({
            filter,
            setFilter,
            goToDefaultSection,
            goToDefaultView,
            highlightedIndex,
            setHighlightedIndex,
            currentView,
            setCurrentView,
            activeSection,
            setActiveSection,
            showGrid,
            setShowGrid,
        }),
        [
            filter,
            goToDefaultSection,
            goToDefaultView,
            highlightedIndex,
            currentView,
            activeSection,
            showGrid,
        ]
    )

    return (
        <commandPaletteContext.Provider value={contextValue}>
            {children}
        </commandPaletteContext.Provider>
    )
}
CommandPaletteContextProvider.propTypes = {
    children: PropTypes.node,
}

export const useCommandPaletteContext = () => useContext(commandPaletteContext)
