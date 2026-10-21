import type { FixtureOrgUnit } from './in-memory-tree-endpoint'

/** What gist returns per unit for the tree's field list. */
export interface GistEntry {
    id: string
    displayName: string
    path: string
    level: number
    children: number
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
    const childrenCount = new Map<string, number>()
    for (const unit of orgUnits) {
        if (unit.parentId !== undefined) {
            childrenCount.set(
                unit.parentId,
                (childrenCount.get(unit.parentId) ?? 0) + 1
            )
        }
    }
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
export const createGistResolver = (options: InMemoryGistOptions) => {
    const gist = createInMemoryGist(options)
    return (
        _type: string,
        query: { params?: { filter?: unknown; fields?: unknown } }
    ): Promise<Json> => {
        const fields = String(query.params?.fields ?? '')
        const shortName = fields.includes(
            'displayShortName~rename(displayName)'
        )
        return Promise.resolve(
            gist(idsFromFilter(query.params?.filter), {
                shortName,
            }) as unknown as Json
        )
    }
}
