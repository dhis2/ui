export const hasDescendantSelectedPaths = (
    path: string,
    selected: string[]
): boolean => {
    return selected.some((selectedPath) => {
        const isNotPath = !new RegExp(`${path}$`).test(selectedPath)
        const isSubPath = new RegExp(path).test(selectedPath)
        return isNotPath && isSubPath
    })
}
