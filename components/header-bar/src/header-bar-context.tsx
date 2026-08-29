import React, { createContext, useContext, useMemo } from 'react'

interface HeaderBarContextValue {
    updateAvailable: boolean
    onApplyAvailableUpdate: () => void
}

const noop = () => undefined

const headerBarContext = createContext<HeaderBarContextValue>({
    updateAvailable: false,
    onApplyAvailableUpdate: noop,
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
    const value = useMemo(
        () => ({
            updateAvailable: updateAvailable ?? false,
            onApplyAvailableUpdate: onApplyAvailableUpdate ?? noop,
        }),
        [onApplyAvailableUpdate, updateAvailable]
    )

    return (
        <headerBarContext.Provider value={value}>
            {children}
        </headerBarContext.Provider>
    )
}

export const useHeaderBarContext = () => useContext(headerBarContext)
