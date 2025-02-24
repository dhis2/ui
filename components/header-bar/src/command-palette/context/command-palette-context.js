import PropTypes from 'prop-types'
import React, { createContext, useContext, useMemo, useState } from 'react'
import { HOME_VIEW } from '../utils/constants.js'

const commandPaletteContext = createContext()

export const CommandPaletteContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [currentView, setCurrentView] = useState(HOME_VIEW)
    // home view sections
    const [activeSection, setActiveSection] = useState(null)
    const [showGrid, setShowGrid] = useState(null)

    const contextValue = useMemo(
        () => ({
            filter,
            setFilter,
            highlightedIndex,
            setHighlightedIndex,
            currentView,
            setCurrentView,
            activeSection,
            setActiveSection,
            showGrid,
            setShowGrid,
        }),
        [filter, highlightedIndex, currentView, activeSection, showGrid]
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
