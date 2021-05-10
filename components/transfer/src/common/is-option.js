/**
 * @param {Object} left
 * @param {Object} left
 * @returns {bool}
 */
export const isOption = (left, right) =>
    left.label === right.label && left.value === right.value
