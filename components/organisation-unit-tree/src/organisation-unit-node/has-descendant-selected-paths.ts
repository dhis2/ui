export const hasDescendantSelectedPaths = (
    path: string,
    selected: string[]
): boolean => {
    return selected.some((selectedPath) => {
        const isNotPath = !selectedPath.match(new RegExp(`${path}$`))
        const isSubPath = selectedPath.match(new RegExp(path))
        return isNotPath && isSubPath
    })
}
