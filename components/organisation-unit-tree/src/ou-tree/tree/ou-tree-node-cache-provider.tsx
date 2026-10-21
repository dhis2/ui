import React, { createContext, useContext, useMemo, useRef } from 'react'
import { createNodeCache, NodeCache } from '../cache/index'
import { useTreeApi } from '../data/index'

interface NodeCaches {
    getCache(shortName: boolean): NodeCache
}

const NodeCacheContext = createContext<NodeCaches | undefined>(undefined)

/**
 * Wrap the app in this once; every tree in it shares loaded org units.
 * Trees using short names and trees using full names each share among
 * themselves, since the same unit has a different display name in each.
 */
export const OuTreeNodeCacheProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const api = useTreeApi()
    const caches = useRef<{ full?: NodeCache; short?: NodeCache }>({})
    const value = useMemo<NodeCaches>(
        () => ({
            getCache: (shortName) => {
                const key = shortName ? 'short' : 'full'
                const existing = caches.current[key]
                if (existing) {
                    return existing
                }
                const created = createNodeCache({ api, shortName })
                caches.current[key] = created
                return created
            },
        }),
        [api]
    )
    return (
        <NodeCacheContext.Provider value={value}>
            {children}
        </NodeCacheContext.Provider>
    )
}

export const useNodeCache = (shortName: boolean): NodeCache => {
    const caches = useContext(NodeCacheContext)
    if (!caches) {
        throw new Error('OuTree needs an OuTreeNodeCacheProvider above it')
    }
    return caches.getCache(shortName)
}
