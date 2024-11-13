/**
 * Find the minimum/common root units from a list of orgunits.
 * This is used to "deduplicate" a list of units, where some unit in the list
 * may be a parent of another, and thus only the parent should be included as a root.
 *
 * This is mainly because of the /me API returning the verbatim selected units,
 * where the user is able to select children deep in a tree, even if an ancestor above is selected
 * @param {Array} unitsWithLevel - List of orgunits with their level
 * @returns {Array} - A filtered list of the minimum root units
 */
export const findCommonOrgUnitRoots = (unitsWithLevel) => {
    const sorted = unitsWithLevel.sort((a, b) => a.level - b.level)

    const minimumRoots = sorted.filter((ou, index, array) => {
        // since the array is sorted by level we can just check the previous units,
        // because we want to get the "minimum" level
        const previousUnits = array.slice(0, index)
        // if a previous unit has a path that is a prefix of the current path,
        // then the current path is a child and should not be included
        return !previousUnits.some((pu) => ou.path.startsWith(pu.path))
    })

    return minimumRoots
}
