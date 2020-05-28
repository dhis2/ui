/**
 * @param {Object[]} options
 * @param {string} filter
 * @returns {Object[]}
 */
export const defaultFilterCallback = (options, filter) =>
    filter === ''
        ? options
        : options.filter(({ label }) => label.match(new RegExp(filter, 'i')))
