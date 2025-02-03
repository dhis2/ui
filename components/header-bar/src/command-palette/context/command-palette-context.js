import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'
import { HOME_VIEW } from '../utils/constants.js'

const commandPaletteContext = createContext()

export const CommandPaletteContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [currentView, setCurrentView] = useState(HOME_VIEW)
    // home view sections
    const [activeSection, setActiveSection] = useState(null)

    return (
        <commandPaletteContext.Provider
            value={{
                filter,
                setFilter,
                highlightedIndex,
                setHighlightedIndex,
                currentView,
                setCurrentView,
                activeSection,
                setActiveSection,
            }}
        >
            {children}
        </commandPaletteContext.Provider>
    )
}
CommandPaletteContextProvider.propTypes = {
    children: PropTypes.node,
}

export const useCommandPaletteContext = () => useContext(commandPaletteContext)
