export function computeDeepestLevel(
    rootLevel,
    offlineLevels,
    configOfflineLevel
) {
    if (offlineLevels) {
        return rootLevel + offlineLevels - 1
    }
    if (configOfflineLevel) {
        return configOfflineLevel
    }
    return 1
}

export function computeOfflineLevels(
    userOrgUnitRoot,
    filledOrganisationUnitLevels,
    configOfflineOrgUnitLevel
) {
    const filledOrganisationUnitLevel = filledOrganisationUnitLevels.find(
        ({ level }) => level === userOrgUnitRoot.level
    )
    const deepestLevel = computeDeepestLevel(
        userOrgUnitRoot.level,
        filledOrganisationUnitLevel?.offlineLevels,
        configOfflineOrgUnitLevel
    )

    return Array.from(
        { length: deepestLevel - userOrgUnitRoot.level + 1 },
        (_, i) => userOrgUnitRoot.level + i
    )
}
