import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const headerBarContext = createContext({
    updateAvailable: false,
    onApplyAvailableUpdate: () => {},
})

export const HeaderBarContextProvider = ({
    updateAvailable,
    onApplyAvailableUpdate,
    children,
}) => {
    return (
        <headerBarContext.Provider
            value={{ updateAvailable, onApplyAvailableUpdate }}
        >
            {children}
        </headerBarContext.Provider>
    )
}
HeaderBarContextProvider.propTypes = {
    children: PropTypes.node,
    updateAvailable: PropTypes.bool,
    onApplyAvailableUpdate: PropTypes.func,
}

export const useHeaderBarContext = () => useContext(headerBarContext)
