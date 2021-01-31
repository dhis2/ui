import propTypes from '@dhis2/prop-types'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * @module
 * @param {Portal.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Portal } from '@dhis2/ui-core'
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {boolean} [disable] disables the portal
 * @prop {Node} [node]
 */
Portal.propTypes = {
    children: propTypes.node,
    disable: propTypes.bool,
    node: propTypes.node,
}
