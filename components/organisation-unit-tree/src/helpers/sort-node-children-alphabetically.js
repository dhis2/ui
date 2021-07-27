export const sortNodeChildrenAlphabetically = node => {
    if (!node.children) return node
    const sortedChildren = [...node.children]

    sortedChildren.sort((left, right) => {
        if (left.displayName === right.displayName) return 0
        return left.displayName > right.displayName ? 1 : -1
    })

    return {
        ...node,
        children: sortedChildren,
    }
}
