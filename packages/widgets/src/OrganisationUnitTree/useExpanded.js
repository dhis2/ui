import { useState } from 'react'
import {
    getInitiallyExpandedPaths,
    createExpandHandlers,
} from './useExpanded/helpers'

/**
 * @param {string[]} initiallyExpanded
 * @param {Function} [onExpand]
 * @param {Function} [onCollapse]
 * @returns {{ expanded: string[], handleExpand: Function, handleCollapse: Function }}
 */
export const useExpanded = (initiallyExpanded, onExpand, onCollapse) => {
    const allInitiallyExpandedPaths = getInitiallyExpandedPaths(
        initiallyExpanded
    )
    const [expanded, setExpanded] = useState(allInitiallyExpandedPaths)
    const { handleExpand, handleCollapse } = createExpandHandlers({
        expanded,
        setExpanded,
        onExpand,
        onCollapse,
    })

    return { expanded, handleExpand, handleCollapse }
}
