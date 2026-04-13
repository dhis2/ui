import React, { useState, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

/*
 * #dhis2-portal-root is provided by the App Platform and will be used by
 * default.
 *
 * For non-platform apps, the mount node can be added manually to the HTML
 * template.
 *
 * As a fallback, portals will be attached to the document body.
 *
 * This needs to be a function so that it works in tests as well.
 */
const getDefaultNode = (): Element =>
    document.getElementById('dhis2-portal-root') || document.body

export interface PortalProps {
    children?: ReactNode
    node?: Element
    disable?: boolean
}

export const Portal = ({ children, node, disable }: PortalProps) => {
    const [mountNode, setMountNode] = useState<Element | null>(null)

    useEffect(() => {
        setMountNode(node || getDefaultNode())
    }, [node])

    if (disable) {
        return <>{children}</>
    }

    return mountNode ? createPortal(children, mountNode) : null
}
