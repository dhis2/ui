import PropTypes from 'prop-types'
import React, { createContext, useContext, useMemo, useState } from 'react'
import { HOME_VIEW } from '../utils/constants.js'

const commandPaletteContext = createContext()

export const CommandPaletteContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('')
    const [currentView, setCurrentView] = useState(HOME_VIEW)

    const contextValue = useMemo(
        () => ({
            filter,
            setFilter,
            currentView,
            setCurrentView,
        }),
        [filter, currentView]
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
