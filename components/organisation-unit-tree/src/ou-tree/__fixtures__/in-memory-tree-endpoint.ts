import type { OuTreeEntry, OuTreeQuery, OuTreeResponse } from '../data/index'
import { createSearchMatcher } from './search-matcher'

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

const pathIds = (path: string) => path.split('/').filter(Boolean)

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

const isOpenOn = (unit: FixtureOrgUnit, today: Date): boolean => {
    const date = today.toISOString().slice(0, 10)
    const opened =
        unit.openingDate === undefined || unit.openingDate.slice(0, 10) <= date
    const closed =
        unit.closedDate !== undefined && unit.closedDate.slice(0, 10) <= date
    return opened && !closed
}

const createResultPredicate = (
    query: OuTreeQuery,
    context: {
        membersOf: Map<string, Set<string>>
        today: Date
        displayNameOf: (unit: FixtureOrgUnit) => string
    }
) => {
    const { membersOf, today, displayNameOf } = context
    const matches =
        query.search === undefined ? null : createSearchMatcher(query.search)
    const groups = (query.groups ?? []).map(
        (id) => membersOf.get(id) ?? new Set<string>()
    )
    return (unit: FixtureOrgUnit): boolean => {
        if (matches) {
            const original = query.shortName ? unit.shortName : unit.name
            if (!matches(displayNameOf(unit)) && !matches(original)) {
                return false
            }
        }
        if (query.level !== undefined && unit.level !== query.level) {
            return false
        }
        if (
            groups.length > 0 &&
            !groups.some((members) => members.has(unit.id))
        ) {
            return false
        }
        if (query.currentlyOpen && !isOpenOn(unit, today)) {
            return false
        }
        return true
    }
}

/**
 * The backend endpoint `GET /api/organisationUnits/tree`, implemented over a
 * fixture. Follows the contract in DHIS2-21263; see the design spec for the
 * places where that differs from the draft backend code.
 */
export const createInMemoryTreeEndpoint = ({
    orgUnits,
    groups = [],
    defaultRoots,
    today,
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
    const membersOf = new Map(
        groups.map((group) => [group.id, new Set(group.organisationUnits)])
    )

    return (query) => {
        validateQuery(query)

        const displayNameOf = createDisplayNameResolver(query)
        const compare = (a: FixtureOrgUnit, b: FixtureOrgUnit) =>
            displayNameOf(a).localeCompare(displayNameOf(b), 'en')
        const isResult = createResultPredicate(query, {
            membersOf,
            today: today ?? new Date(),
            displayNameOf,
        })
        const roots = resolveRoots(
            query.roots ?? defaultRoots ?? topLevelIds,
            byId
        ).sort(compare)
        const maxDepth = query.depth ?? Number.POSITIVE_INFINITY

        // Depth-first walk in tree order. `visitOrder` lets ancestors be
        // sorted into the same order later; `rootOf` tells where a unit's
        // ancestor chain stops.
        const results: FixtureOrgUnit[] = []
        const visitOrder = new Map<string, number>()
        const rootOf = new Map<string, string>()
        const walk = (
            unit: FixtureOrgUnit,
            rootId: string,
            remaining: number
        ) => {
            visitOrder.set(unit.id, visitOrder.size)
            rootOf.set(unit.id, rootId)
            if (isResult(unit)) {
                results.push(unit)
            }
            if (remaining === 0) {
                return
            }
            const children = [...(childrenOf.get(unit.id) ?? [])].sort(compare)
            for (const child of children) {
                walk(child, rootId, remaining - 1)
            }
        }
        for (const root of roots) {
            walk(root, root.id, maxDepth)
        }

        const { page, pageSize } = query
        const start = (page - 1) * pageSize
        const pageResults = results.slice(start, start + pageSize)

        // Ancestors: the chain from the scoped root down to, but excluding,
        // the result. A unit that is a direct result on any page is never an
        // ancestor, and an ancestor needed by an earlier page is not repeated.
        const resultIds = new Set(results.map((unit) => unit.id))
        const ancestorIdsOf = (unit: FixtureOrgUnit): string[] => {
            const ids = pathIds(unit.path)
            return ids.slice(ids.indexOf(rootOf.get(unit.id) as string), -1)
        }
        const deliveredEarlier = new Set<string>()
        for (const unit of results.slice(0, start)) {
            for (const id of ancestorIdsOf(unit)) {
                deliveredEarlier.add(id)
            }
        }
        const ancestorIds = new Set<string>()
        for (const unit of pageResults) {
            for (const id of ancestorIdsOf(unit)) {
                if (!resultIds.has(id) && !deliveredEarlier.has(id)) {
                    ancestorIds.add(id)
                }
            }
        }
        const ancestors = [...ancestorIds]
            .map((id) => byId.get(id) as FixtureOrgUnit)
            .sort(
                (a, b) =>
                    (visitOrder.get(a.id) as number) -
                    (visitOrder.get(b.id) as number)
            )

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
            organisationUnits: pageResults.map(toEntry),
            ancestors: ancestors.map(toEntry),
        }
    }
}
