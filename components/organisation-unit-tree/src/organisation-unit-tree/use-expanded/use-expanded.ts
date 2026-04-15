import { useState } from 'react'
import { getAllExpandedPaths } from '../../get-all-expanded-paths/index.ts'
import { createExpandHandlers } from './create-expand-handlers.ts'

interface UseExpandedArgs {
    initiallyExpanded: string[]
    onExpand?: (args: { path: string }) => void
    onCollapse?: (args: { path: string }) => void
    expandedControlled?: string[]
    handleExpandControlled?: (args: { path: string }) => void
    handleCollapseControlled?: (args: { path: string }) => void
}

interface UseExpandedReturn {
    expanded: string[]
    handleExpand: (args: { path: string }) => void
    handleCollapse: (args: { path: string }) => void
}

export const useExpanded = ({
    initiallyExpanded,
    onExpand,
    onCollapse,
    expandedControlled,
    handleExpandControlled,
    handleCollapseControlled,
}: UseExpandedArgs): UseExpandedReturn => {
    const isControlled = !!expandedControlled
    const allInitiallyExpandedPaths = isControlled
        ? []
        : getAllExpandedPaths(initiallyExpanded)

    const [expanded, setExpanded] = useState(allInitiallyExpandedPaths)

    if (isControlled) {
        return {
            expanded: expandedControlled,
            handleExpand: handleExpandControlled!,
            handleCollapse: handleCollapseControlled!,
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
