/**
 * @param {Option[]} plainOptions
 * @param {string} filter
 * @returns {Option[]}
 */
export const defaultFilterCallback = (plainOptions, filter) =>
    filter === ''
        ? plainOptions
        : plainOptions.filter(({ label }) =>
              label.match(new RegExp(filter, 'i'))
          )
