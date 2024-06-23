export const isValidMenuItem = (node) => {
    const role = node.getAttribute('role')

    const menuItemCheck =
        role && ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(role)

    // UI Library MenuItem
    if (role === 'presentation') {
        return isValidMenuItem(node.children[0])
    } else {
        return role !== 'separator' && menuItemCheck
    }
}

export const filterValidMenuItemsIndices = (children) => {
    const validIndices = []
    children.forEach((node, index) => {
        if (isValidMenuItem(node)) {
            validIndices.push(index)
        }
    })
    return validIndices
}
