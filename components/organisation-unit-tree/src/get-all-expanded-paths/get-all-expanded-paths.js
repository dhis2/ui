/**
 * @template T
 * @param {Array.<T>} arr
 * @returns {Array.<T>}
 */
const removeDuplicates = arr => Array.from(new Set(arr))

/**
 * @param {string} path
 * @returns {string[]}
 */
const extractAllPathsFromPath = path => {
    // remove leading slash and split by path delimiter/slashes
    const segments = path.replace(/^\//, '').split('/')

    const withSubPaths = segments.map((segment, index) => {
        // take all segments from 0 to index and join them with the delimiter
        return `/${segments.slice(0, index + 1).join('/')}`
    })

    return removeDuplicates(withSubPaths)
}

/**
 * @param {string[]} initiallyExpanded
 * @returns {string[]}
 */
export const getAllExpandedPaths = initiallyExpanded =>
    initiallyExpanded.reduce((all, curPath) => {
        const allPathsInCurPath = extractAllPathsFromPath(curPath)
        return [...all, ...allPathsInCurPath]
    }, [])
