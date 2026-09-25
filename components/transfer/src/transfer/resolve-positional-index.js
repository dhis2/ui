/**
 * Resolves a `resolveDropTarget` result into an insertion index within
 * `selected`. Looks up the drop target's option by value rather than
 * reusing its rendered index — `pickedOptions` can omit `selected`
 * values that have no matching option, so the two indices can diverge.
 *
 * @param {Object} dropTarget - result of `resolveDropTarget`
 * @param {string[]} selected
 * @returns {?number}
 */
export const resolvePositionalIndex = (dropTarget, selected) => {
    if (dropTarget.pos === 'end') {
        return null
    }

    const base = selected.indexOf(dropTarget.value)
    if (base === -1) {
        return null
    }

    return base + (dropTarget.pos === 'after' ? 1 : 0)
}
