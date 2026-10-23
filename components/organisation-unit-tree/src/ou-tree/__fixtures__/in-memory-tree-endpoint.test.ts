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
        it('rejects a non-positive page', () => {
            expect(() => endpoint({ page: 0, pageSize: 50 })).toThrow(
                'page must be a positive integer'
            )
        })

        it('rejects search combined with depth', () => {
            expect(() =>
                endpoint({ page: 1, pageSize: 50, search: 'x', depth: 1 })
            ).toThrow('cannot be limited by `depth`')
        })
    })

    describe('search mode (ticket case 1)', () => {
        it('returns matches with the ancestors each page needs, delivered once', () => {
            const page1 = endpoint({ page: 1, pageSize: 2, search: 'Clinic' })
            const page2 = endpoint({ page: 2, pageSize: 2, search: 'Clinic' })

            expect(page1.pager).toEqual({
                page: 1,
                pageSize: 2,
                total: 4,
                pageCount: 2,
            })
            expect(page1.organisationUnits.map(brief)).toEqual([
                { id: 'ou-5', displayName: 'Chisembe Clinic' },
                { id: 'ou-8', displayName: 'Kanona Clinic' },
            ])
            expect(page1.ancestors.map(brief)).toEqual([
                { id: 'ou-1', displayName: 'Zambia' },
                { id: 'ou-2', displayName: 'Central Province' },
                { id: 'ou-3', displayName: 'Kabwe District' },
                { id: 'ou-6', displayName: 'Serenje District' },
            ])

            expect(page2.pager).toEqual({
                page: 2,
                pageSize: 2,
                total: 4,
                pageCount: 2,
            })
            expect(page2.organisationUnits.map(brief)).toEqual([
                { id: 'ou-15', displayName: 'Kafue Clinic' },
                { id: 'ou-18', displayName: 'Chelstone Clinic' },
            ])
            expect(page2.ancestors.map(brief)).toEqual([
                { id: 'ou-13', displayName: 'Lusaka Province' },
                { id: 'ou-14', displayName: 'Kafue District' },
                { id: 'ou-17', displayName: 'Lusaka District' },
            ])
        })

        it('never lists a direct result as an ancestor', () => {
            const response = endpoint({
                page: 1,
                pageSize: 50,
                search: 'Kabwe',
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-3', 'ou-4']
            )
            expect(response.ancestors.map((entry) => entry.id)).toEqual([
                'ou-1',
                'ou-2',
            ])
        })

        it('returns an empty page past the end, with the pager intact', () => {
            const response = endpoint({
                page: 3,
                pageSize: 2,
                search: 'Clinic',
            })

            expect(response).toEqual({
                pager: { page: 3, pageSize: 2, total: 4, pageCount: 2 },
                organisationUnits: [],
                ancestors: [],
            })
        })

        it('folds accents and case', () => {
            const accented = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits.map((unit) =>
                    unit.id === 'ou-5'
                        ? { ...unit, name: 'Chisembe Clínic' }
                        : unit
                ),
            })

            const response = accented({
                page: 1,
                pageSize: 50,
                search: 'clinic',
            })

            expect(response.organisationUnits.map(brief)).toEqual([
                { id: 'ou-5', displayName: 'Chisembe Clínic' },
                { id: 'ou-8', displayName: 'Kanona Clinic' },
                { id: 'ou-15', displayName: 'Kafue Clinic' },
                { id: 'ou-18', displayName: 'Chelstone Clinic' },
            ])
        })

        it('supports wildcard and quoted terms', () => {
            const wildcard = endpoint({ page: 1, pageSize: 50, search: 'Ka*' })
            const quoted = endpoint({
                page: 1,
                pageSize: 50,
                search: '"Kafue District"',
            })

            expect(wildcard.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-3', 'ou-4', 'ou-8', 'ou-14', 'ou-15', 'ou-16', 'ou-19']
            )
            expect(quoted.organisationUnits.map((entry) => entry.id)).toEqual([
                'ou-14',
            ])
        })
    })

    describe('custom roots with search (ticket case 3)', () => {
        it('orders roots alphabetically and stops ancestors at the roots', () => {
            const response = endpoint({
                page: 1,
                pageSize: 50,
                roots: ['ou-6', 'ou-3'],
                search: 'Clinic',
            })

            expect(response.pager).toEqual({
                page: 1,
                pageSize: 50,
                total: 2,
                pageCount: 1,
            })
            expect(response.organisationUnits.map(brief)).toEqual([
                { id: 'ou-5', displayName: 'Chisembe Clinic' },
                { id: 'ou-8', displayName: 'Kanona Clinic' },
            ])
            expect(response.ancestors.map(brief)).toEqual([
                { id: 'ou-3', displayName: 'Kabwe District' },
                { id: 'ou-6', displayName: 'Serenje District' },
            ])
        })
    })

    describe('short names and translations', () => {
        const translated = createInMemoryTreeEndpoint({
            orgUnits: zambiaOrgUnits.map((unit) => {
                if (unit.id === 'ou-3') {
                    return {
                        ...unit,
                        shortName: 'Kabwe',
                        translations: [
                            {
                                locale: 'fr',
                                property: 'NAME',
                                value: 'District de Kabwe',
                            },
                            {
                                locale: 'fr',
                                property: 'SHORT_NAME',
                                value: 'Kabwe (fr)',
                            },
                        ],
                    }
                }
                return unit
            }),
        })

        it('matches and returns the short name when shortName is true', () => {
            const response = translated({
                page: 1,
                pageSize: 50,
                search: '"Kabwe"',
                shortName: true,
            })

            expect(response.organisationUnits.map(brief)).toEqual([
                { id: 'ou-3', displayName: 'Kabwe' },
            ])
        })

        it('returns the translation for the locale and falls back to the original', () => {
            const response = translated({
                page: 1,
                pageSize: 50,
                roots: ['ou-2'],
                depth: 1,
                locale: 'fr',
            })

            expect(response.organisationUnits.map(brief)).toEqual([
                { id: 'ou-2', displayName: 'Central Province' },
                { id: 'ou-3', displayName: 'District de Kabwe' },
                { id: 'ou-6', displayName: 'Serenje District' },
            ])
        })

        it('matches the translated and the original name', () => {
            const viaTranslation = translated({
                page: 1,
                pageSize: 50,
                search: 'District de',
                locale: 'fr',
            })
            const viaOriginal = translated({
                page: 1,
                pageSize: 50,
                search: 'Kabwe District',
                locale: 'fr',
            })

            expect(viaTranslation.organisationUnits.map(brief)).toEqual([
                { id: 'ou-3', displayName: 'District de Kabwe' },
            ])
            expect(viaOriginal.organisationUnits.map(brief)).toEqual([
                { id: 'ou-3', displayName: 'District de Kabwe' },
            ])
        })

        it('sorts siblings by the displayed name', () => {
            // "District de Kabwe" sorts before "Serenje District" either way,
            // so translate Serenje to something that sorts first.
            const reordered = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits.map((unit) =>
                    unit.id === 'ou-6'
                        ? {
                              ...unit,
                              translations: [
                                  {
                                      locale: 'fr',
                                      property: 'NAME',
                                      value: 'Aaa',
                                  },
                              ],
                          }
                        : unit
                ),
            })

            const response = reordered({
                page: 1,
                pageSize: 50,
                roots: ['ou-2'],
                depth: 1,
                locale: 'fr',
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-2', 'ou-6', 'ou-3']
            )
        })
    })

    describe('filters', () => {
        it('limits direct results to a level while still returning ancestors', () => {
            const response = endpoint({
                page: 1,
                pageSize: 50,
                search: 'Kabwe',
                level: 4,
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-4']
            )
            expect(response.ancestors.map((entry) => entry.id)).toEqual([
                'ou-1',
                'ou-2',
                'ou-3',
            ])
        })

        it('limits direct results to members of any of the groups', () => {
            const grouped = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits,
                groups: [
                    {
                        id: 'g-1',
                        name: 'Clinics',
                        organisationUnits: ['ou-5', 'ou-15'],
                    },
                    {
                        id: 'g-2',
                        name: 'Hospitals',
                        organisationUnits: ['ou-7'],
                    },
                ],
            })

            const response = grouped({
                page: 1,
                pageSize: 50,
                groups: ['g-1', 'g-2'],
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-5', 'ou-7', 'ou-15']
            )
            expect(response.ancestors.map((entry) => entry.id)).toEqual([
                'ou-1',
                'ou-2',
                'ou-3',
                'ou-6',
                'ou-13',
                'ou-14',
            ])
        })

        it('limits direct results to units open today', () => {
            const dated = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits.map((unit) => {
                    if (unit.id === 'ou-4') {
                        return { ...unit, openingDate: '2030-01-01' }
                    }
                    if (unit.id === 'ou-5') {
                        return {
                            ...unit,
                            openingDate: '2000-01-01',
                            closedDate: '2020-06-30',
                        }
                    }
                    return { ...unit, openingDate: '2000-01-01' }
                }),
                today: new Date('2026-10-20'),
            })

            const response = dated({
                page: 1,
                pageSize: 50,
                roots: ['ou-3'],
                depth: 1,
                currentlyOpen: true,
            })

            expect(response.organisationUnits.map((entry) => entry.id)).toEqual(
                ['ou-3']
            )
        })
    })

    describe('failWith', () => {
        it('throws the error failWith returns for a query', () => {
            const failing = createInMemoryTreeEndpoint({
                orgUnits: zambiaOrgUnits,
                failWith: (query) =>
                    query.page === 2
                        ? new Error('page two is broken')
                        : undefined,
            })

            expect(failing({ page: 1, pageSize: 2 }).pager.page).toBe(1)
            expect(() => failing({ page: 2, pageSize: 2 })).toThrow(
                'page two is broken'
            )
        })
    })
})
