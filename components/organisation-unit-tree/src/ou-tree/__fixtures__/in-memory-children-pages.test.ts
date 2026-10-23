import { createInMemoryChildrenPages } from './in-memory-children-pages'
import { zambiaOrgUnits } from './zambia-org-units'

const ids = (response: { organisationUnits: Array<{ id: string }> }) =>
    response.organisationUnits.map((unit) => unit.id)

describe('createInMemoryChildrenPages', () => {
    const childrenPages = createInMemoryChildrenPages({
        orgUnits: zambiaOrgUnits,
    })

    it('pages a parent children by display name, without the parent', () => {
        const first = childrenPages('ou-6', { page: 1, pageSize: 2 })
        const third = childrenPages('ou-6', { page: 3, pageSize: 2 })

        expect(ids(first)).toEqual(['ou-12', 'ou-10'])
        expect(ids(third)).toEqual(['ou-7', 'ou-11'])
        expect(first.pager).toEqual({
            page: 1,
            pageSize: 2,
            total: 6,
            pageCount: 3,
        })
        expect(third.pager.page).toBe(3)
    })

    it('returns tree entries with leaf', () => {
        const { organisationUnits } = childrenPages('ou-2', {
            page: 1,
            pageSize: 50,
        })

        expect(organisationUnits).toEqual([
            {
                id: 'ou-3',
                displayName: 'Kabwe District',
                path: '/ou-1/ou-2/ou-3',
                level: 3,
                leaf: false,
            },
            {
                id: 'ou-6',
                displayName: 'Serenje District',
                path: '/ou-1/ou-2/ou-6',
                level: 3,
                leaf: false,
            },
        ])
    })

    it('marks every child of Serenje District as a leaf', () => {
        const { organisationUnits } = childrenPages('ou-6', {
            page: 1,
            pageSize: 50,
        })

        expect(organisationUnits).toHaveLength(6)
        expect(organisationUnits.every((unit) => unit.leaf)).toBe(true)
    })

    it('throws the error failWith returns', () => {
        const error = new Error('page 3 failed')
        const failing = createInMemoryChildrenPages({
            orgUnits: zambiaOrgUnits,
            failWith: (parentId, page) =>
                parentId === 'ou-6' && page === 3 ? error : undefined,
        })

        expect(() => failing('ou-6', { page: 3, pageSize: 2 })).toThrow(error)
        expect(() => failing('ou-6', { page: 2, pageSize: 2 })).not.toThrow()
    })

    it('gives an empty page and a zero total for a leaf', () => {
        expect(childrenPages('ou-4', { page: 1, pageSize: 2 })).toEqual({
            pager: { page: 1, pageSize: 2, total: 0, pageCount: 0 },
            organisationUnits: [],
        })
    })

    it('orders by the short name on request', () => {
        const shortNamed = createInMemoryChildrenPages({
            orgUnits: zambiaOrgUnits.map((unit) =>
                unit.id === 'ou-7' ? { ...unit, shortName: 'Aaa' } : unit
            ),
        })

        const response = shortNamed('ou-6', {
            page: 1,
            pageSize: 2,
            shortName: true,
        })

        expect(ids(response)).toEqual(['ou-7', 'ou-12'])
        expect(response.organisationUnits[0].displayName).toBe('Aaa')
    })
})
