import { useState } from 'react'
import { getAllExpandedPaths } from '../../get-all-expanded-paths/index.js'
import { createExpandHandlers } from './create-expand-handlers.js'

const checkIsControlled = ({
    expandedControlled,
    handleExpandControlled,
    handleCollapseControlled,
}) => {
    const hasAll = expandedControlled && handleExpandControlled && handleCollapseControlled
    const hasNone = !expandedControlled && !handleExpandControlled && !handleCollapseControlled

    if (!hasAll && !hasNone) {
        throw new Error(
            'A controlled <Transfer> component requires all of the following props: expandedControlled, handleExpandControlled, handleCollapseControlled'
        )
    }

    return hasAll
}

/**
 * @param {string[]} initiallyExpanded
 * @param {Function} [onExpand]
 * @param {Function} [onCollapse]
 * @returns {{ expanded: string[], handleExpand: Function, handleCollapse: Function }}
 */
export const useExpanded = ({
    initiallyExpanded,
    onExpand,
    onCollapse,
    expandedControlled,
    handleExpandControlled,
    handleCollapseControlled,
}) => {
    const isControlled = checkIsControlled({
        expandedControlled,
        handleExpandControlled,
        handleCollapseControlled,
    })

    const allInitiallyExpandedPaths =
        isControlled ? [] : getAllExpandedPaths(initiallyExpanded)

    const [expanded, setExpanded] = useState(allInitiallyExpandedPaths)

    if (isControlled) {
        return {
            expanded: expandedControlled,
            handleExpand: handleExpandControlled,
            handleCollapse: handleCollapseControlled,
        }
    }

    const { handleExpand, handleCollapse } = createExpandHandlers({
        expanded,
        setExpanded,
        onExpand,
        onCollapse,
    })

    return { expanded, handleExpand, handleCollapse }
}
