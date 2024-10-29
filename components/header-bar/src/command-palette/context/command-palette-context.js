import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const commandPaletteContext = createContext()

export const CommandPaletteContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [currentView, setCurrentView] = useState('home')
    // home view sections
    const [activeSection, setActiveSection] = useState('grid')

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
