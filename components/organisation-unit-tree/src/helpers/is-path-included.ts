export const isPathIncluded = (includedPaths: string[], path: string): boolean => {
    const isIncluded = includedPaths.some((includedPath) => {
        if (path === includedPath) {
            return true
        }
        return includedPath.startsWith(`${path}/`)
    })

    return isIncluded
}
