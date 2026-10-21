import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react'
import { useNodeCache } from './ou-tree-node-cache-provider'
import { createTreeState, TreeState } from './tree-state'

const TreeContext = createContext<TreeState | undefined>(undefined)

export interface OuTreeProviderProps {
    /** Root org unit ids; a root under another listed root is not shown. */
    roots: string[]
    /** Show short names instead of names. */
    shortName?: boolean
    /** Ids open from the start, requesting their first children page. */
    initiallyOpen?: string[]
    children: React.ReactNode
}

/** Creates one tree over the app's shared node cache. */
export const OuTreeProvider = ({
    roots,
    shortName = false,
    initiallyOpen,
    children,
}: OuTreeProviderProps) => {
    const cache = useNodeCache(shortName)
    // Keyed on the ids, not the array, so a parent re-rendering with a new
    // but equal array does not recreate the tree. initiallyOpen is read
    // once, at creation, like an initial state.
    const rootsKey = roots.join('\u0000')
    const initiallyOpenRef = useRef(initiallyOpen)
    const tree = useMemo(
        () =>
            createTreeState({
                cache,
                roots: rootsKey === '' ? [] : rootsKey.split('\u0000'),
                initiallyOpen: initiallyOpenRef.current,
            }),
        [cache, rootsKey]
    )
    // Requests start from an effect, never during render, so a tree React
    // creates and discards (StrictMode) requests nothing.
    useEffect(() => {
        tree.start()
    }, [tree])
    return <TreeContext.Provider value={tree}>{children}</TreeContext.Provider>
}

export const useTreeState = (hook: string): TreeState => {
    const tree = useContext(TreeContext)
    if (!tree) {
        throw new Error(`${hook} must be used inside an OuTreeProvider`)
    }
    return tree
}
