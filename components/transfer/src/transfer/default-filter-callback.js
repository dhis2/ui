/**
 * @param {Object[]} options
 * @param {string} filter
 * @returns {Object[]}
 */
export const defaultFilterCallback = (options, filter) => {
    if (filter === '') {
        return options
    }
    try {
        const regex = new RegExp(filter, 'i')
        return options.filter(({ label }) => label.match(regex))
    } catch {
        console.warn('Invalid regex filter:', filter)
        return options
    }
}
