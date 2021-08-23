import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
