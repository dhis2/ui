import React, { createContext, useContext } from 'react'

interface HeaderBarContextValue {
    updateAvailable: boolean
    onApplyAvailableUpdate: () => void
}

const headerBarContext = createContext<HeaderBarContextValue>({
    updateAvailable: false,
    onApplyAvailableUpdate: () => {},
})

export interface HeaderBarContextProviderProps {
    updateAvailable?: boolean
    onApplyAvailableUpdate?: () => void
    children?: React.ReactNode
}

export const HeaderBarContextProvider = ({
    updateAvailable,
    onApplyAvailableUpdate,
    children,
}: HeaderBarContextProviderProps) => {
    return (
        <headerBarContext.Provider
            value={{
                updateAvailable: updateAvailable ?? false,
                onApplyAvailableUpdate: onApplyAvailableUpdate ?? (() => {}),
            }}
        >
            {children}
        </headerBarContext.Provider>
    )
}

export const useHeaderBarContext = () => useContext(headerBarContext)
