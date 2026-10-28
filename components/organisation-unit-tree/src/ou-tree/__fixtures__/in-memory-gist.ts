import type { FixtureOrgUnit } from './in-memory-tree-endpoint'
import { wait } from './wait'

/** What gist returns per unit for the tree's field list. */
export interface GistEntry {
    id: string
    displayName: string
    path: string
    level: number
    children: number
}

/** The number of children per parent id in the fixture. */
export const countChildren = (orgUnits: FixtureOrgUnit[]) => {
    const counts = new Map<string, number>()
    for (const unit of orgUnits) {
        if (unit.parentId !== undefined) {
            counts.set(unit.parentId, (counts.get(unit.parentId) ?? 0) + 1)
        }
    }
    return counts
}

export interface InMemoryGistOptions {
    orgUnits: FixtureOrgUnit[]
}

/**
 * Temporary stand-in for the gist lookup the tree uses:
 * `organisationUnits/gist?filter=id:in:[...]&fields=id,displayName,path,level,children::size`.
 * Returns the requested units in the order asked, skipping unknown ids.
 */
export const createInMemoryGist = ({ orgUnits }: InMemoryGistOptions) => {
    const byId = new Map(orgUnits.map((unit) => [unit.id, unit]))
    const childrenCount = countChildren(orgUnits)
    return (ids: string[], { shortName = false }: { shortName?: boolean }) =>
        ids.flatMap((id): GistEntry[] => {
            const unit = byId.get(id)
            return unit
                ? [
                      {
                          id,
                          displayName: shortName ? unit.shortName : unit.name,
                          path: unit.path,
                          level: unit.level,
                          children: childrenCount.get(id) ?? 0,
                      },
                  ]
                : []
        })
}

type Json = boolean | number | string | null | Json[] | { [key: string]: Json }

const idsFromFilter = (filter: unknown): string[] => {
    const match = typeof filter === 'string' && /^id:in:\[(.*)\]$/.exec(filter)
    return match ? match[1].split(',').filter(Boolean) : []
}

/**
 * A `CustomDataProvider` resolver for `GIST_RESOURCE`:
 * `<CustomDataProvider data={{ [GIST_RESOURCE]: createGistResolver(options) }}>`.
 */
export const createGistResolver = ({
    failWith,
    delay = 0,
    ...options
}: InMemoryGistOptions & {
    /** Rejects a request with the returned error. */
    failWith?: (ids: string[]) => Error | undefined
    /** Milliseconds to wait before answering any request. */
    delay?: number
}) => {
    const gist = createInMemoryGist(options)
    return (_type: string, query: { params?: unknown }): Promise<Json> => {
        const params = (query.params ?? {}) as Record<string, unknown>
        const fields = typeof params.fields === 'string' ? params.fields : ''
        const shortName = fields.includes(
            'displayShortName~rename(displayName)'
        )
        // `.then` turns a synchronous throw into a rejection, like async did.
        return wait(delay).then(() => {
            const ids = idsFromFilter(params.filter)
            const failure = failWith?.(ids)
            if (failure) {
                throw failure
            }
            return gist(ids, { shortName }) as unknown as Json
        })
    }
}
