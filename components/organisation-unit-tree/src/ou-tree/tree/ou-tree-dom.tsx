import React, { createContext, useContext, useRef, useState } from 'react'

interface OuTreeDom {
    /** Prefix of this tree's row element ids, unique per tree on the page. */
    treeId: string
    /** The element that takes focus for the tree: the list's container. */
    focusTarget: React.MutableRefObject<HTMLElement | null>
    /** Called by the list with its container, and with null when it unmounts. */
    registerFocusTarget: (element: HTMLElement | null) => void
}

const DomContext = createContext<OuTreeDom | undefined>(undefined)

// The peer range includes React 16, so ids come from a counter, not useId.
let nextTreeId = 1

/** The DOM-side context of one tree: its element id prefix and focus target. */
export const OuTreeDomProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [treeId] = useState(() => `outree-${nextTreeId++}`)
    const focusTarget = useRef<HTMLElement | null>(null)
    const [value] = useState<OuTreeDom>(() => ({
        treeId,
        focusTarget,
        registerFocusTarget: (element) => {
            focusTarget.current = element
        },
    }))
    return <DomContext.Provider value={value}>{children}</DomContext.Provider>
}

const useOuTreeDom = (): OuTreeDom => {
    const dom = useContext(DomContext)
    if (!dom) {
        throw new Error('OuTree hooks need an OuTreeProvider above them')
    }
    return dom
}

/** The element id of a row, for `aria-activedescendant`. */
export const useOuTreeRowElementId = (key: string): string =>
    `${useOuTreeDom().treeId}-${key}`

/** The ref the list registers its container in, so others can focus the tree. */
export const useOuTreeFocusTarget =
    (): React.MutableRefObject<HTMLElement | null> => useOuTreeDom().focusTarget

/** The list's registration of its container as the focus target. */
export const useOuTreeRegisterFocusTarget = (): ((
    element: HTMLElement | null
) => void) => useOuTreeDom().registerFocusTarget
