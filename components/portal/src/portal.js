import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children, node, disable }) => {
    const [mountNode, setMountNode] = useState(null)

    useEffect(() => {
        setMountNode(node || document.body)
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
