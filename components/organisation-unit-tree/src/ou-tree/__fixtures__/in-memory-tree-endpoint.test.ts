import type { OuTreeEntry } from '../data/index'
import { createInMemoryTreeEndpoint } from './in-memory-tree-endpoint'
import { zambiaOrgUnits } from './zambia-org-units'

const brief = ({ id, displayName }: OuTreeEntry) => ({ id, displayName })

describe('createInMemoryTreeEndpoint', () => {
    const endpoint = createInMemoryTreeEndpoint({ orgUnits: zambiaOrgUnits })

    describe('browse mode (ticket case 2)', () => {
        it('returns the roots plus `depth` levels of descendants, in tree order', () => {
            const response = endpoint({ page: 1, pageSize: 50, depth: 2 })

            expect(response.pager).toEqual({
                page: 1,
                pageSize: 50,
                total: 7,
                pageCount: 1,
            })
            expect(response.organisationUnits.map(brief)).toEqual([
                { id: 'ou-1', displayName: 'Zambia' },
                { id: 'ou-2', displayName: 'Central Province' },
                { id: 'ou-3', displayName: 'Kabwe District' },
                { id: 'ou-6', displayName: 'Serenje District' },
                { id: 'ou-13', displayName: 'Lusaka Province' },
                { id: 'ou-14', displayName: 'Kafue District' },
                { id: 'ou-17', displayName: 'Lusaka District' },
            ])
            expect(response.ancestors).toEqual([])
        })

        it('returns full entries with path, level and leaf', () => {
            const response = endpoint({ page: 1, pageSize: 50, depth: 1 })

            expect(response.organisationUnits).toEqual([
                {
                    id: 'ou-1',
                    displayName: 'Zambia',
                    path: '/ou-1',
                    level: 1,
                    leaf: false,
                },
                {
                    id: 'ou-2',
                    displayName: 'Central Province',
                    path: '/ou-1/ou-2',
                    level: 2,
                    leaf: false,
                },
                {
                    id: 'ou-13',
                    displayName: 'Lusaka Province',
                    path: '/ou-1/ou-13',
                    level: 2,
                    leaf: false,
                },
            ])
        })

        it('marks units without children as leaves', () => {
            const response = endpoint({
                page: 1,
                pageSize: 50,
                roots: ['ou-3'],
                depth: 1,
            })

            expect(
                response.organisationUnits.map(({ id, leaf }) => ({ id, leaf }))
            ).toEqual([
                { id: 'ou-3', leaf: false },
                { id: 'ou-5', leaf: true },
                { id: 'ou-4', leaf: true },
            ])
        })

        it('returns every unit under the roots when neither depth nor search is given', () => {
            const response = endpoint({ page: 1, pageSize: 50 })

            expect(response.pager.total).toBe(19)
            expect(response.organisationUnits[0].id).toBe('ou-1')
            expect(response.organisationUnits[18].id).toBe('ou-19')
        })

        it('pages the results and reports the page count', () => {
            const page1 = endpoint({ page: 1, pageSize: 4 })
            const page5 = endpoint({ page: 5, pageSize: 4 })

            expect(page1.pager).toEqual({
                page: 1,
                pageSize: 4,
                total: 19,
                pageCount: 5,
            })
            expect(page1.organisationUnits.map((entry) => entry.id)).toEqual([
                'ou-1',
                'ou-2',
                'ou-3',
                'ou-5',
            ])
            expect(page5.organisationUnits.map((entry) => entry.id)).toEqual([
                'ou-17',
                'ou-18',
                'ou-19',
            ])
        })
    })

    describe('roots', () => {
        it('defaults to the top-level units', () => {
            const forest = createInMemoryTreeEndpoint({
                orgUnits: [
                    ...zambiaOrgUnits,
                    {
                        id: 'ou-20',
                        name: 'Angola',
                        shortName: 'Angola',
                        path: '/ou-20',
                        level: 1,
                    },
                ],
            })

            const response = forest({ page: 1, pageSize: 50, depth: 1 })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-20', 'ou-1', 'ou-2', 'ou-13']
            )
        })

        it('uses the configured default roots when the query has none', () => {
            const scoped = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits,
                defaultRoots: ['ou-13'],
            })

            const response = scoped({ page: 1, pageSize: 50, depth: 1 })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-13', 'ou-14', 'ou-17']
            )
        })

        it('orders multiple roots alphabetically and ignores a root under another root', () => {
            const response = endpoint({
                page: 1,
                pageSize: 50,
                roots: ['ou-6', 'ou-3', 'ou-8'],
                depth: 1,
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                [
                    'ou-3',
                    'ou-5',
                    'ou-4',
                    'ou-6',
                    'ou-12',
                    'ou-10',
                    'ou-8',
                    'ou-9',
                    'ou-7',
                    'ou-11',
                ]
            )
        })

        it('ignores unknown root ids', () => {
            const mixed = endpoint({
                page: 1,
                pageSize: 50,
                roots: ['nope', 'ou-14'],
                depth: 1,
            })
            const none = endpoint({ page: 1, pageSize: 50, roots: ['nope'] })

            expect(mixed.organisationUnits.map((entry) => entry.id)).toEqual([
                'ou-14',
                'ou-15',
                'ou-16',
            ])
            expect(none).toEqual({
                pager: { page: 1, pageSize: 50, total: 0, pageCount: 0 },
                organisationUnits: [],
                ancestors: [],
            })
        })
    })

    describe('validation', () => {
        it.each([
            ['page', { page: 0, pageSize: 50 }],
            ['page', { page: 1.5, pageSize: 50 }],
            ['pageSize', { page: 1, pageSize: 0 }],
            ['depth', { page: 1, pageSize: 50, depth: 0 }],
            ['level', { page: 1, pageSize: 50, level: -1 }],
        ])('rejects a non-positive or fractional %s', (name, query) => {
            expect(() => endpoint(query)).toThrow(
                `${name} must be a positive integer`
            )
        })

        it('rejects search combined with depth, even when the search is blank', () => {
            expect(() =>
                endpoint({ page: 1, pageSize: 50, search: '', depth: 1 })
            ).toThrow('cannot be limited by `depth`')
        })
    })
})
