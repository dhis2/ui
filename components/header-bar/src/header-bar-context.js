import { createContext, useContext } from "react";

const headerBarContext = createContext({ updateAvailable: false, onApplyAvailableUpdate: () => {} })

export const HeaderBarContextProvider = ({ updateAvailable, onApplyAvailableUpdate, children }) => {
    return <headerBarContext.Provider value={{ updateAvailable, onApplyAvailableUpdate }}>
        {children}
    </headerBarContext.Provider>
}
export const useHeaderBarContext = () => useContext(headerBarContext)