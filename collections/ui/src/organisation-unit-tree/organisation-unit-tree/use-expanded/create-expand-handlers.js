/**
 * @param {Object} args
 * @param {string[]} args.expanded
 * @param {Function} args.setExpanded
 * @param {Function} [args.onExpand]
 * @param {Function} [args.onCollapse]
 * @returns {{ handleExpand: Function, handleCollapse: Function }}
 */
export const createExpandHandlers = ({
    expanded,
    setExpanded,
    onExpand,
    onCollapse,
}) => {
    const handleExpand = ({ path, ...rest }) => {
        if (!expanded.includes(path)) {
            setExpanded([...expanded, path])

            if (onExpand) {
                onExpand({ path, ...rest })
            }
        }
    }

    const handleCollapse = ({ path, ...rest }) => {
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
