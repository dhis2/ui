import type { OuTreeEntry, OuTreeQuery, OuTreeResponse } from '../data/index'

export interface FixtureTranslation {
    locale: string
    property: 'NAME' | 'SHORT_NAME'
    value: string
}

export interface FixtureOrgUnit {
    id: string
    name: string
    shortName: string
    path: string
    level: number
    parentId?: string
    openingDate?: string
    closedDate?: string
    translations?: FixtureTranslation[]
}

export interface FixtureOrgUnitGroup {
    id: string
    name: string
    organisationUnits: string[]
}

export interface InMemoryTreeEndpointOptions {
    orgUnits: FixtureOrgUnit[]
    groups?: FixtureOrgUnitGroup[]
    /** Roots used when the query has none. Defaults to the top-level units. */
    defaultRoots?: string[]
    /** "Today" for `currentlyOpen`. Defaults to the real date. */
    today?: Date
}

export type InMemoryTreeEndpoint = (query: OuTreeQuery) => OuTreeResponse

const assertPositiveInteger = (name: string, value: number | undefined) => {
    if (value !== undefined && (!Number.isInteger(value) || value < 1)) {
        throw new Error(`${name} must be a positive integer`)
    }
}

const validateQuery = (query: OuTreeQuery) => {
    assertPositiveInteger('page', query.page)
    assertPositiveInteger('pageSize', query.pageSize)
    assertPositiveInteger('depth', query.depth)
    assertPositiveInteger('level', query.level)
    if (query.search !== undefined && query.depth !== undefined) {
        throw new Error(
            'A query with `search` term cannot be limited by `depth` at the same time.'
        )
    }
}

const resolveRoots = (
    ids: string[],
    byId: Map<string, FixtureOrgUnit>
): FixtureOrgUnit[] => {
    const known = new Map<string, FixtureOrgUnit>()
    for (const id of ids) {
        const unit = byId.get(id)
        if (unit) {
            known.set(id, unit)
        }
    }
    const candidates = [...known.values()]
    return candidates.filter(
        (unit) =>
            !candidates.some(
                (other) =>
                    other.id !== unit.id &&
                    unit.path.startsWith(`${other.path}/`)
            )
    )
}

const createDisplayNameResolver = ({ locale, shortName }: OuTreeQuery) => {
    const property = shortName ? 'SHORT_NAME' : 'NAME'
    return (unit: FixtureOrgUnit): string => {
        const original = shortName ? unit.shortName : unit.name
        if (locale === undefined) {
            return original
        }
        const translation = unit.translations?.find(
            (candidate) =>
                candidate.locale === locale && candidate.property === property
        )
        return translation?.value ?? original
    }
}

/**
 * The backend endpoint `GET /api/organisationUnits/tree`, implemented over a
 * fixture. Follows the contract in DHIS2-21263; see the design spec for the
 * places where that differs from the draft backend code.
 */
export const createInMemoryTreeEndpoint = ({
    orgUnits,
    defaultRoots,
}: InMemoryTreeEndpointOptions): InMemoryTreeEndpoint => {
    const byId = new Map(orgUnits.map((unit) => [unit.id, unit]))
    const childrenOf = new Map<string, FixtureOrgUnit[]>()
    for (const unit of orgUnits) {
        if (unit.parentId !== undefined) {
            const siblings = childrenOf.get(unit.parentId) ?? []
            siblings.push(unit)
            childrenOf.set(unit.parentId, siblings)
        }
    }
    const topLevelIds = orgUnits
        .filter((unit) => unit.parentId === undefined)
        .map((unit) => unit.id)

    return (query) => {
        validateQuery(query)

        const displayNameOf = createDisplayNameResolver(query)
        const compare = (a: FixtureOrgUnit, b: FixtureOrgUnit) =>
            displayNameOf(a).localeCompare(displayNameOf(b), 'en')
        const roots = resolveRoots(
            query.roots ?? defaultRoots ?? topLevelIds,
            byId
        ).sort(compare)
        const maxDepth = query.depth ?? Number.POSITIVE_INFINITY

        const results: FixtureOrgUnit[] = []
        const walk = (unit: FixtureOrgUnit, remaining: number) => {
            results.push(unit)
            if (remaining === 0) {
                return
            }
            const children = [...(childrenOf.get(unit.id) ?? [])].sort(compare)
            for (const child of children) {
                walk(child, remaining - 1)
            }
        }
        for (const root of roots) {
            walk(root, maxDepth)
        }

        const { page, pageSize } = query
        const start = (page - 1) * pageSize
        const toEntry = (unit: FixtureOrgUnit): OuTreeEntry => ({
            id: unit.id,
            displayName: displayNameOf(unit),
            path: unit.path,
            level: unit.level,
            leaf: !childrenOf.has(unit.id),
        })

        return {
            pager: {
                page,
                pageSize,
                total: results.length,
                pageCount: Math.ceil(results.length / pageSize),
            },
            organisationUnits: results
                .slice(start, start + pageSize)
                .map(toEntry),
            ancestors: [],
        }
    }
}
