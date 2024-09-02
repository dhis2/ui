const isMenuItem = (role) => {
    return ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(role)
}

const isValidMenuItemNode = (node) => {
    if (node.nodeName === 'LI' && node.firstElementChild) {
        return isValidMenuItemNode(node.firstElementChild)
    }
    const role = node.getAttribute('role')

    // for h1 - h6 headings since their heading role is not explicitly set
    // style elements do not have roles
    if (node.nodeName.startsWith('H') || node.nodeName === 'STYLE') {
        return false
    }

    if (role) {
        return isMenuItem(role)
    } else {
        console.warn('Missing: role attribute on the menu child')
    }
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
