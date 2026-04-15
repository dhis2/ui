const removeDuplicates = <T>(arr: T[]): T[] => Array.from(new Set(arr))

const extractAllPathsFromPath = (path: string): string[] => {
    // remove leading slash and split by path delimiter/slashes
    const segments = path.replace(/^\//, '').split('/')

    const withSubPaths = segments.map((_segment, index) => {
        // take all segments from 0 to index and join them with the delimiter
        return `/${segments.slice(0, index + 1).join('/')}`
    })

    return removeDuplicates(withSubPaths)
}

export const getAllExpandedPaths = (initiallyExpanded: string[]): string[] =>
    initiallyExpanded.reduce<string[]>((all, curPath) => {
        const allPathsInCurPath = extractAllPathsFromPath(curPath)
        return [...all, ...allPathsInCurPath]
    }, [])
