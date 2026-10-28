import type { OuTreeEntry, OuTreeQuery, OuTreeResponse } from '../data/index'
import { createInMemoryTreeEndpoint } from './in-memory-tree-endpoint'
import { pahoOrgUnits } from './paho-org-units'

const endpoint = createInMemoryTreeEndpoint(pahoOrgUnits)

const collectPages = (query: Omit<OuTreeQuery, 'page'>) => {
    const pages: OuTreeResponse[] = []
    const first = endpoint({ ...query, page: 1 })
    pages.push(first)
    for (let page = 2; page <= first.pager.pageCount; page += 1) {
        pages.push(endpoint({ ...query, page }))
    }
    return pages
}

const ancestorIdsOf = (entry: OuTreeEntry, rootIds: Set<string>) => {
    const ids = entry.path.split('/').filter(Boolean)
    const rootIndex = ids.findIndex((id) => rootIds.has(id))
    return ids.slice(rootIndex, -1)
}

describe('in-memory endpoint over the PAHO fixture', () => {
    it('pages a search consistently', () => {
        const query = { pageSize: 50, search: 'San' }
        const pages = collectPages(query)
        const everything = endpoint({ ...query, pageSize: 100000, page: 1 })
        const rootIds = new Set(
            pahoOrgUnits.orgUnits
                .filter((unit) => unit.parentId === undefined)
                .map((unit) => unit.id)
        )

        expect(pages.length).toBeGreaterThan(5)

        const results = pages.flatMap((page) => page.organisationUnits)
        expect(results.map((entry) => entry.id)).toEqual(
            everything.organisationUnits.map((entry) => entry.id)
        )
        expect(new Set(results.map((entry) => entry.id)).size).toBe(
            results.length
        )
        expect(results).toHaveLength(everything.pager.total)

        const resultIds = new Set(results.map((entry) => entry.id))
        const expectedAncestors = new Set(
            results
                .flatMap((entry) => ancestorIdsOf(entry, rootIds))
                .filter((id) => !resultIds.has(id))
        )
        const ancestors = pages.flatMap((page) => page.ancestors)
        expect(new Set(ancestors.map((entry) => entry.id)).size).toBe(
            ancestors.length
        )
        expect(new Set(ancestors.map((entry) => entry.id))).toEqual(
            expectedAncestors
        )
        expect(ancestors.map((entry) => entry.id)).toEqual(
            everything.ancestors.map((entry) => entry.id)
        )
    })

    it('pages the children of the widest parent', () => {
        const counts = new Map<string, number>()
        for (const unit of pahoOrgUnits.orgUnits) {
            if (unit.parentId !== undefined) {
                counts.set(unit.parentId, (counts.get(unit.parentId) ?? 0) + 1)
            }
        }
        const widest = [...counts.entries()].reduce(
            (best, [id, count]) => (count > best.count ? { id, count } : best),
            { id: '', count: 0 }
        )
        const pages = collectPages({
            pageSize: 50,
            rootIds: [widest.id],
            depth: 1,
        })

        expect(widest.count).toBe(853)
        expect(pages[0].pager.total).toBe(854)
        expect(pages[0].organisationUnits[0].id).toBe(widest.id)
        expect(pages).toHaveLength(18)
        expect(pages[17].organisationUnits).toHaveLength(4)
        const names = pages
            .flatMap((page) => page.organisationUnits)
            .slice(1)
            .map((entry) => entry.displayName)
        expect(names).toEqual(
            [...names].sort((a, b) => a.localeCompare(b, 'en'))
        )
    })
})
