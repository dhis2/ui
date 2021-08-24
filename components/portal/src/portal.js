import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/*
 * #dhis2-portal-root is provided by the App Platform and will be used by
 * default.
 *
 * For non-platform apps, the mount node can be added manually to the HTML
 * template.
 *
 * As a fallback, portals will be attached to the document body.
 */
const defaultNode =
    document.getElementById('dhis2-portal-root') || document.body

export const Portal = ({ children, node, disable }) => {
    const [mountNode, setMountNode] = useState(null)

    useEffect(() => {
        setMountNode(node || defaultNode)
    }, [node])

    if (disable) {
        return children
    }

    return mountNode ? createPortal(children, mountNode) : mountNode
}

Portal.propTypes = {
    children: PropTypes.node,
    disable: PropTypes.bool,
    node: PropTypes.node,
}
