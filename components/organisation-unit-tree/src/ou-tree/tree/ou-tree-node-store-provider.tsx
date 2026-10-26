import React, { createContext, useContext, useMemo, useRef } from 'react'
import { useTreeApi } from '../data/index'
import { createNodeStore, NodeStore } from '../node-store/index'

interface NodeStores {
    getStore(shortName: boolean): NodeStore
}

const NodeStoreContext = createContext<NodeStores | undefined>(undefined)

/**
 * Wrap the app in this once; every tree in it shares loaded org units.
 * Trees using short names and trees using full names each share among
 * themselves, since the same unit has a different display name in each.
 */
export const OuTreeNodeStoreProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const api = useTreeApi()
    const stores = useRef<{ full?: NodeStore; short?: NodeStore }>({})
    const value = useMemo<NodeStores>(
        () => ({
            getStore: (shortName) => {
                const key = shortName ? 'short' : 'full'
                const existing = stores.current[key]
                if (existing) {
                    return existing
                }
                const created = createNodeStore({ api, shortName })
                stores.current[key] = created
                return created
            },
        }),
        [api]
    )
    return (
        <NodeStoreContext.Provider value={value}>
            {children}
        </NodeStoreContext.Provider>
    )
}

export const useNodeStore = (shortName: boolean): NodeStore => {
    const stores = useContext(NodeStoreContext)
    if (!stores) {
        throw new Error('OuTree needs an OuTreeNodeStoreProvider above it')
    }
    return stores.getStore(shortName)
}
