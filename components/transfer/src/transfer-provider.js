import PropTypes from 'prop-types'
import React, { createContext, useContext, useMemo, useRef } from 'react'

const TransferContext = createContext({})

export const TransferProvider = ({ children }) => {
    const sourceOptionsScrollBoxRef = useRef(null)
    const sourceOptionsListRef = useRef(null)
    const pickedOptionScrollBoxRef = useRef(null)
    const pickedOptionsListRef = useRef(null)
    const api = useMemo(
        () => ({
            sourceOptionsScrollBoxRef,
            sourceOptionsListRef,
            pickedOptionScrollBoxRef,
            pickedOptionsListRef,
            isSourceOptionsListEndVisible: () =>
                sourceOptionsListRef.current &&
                sourceOptionsScrollBoxRef.current &&
                sourceOptionsScrollBoxRef.current.clientHeight >
                    sourceOptionsListRef.current.offsetHeight,
        }),
        []
    )
    return (
        <TransferContext.Provider value={api}>
            {children}
        </TransferContext.Provider>
    )
}

TransferProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

/* HOOKS */
export const useOptionsListRefs = (selected) => {
    const context = useContext(TransferContext)
    return useMemo(
        () => ({
            scrollBoxRef: selected
                ? context.pickedOptionScrollBoxRef
                : context.sourceOptionsScrollBoxRef,
            listRef: selected
                ? context.pickedOptionsListRef
                : context.sourceOptionsListRef,
        }),
        [context, selected]
    )
}

export const useIsSourceOptionsListEndVisible = () => {
    const { isSourceOptionsListEndVisible } = useContext(TransferContext)
    return isSourceOptionsListEndVisible
}
