export const createExpandHandlers = ({
    expanded,
    setExpanded,
    onExpand,
    onCollapse,
}: {
    expanded: string[]
    setExpanded: (expanded: string[]) => void
    onExpand?: (args: { path: string }) => void
    onCollapse?: (args: { path: string }) => void
}): {
    handleExpand: (args: { path: string }) => void
    handleCollapse: (args: { path: string }) => void
} => {
    const handleExpand = ({ path, ...rest }: { path: string }) => {
        if (!expanded.includes(path)) {
            setExpanded([...expanded, path])

            if (onExpand) {
                onExpand({ path, ...rest })
            }
        }
    }

    const handleCollapse = ({ path, ...rest }: { path: string }) => {
        const pathIndex = expanded.indexOf(path)
        if (pathIndex !== -1) {
            const updatedExpanded =
                pathIndex === 0
                    ? expanded.slice(1)
                    : [
                          ...expanded.slice(0, pathIndex),
                          ...expanded.slice(pathIndex + 1),
                      ]

            setExpanded(updatedExpanded)

            if (onCollapse) {
                onCollapse({ path, ...rest })
            }
        }
    }

    return { handleExpand, handleCollapse }
}
