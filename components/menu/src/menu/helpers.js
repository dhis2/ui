const isMenuItem = (role) => {
    return ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(role)
}

const isValidMenuItemNode = (node) => {
    if (node.nodeName === 'LI' && node.firstElementChild) {
        return isValidMenuItemNode(node.firstElementChild)
    }

    const role = node.getAttribute('role')
    return role && isMenuItem(role)
}

export const getFocusableItemsIndices = (elements) => {
    const focusableIndices = []
    elements.forEach((node, index) => {
        if (isValidMenuItemNode(node)) {
            focusableIndices.push(index)
        }
    })
    return focusableIndices
}

export const hasMenuItemRole = (component) => {
    return isMenuItem(component?.props?.['role'])
}
