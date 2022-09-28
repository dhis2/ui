import { computeOfflineLevels, EnhancedPrimitiveSet } from '../helpers/index.js'

const ORGANISATION_UNIT_BASE_FIELDS = ['id', 'displayName', 'path', 'level']
const ORGANISATION_UNIT_CHILDREN_COUNT_FIELD =
    'children::size~rename(childrenCount)'
const ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN = [
    ...ORGANISATION_UNIT_BASE_FIELDS,
    ORGANISATION_UNIT_CHILDREN_COUNT_FIELD,
]
const ORGANISATION_UNIT_FIELDS_WITH_CHILDREN = [
    ...ORGANISATION_UNIT_BASE_FIELDS,
    `children[${ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN.join()}]`,
]
const SEARCH_PARAMS = {
    withinUserSearchHierarchy: true,
    paging: false,
    fields: ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN,
}

const byLevelAndDisplayName = (a, b) =>
    a.level - b.level || a.displayName.localeCompare(b.displayName)

export function requestManager(_, dataEngine) {
    async function fetchUnitsByIds(ids, withChildren) {
        if (!(ids instanceof EnhancedPrimitiveSet)) {
            ids = new EnhancedPrimitiveSet(ids)
        }

        if (ids.isEmpty() === 0) {
            return Promise.resolve()
        }

        const fields = withChildren
            ? ORGANISATION_UNIT_FIELDS_WITH_CHILDREN
            : ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN
        /* Why 145? A conservative max URL length is 2000, see
         * https://stackoverflow.com/a/417184. For the base URL
         * plus query params we estimate a max length of approx
         * 400 characters. A UID has a length of 10 and they are
         * comma-separated, so approx 11 chars per ID:
         * (2000 - 400) / 11 = 145.45 */
        const idsStrings = ids.toCommaDelimetedStrings(145)

        if (ids.size > 145) {
            console.warn(
                `Requesting ${ids.length} org-units by ID.\n`,
                `To avoid max URL length restrictions ${idsStrings.length} requests have been sent.`
            )
        }

        return await Promise.all(
            idsStrings.map((idsString) =>
                dataEngine.query({
                    response: {
                        resource: '/organisationUnits',
                        params: {
                            paging: false,
                            fields,
                            filter: `id:in:[${idsString}]`,
                        },
                    },
                })
            )
        ).then((results) => {
            const organisationUnits = results.flatMap(
                (result) => result.response.organisationUnits
            )
            // Return sorted by level, so parents are available before children
            const sortedOrganisationUnits = organisationUnits.sort(
                byLevelAndDisplayName
            )

            return withChildren
                ? sortedOrganisationUnits.map((unit) => ({
                      ...unit,
                      children: unit.children.sort(byLevelAndDisplayName),
                      childrenCount: unit.children.length,
                  }))
                : sortedOrganisationUnits
        })
    }

    async function fetchOrganisationUnitLevels() {
        const { filledOrganisationUnitLevels } = await dataEngine.query({
            filledOrganisationUnitLevels: {
                resource: '/filledOrganisationUnitLevels',
                params: {
                    fields: ['level', 'offlineLevels'],
                },
            },
        })
        return filledOrganisationUnitLevels.map(
            ({ id, level, offlineLevels }) => ({
                id,
                level,
                offlineLevels,
            })
        )
    }

    async function fetchConfigOfflineOrganisationUnitLevel() {
        const { offlineOrganisationUnitLevel } = await dataEngine.query({
            offlineOrganisationUnitLevel: {
                resource: 'configuration/offlineOrganisationUnitLevel',
            },
        })
        return offlineOrganisationUnitLevel.level
    }

    async function fetchRootsWithOfflineLevels(rootUnitIds) {
        const [
            rootUnits,
            filledOrganisationUnitLevels,
            configOfflineOrgUnitLevel,
        ] = await Promise.all([
            fetchUnitsByIds(rootUnitIds),
            fetchOrganisationUnitLevels(),
            fetchConfigOfflineOrganisationUnitLevel(),
        ])
        return rootUnits.map((rootUnit) => ({
            ...rootUnit,
            offlineLevels: computeOfflineLevels(
                rootUnit,
                filledOrganisationUnitLevels,
                configOfflineOrgUnitLevel
            ),
        }))
    }

    async function fetchOfflineUnits(rootUnits) {
        return await Promise.all(
            rootUnits.map(({ id, offlineLevels }) =>
                dataEngine.query({
                    response: {
                        // TODO: see if we can do this in `variables`?
                        resource: `/organisationUnits/${id}`,
                        params: {
                            fields: ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN,
                            includeDescendants: true,
                            paging: false,
                            filter: `level:in:[${offlineLevels?.join()}]`,
                            // `order: 'level:asc'` doesn't do anything
                        },
                    },
                })
            )
        ).then((results) =>
            // flattened, deduplicated, sorted by level and then displayName
            Array.from(
                results.reduce((acc, { response }) => {
                    /**
                     * If only 1 org-unit is found the backend will return an object
                     * instead of the normal response `{ organisationUnits: [] }`
                     * see: https://dhis2.atlassian.net/browse/DHIS2-13901
                     */
                    if (Array.isArray(response.organisationUnits)) {
                        for (const unit of response.organisationUnits) {
                            acc.add(unit)
                        }
                    } else {
                        acc.add(response)
                    }
                    return acc
                }, new Set())
            ).sort(byLevelAndDisplayName)
        )
    }

    async function fetchChildren(id) {
        const { organisationUnit } = await dataEngine.query({
            organisationUnit: {
                // TODO: see if we can do this in `variables`?
                resource: `/organisationUnits/${id}`,
                params: {
                    fields: `children[${ORGANISATION_UNIT_FIELDS_WITHOUT_CHILDREN.join()}]`,
                },
            },
        })
        return organisationUnit.children.sort(byLevelAndDisplayName)
    }

    async function fetchSearchResults(options) {
        const isOptionsValid =
            options.paging || options.query || options.level || options.filter

        if (!isOptionsValid) {
            throw new Error(
                'Invalid options provided to `fetchSearchResults`. The results are not paged and no parameter has been provided to limit the search results. Either do a paged request by adding `paging: true` or ensure the results will be limited by adding `query`, `level`, or `filter`.'
            )
        }

        const { searchResults } = await dataEngine.query({
            searchResults: {
                resource: '/organisationUnits',
                params: {
                    ...SEARCH_PARAMS,
                    ...options,
                },
            },
        })
        return searchResults.organisationUnits.sort(byLevelAndDisplayName)
    }

    return {
        fetchChildren,
        fetchConfigOfflineOrganisationUnitLevel,
        fetchOfflineUnits,
        fetchOrganisationUnitLevels,
        fetchRootsWithOfflineLevels,
        fetchSearchResults,
        fetchUnitsByIds,
    }
}
