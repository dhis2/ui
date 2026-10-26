import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react'
import { useNodeStore } from './ou-tree-node-store-provider'
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

/** Creates one tree over the app's shared node store. */
export const OuTreeProvider = ({
    roots,
    shortName = false,
    initiallyOpen,
    children,
}: OuTreeProviderProps) => {
    const store = useNodeStore(shortName)
    // useMemo compares by identity, so the ids are joined into a string and
    // the tree is keyed on that: a new but equal array does not recreate it.
    // Uids are letters and digits, so a comma never collides. initiallyOpen
    // is read once, at creation, like an initial state.
    const rootsKey = roots.join(',')
    const initiallyOpenRef = useRef(initiallyOpen)
    const tree = useMemo(
        () =>
            createTreeState({
                store,
                roots: rootsKey === '' ? [] : rootsKey.split(','),
                initiallyOpen: initiallyOpenRef.current,
            }),
        [store, rootsKey]
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
