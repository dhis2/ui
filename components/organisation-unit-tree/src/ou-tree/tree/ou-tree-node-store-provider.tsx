import React, { createContext, useContext, useMemo, useRef } from 'react'
import { useTreeApi } from '../data/index'
import { createNodeStore, NodeStore } from '../node-store/index'

/** The app's stores, one per `shortName` value, created on first use. */
interface NodeStoreRegistry {
    getStore(shortName: boolean): NodeStore
}

const NodeStoreContext = createContext<NodeStoreRegistry | undefined>(undefined)

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
    const storesByNameVariant = useRef<{ full?: NodeStore; short?: NodeStore }>(
        {}
    )
    const registry = useMemo<NodeStoreRegistry>(
        () => ({
            getStore: (shortName) => {
                const key = shortName ? 'short' : 'full'
                const existing = storesByNameVariant.current[key]
                if (existing) {
                    return existing
                }
                const created = createNodeStore({ api, shortName })
                storesByNameVariant.current[key] = created
                return created
            },
        }),
        [api]
    )
    return (
        <NodeStoreContext.Provider value={registry}>
            {children}
        </NodeStoreContext.Provider>
    )
}

/** The app's store for the given `shortName`, from the enclosing provider. */
export const useNodeStore = (shortName: boolean): NodeStore => {
    const registry = useContext(NodeStoreContext)
    if (!registry) {
        throw new Error('OuTree needs an OuTreeNodeStoreProvider above it')
    }
    return registry.getStore(shortName)
}
