import {
    childrenPage,
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__'
import { createNodeStore, NodeStore } from '../node-store'
import {
    type SearchRowsInput,
    type FlatRows,
    flattenRows,
    type Row,
} from './flatten-rows'
import { addResults, createPrunedTree } from './pruned-tree'
import { rowKey } from './row-key'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const openSet = (...ids: string[]) => new Set(ids)
const rootNodesOf = (store: NodeStore, ids: string[]) =>
    ids.flatMap((id) => store.getNode(id) ?? [])
const describeRow = (
    row: Row,
    store: NodeStore,
    resultIds: ReadonlySet<string> = new Set()
) => {
    const indent = '  '.repeat(row.depth)
    switch (row.kind) {
        case 'node':
            return `${indent}${row.id}:${store.getChildren(row.id).status}${
                row.view === 'pruned' ? ':pruned' : ''
            }${resultIds.has(row.id) ? '*' : ''}`
        case 'children-skeleton':
        case 'result-skeleton':
            return `${indent}${row.kind}#${row.index}`
        case 'children-error':
        case 'result-error':
            return `${indent}${row.kind}@${row.page}`
    }
}
const summary = (store: NodeStore, rootIds: string[], ...open: string[]) =>
    flattenRows({
        rootNodes: rootNodesOf(store, rootIds),
        openIds: openSet(...open),
        store,
    }).rows.map((row) => describeRow(row, store))

describe('flattenRows', () => {
    const zambia = async (...open: string[]) => {
        const { api } = createTestTreeApi({
            orgUnits: zambiaOrgUnits,
            pageSize: 2,
        })
        // Two children per page hold every parent opened here.
        const store = createNodeStore({ api })
        await store.loadNodes(['ou-1', 'ou-13'])
        for (const id of open) {
            store.requestChildrenPage(id, 1)
        }
        await flush()
        return store
    }

    it('lists closed roots as node rows at depth 0, with their children status', async () => {
        const store = await zambia()

        expect(summary(store, ['ou-1', 'ou-13'])).toEqual([
            'ou-1:none',
            'ou-13:none',
        ])
    })

    it('throws on a listed node the store does not hold', async () => {
        const store = await zambia()
        const stranger = {
            id: 'nope',
            displayName: 'Nope',
            path: '/nope',
            level: 1,
            leaf: false,
        }
        const pruned = createPrunedTree()
        pruned.roots.push('nope')
        pruned.placed.add('nope')

        expect(() =>
            flattenRows({ rootNodes: [stranger], openIds: openSet(), store })
        ).toThrow('node nope is listed but not in the store')
        expect(() =>
            flattenRows({
                rootNodes: [],
                openIds: openSet(),
                store,
                search: {
                    pruned,
                    resultIds: new Set(),
                    revealedIds: new Set(),
                    loaded: 0,
                    total: undefined,
                    pageSize: 50,
                },
            })
        ).toThrow('node nope is listed but not in the store')
    })

    it('lists loaded children under an open node at depth + 1, in slot order', async () => {
        const store = await zambia('ou-1')

        expect(summary(store, ['ou-1'], 'ou-1')).toEqual([
            'ou-1:loaded',
            '  ou-2:none',
            '  ou-13:none',
        ])
    })

    it('shows nothing under an open node whose page one is loading or failed, and says so on the row', async () => {
        const { api, nodeRequests, childrenRequests } = createManualTreeApi()
        const store = createNodeStore({ api })
        const loadingRoots = store.loadNodes(['p'])
        nodeRequests[0].resolve([
            {
                id: 'p',
                displayName: 'p',
                path: '/p',
                level: 1,
                childrenCount: 3,
            },
        ])
        await loadingRoots

        store.requestChildrenPage('p', 1)
        expect(summary(store, ['p'], 'p')).toEqual(['p:loading'])

        childrenRequests[0].reject(new Error('boom'))
        await flush()
        expect(summary(store, ['p'], 'p')).toEqual(['p:failed'])
    })

    it('shows skeleton rows for empty slots under a loading later page, and error rows under a failed one', async () => {
        const { api, nodeRequests, childrenRequests } = createManualTreeApi()
        const store = createNodeStore({ api })
        const parent = { path: '/p', level: 1 }
        const loadingRoots = store.loadNodes(['p'])
        nodeRequests[0].resolve([
            {
                id: 'p',
                displayName: 'p',
                path: '/p',
                level: 1,
                childrenCount: 7,
            },
        ])
        await loadingRoots
        store.requestChildrenPage('p', 1)
        childrenRequests[0].resolve(
            childrenPage({
                parent,
                children: [
                    { id: 'c1', displayName: 'c1' },
                    { id: 'c2', displayName: 'c2' },
                ],
                total: 7,
                page: 1,
                pageSize: 2,
            })
        )
        await flush()
        store.requestChildrenPage('p', 2)
        store.requestChildrenPage('p', 3)
        childrenRequests[2].reject(new Error('boom'))
        await flush()

        // 7 children over pages of two: page 2 loading, page 3 failed, page 4
        // not requested.
        expect(summary(store, ['p'], 'p')).toEqual([
            'p:loaded',
            '  c1:none',
            '  c2:none',
            '  children-skeleton#2',
            '  children-skeleton#3',
            '  children-error@3',
            '  children-error@3',
            '  children-skeleton#6',
        ])
    })

    it('nests open nodes and renders nothing under a leaf', async () => {
        const store = await zambia('ou-1', 'ou-2', 'ou-3')

        expect(
            summary(store, ['ou-1'], 'ou-1', 'ou-2', 'ou-3', 'ou-5')
        ).toEqual([
            'ou-1:loaded',
            '  ou-2:loaded',
            '    ou-3:loaded',
            '      ou-5:none',
            '      ou-4:none',
            '    ou-6:none',
            '  ou-13:none',
        ])
    })

    it('indexes every row by its key, a node by its id', async () => {
        const store = await zambia('ou-1', 'ou-2', 'ou-6')

        const { rows, indexByKey } = flattenRows({
            rootNodes: rootNodesOf(store, ['ou-1']),
            openIds: openSet('ou-1', 'ou-2', 'ou-6'),
            store,
        })

        expect([...indexByKey.keys()]).toEqual(rows.map(rowKey))
        expect(indexByKey.get('ou-12')).toBe(4)
        expect(indexByKey.get('children-skeleton:ou-6:2')).toBe(6)
    })
})

describe('flattenRows row identity', () => {
    it('reuses node rows whose depth and view are unchanged, whatever their children status', async () => {
        const { api } = createTestTreeApi({
            orgUnits: zambiaOrgUnits,
            pageSize: 2,
        })
        const store = createNodeStore({ api })
        await store.loadNodes(['ou-1'])
        store.requestChildrenPage('ou-1', 1)
        await flush()
        const first = flattenRows({
            rootNodes: rootNodesOf(store, ['ou-1']),
            openIds: openSet('ou-1'),
            store,
        })

        store.requestChildrenPage('ou-2', 1)
        await flush()
        const second = flattenRows({
            rootNodes: rootNodesOf(store, ['ou-1']),
            openIds: openSet('ou-1', 'ou-2'),
            store,
            previous: first,
        })

        // ou-2's children status changed, but a row does not carry it.
        expect(second.rows[0]).toBe(first.rows[0])
        expect(second.rows[1]).toBe(first.rows[1])
        const ou13 = second.rows[second.indexByKey.get('ou-13') as number]
        expect(ou13).toBe(first.rows[first.indexByKey.get('ou-13') as number])
    })

    it('reuses skeleton and error rows below a node that opens', async () => {
        const { api, nodeRequests, childrenRequests } = createManualTreeApi()
        const store = createNodeStore({ api })
        const loadingRoots = store.loadNodes(['p'])
        nodeRequests[0].resolve([
            {
                id: 'p',
                displayName: 'p',
                path: '/p',
                level: 1,
                childrenCount: 6,
            },
        ])
        await loadingRoots
        // Six children over pages of two: page 1 loaded, page 2 failed,
        // page 3 not requested.
        store.requestChildrenPage('p', 1)
        childrenRequests[0].resolve({
            pager: { page: 1, pageSize: 2, total: 6, pageCount: 3 },
            organisationUnits: [
                {
                    id: 'c1',
                    displayName: 'c1',
                    path: '/p/c1',
                    level: 2,
                    leaf: false,
                },
                {
                    id: 'c2',
                    displayName: 'c2',
                    path: '/p/c2',
                    level: 2,
                    leaf: true,
                },
            ],
        })
        await flush()
        store.requestChildrenPage('p', 2)
        childrenRequests[1].reject(new Error('boom'))
        await flush()
        const first = flattenRows({
            rootNodes: rootNodesOf(store, ['p']),
            openIds: openSet('p'),
            store,
        })
        expect(summary(store, ['p'], 'p')).toEqual([
            'p:loaded',
            '  c1:none',
            '  c2:none',
            '  children-error@2',
            '  children-error@2',
            '  children-skeleton#4',
            '  children-skeleton#5',
        ])

        // Open c1 with one loaded child, so a row appears above the slots.
        store.requestChildrenPage('c1', 1)
        childrenRequests[2].resolve(
            childrenPage({
                parent: { path: '/p/c1', level: 2 },
                children: [{ id: 'g1', displayName: 'g1' }],
                total: 1,
                page: 1,
                pageSize: 2,
            })
        )
        await flush()
        const second = flattenRows({
            rootNodes: rootNodesOf(store, ['p']),
            openIds: openSet('p', 'c1'),
            store,
            previous: first,
        })

        expect(summary(store, ['p'], 'p', 'c1')[2]).toBe('    g1:none')
        // Every row below g1 moved down by one and kept its object.
        expect(second.rows[4]).toBe(first.rows[3])
        expect(second.rows[5]).toBe(first.rows[4])
        expect(second.rows[6]).toBe(first.rows[5])
        expect(second.rows[7]).toBe(first.rows[6])
    })
})

describe('flattenRows in search mode', () => {
    // Kanona Clinic (ou-8) and Chikupi Mission (ou-10) under Serenje District
    // (ou-6), which has six children in pages of two.
    const setup = async (resultIds: string[]) => {
        const { api } = createTestTreeApi({
            orgUnits: zambiaOrgUnits,
            pageSize: 2,
        })
        const store = createNodeStore({ api })
        await store.loadNodes(['ou-1', 'ou-2', 'ou-6', 'ou-8', 'ou-10'])
        const pruned = createPrunedTree()
        addResults({
            pruned,
            results: resultIds.map((id) => ({
                id,
                path: store.getNode(id)?.path ?? '',
            })),
            shownRootIds: new Set(['ou-1']),
            store,
        })
        const search: SearchRowsInput = {
            pruned,
            resultIds: new Set(resultIds),
            revealedIds: new Set(),
            loaded: resultIds.length,
            total: resultIds.length,
            pageSize: 2,
        }
        const rows = (
            overrides: Partial<SearchRowsInput>,
            previous?: FlatRows,
            open = ['ou-1', 'ou-2', 'ou-6']
        ) => {
            const flat = flattenRows({
                rootNodes: rootNodesOf(store, ['ou-1']),
                openIds: openSet(...open),
                store,
                previous,
                search: { ...search, ...overrides },
            })
            return {
                ...flat,
                described: flat.rows.map((row) =>
                    describeRow(row, store, search.resultIds)
                ),
            }
        }
        return { store, rows, search }
    }

    it('walks the pruned tree under open nodes, marking results, with no full children', async () => {
        const { rows } = await setup(['ou-8'])

        expect(rows({}).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:none:pruned',
            '      ou-8:none:pruned*',
        ])
    })

    it('shows nothing under a closed pruned node', async () => {
        const { rows } = await setup(['ou-8'])

        expect(rows({}, undefined, ['ou-1', 'ou-2']).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:none:pruned',
        ])
    })

    it('uses the full walk under an open pruned node without matching children', async () => {
        const { store, rows } = await setup(['ou-6'])
        store.requestChildrenPage('ou-6', 1)
        await flush()

        expect(rows({}).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:loaded:pruned*',
            '      ou-12:none',
            '      ou-10:none',
            '      children-skeleton#2',
            '      children-skeleton#3',
            '      children-skeleton#4',
            '      children-skeleton#5',
        ])
    })

    it('keeps the matching children under a revealed node until its first page is loaded', async () => {
        const { store, rows } = await setup(['ou-10'])
        const revealed = { revealedIds: new Set(['ou-6']) }

        expect(rows(revealed).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:none:pruned',
            '      ou-10:none:pruned*',
        ])

        store.requestChildrenPage('ou-6', 1)
        expect(rows(revealed).described[2]).toBe('    ou-6:loading:pruned')
        expect(rows(revealed).rows).toHaveLength(4)
        await flush()
        expect(rows(revealed).rows).toHaveLength(9)
    })

    it('lists all children under a revealed node, a pruned-tree node among them keeping its view, and nothing while closed', async () => {
        const { store, rows } = await setup(['ou-10'])
        store.requestChildrenPage('ou-6', 1)
        await flush()
        const revealed = { revealedIds: new Set(['ou-6']) }

        expect(rows(revealed, undefined, ['ou-1', 'ou-2']).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:loaded:pruned',
        ])
        expect(rows(revealed).described).toEqual([
            'ou-1:none:pruned',
            '  ou-2:none:pruned',
            '    ou-6:loaded:pruned',
            '      ou-12:none',
            '      ou-10:none:pruned*',
            '      children-skeleton#2',
            '      children-skeleton#3',
            '      children-skeleton#4',
            '      children-skeleton#5',
        ])
    })

    it('indexes pruned and full node rows alike', async () => {
        const { store, rows } = await setup(['ou-10'])
        store.requestChildrenPage('ou-6', 1)
        await flush()

        const { indexByKey } = rows({ revealedIds: new Set(['ou-6']) })

        expect(indexByKey.get('ou-6')).toBe(2)
        expect(indexByKey.get('ou-10')).toBe(4)
    })

    it('appends result placeholders after the last row, at its depth', async () => {
        const { rows } = await setup(['ou-8', 'ou-10'])

        expect(rows({ total: 5 }).described.slice(5)).toEqual([
            '      result-skeleton#2',
            '      result-skeleton#3',
            '      result-skeleton#4',
        ])
    })

    it("turns the failed page's slots into result-error rows and leaves the rest skeletons", async () => {
        const { rows } = await setup(['ou-8', 'ou-10'])
        const error = new Error('boom')

        expect(
            rows({ total: 5, failedPage: { page: 2, error } }).described.slice(
                5
            )
        ).toEqual([
            '      result-error@2',
            '      result-error@2',
            '      result-skeleton#4',
        ])
    })

    it('shows one result-error row for a failed page one and nothing while it loads', async () => {
        const { rows } = await setup([])
        const loading = { loaded: 0, total: undefined }

        expect(rows(loading).rows).toEqual([])
        expect(
            rows({
                ...loading,
                failedPage: { page: 1, error: new Error('boom') },
            }).rows
        ).toEqual([
            {
                kind: 'result-error',
                index: 0,
                page: 1,
                error: expect.any(Error),
                depth: 0,
            },
        ])
    })

    it('keeps row identity across rebuilds for pruned and placeholder rows', async () => {
        const { rows } = await setup(['ou-8'])
        const first = rows({ loaded: 1, total: 4 })

        const second = rows({ loaded: 1, total: 4 }, first)
        expect(second.rows).toHaveLength(7)
        second.rows.forEach((row, index) => expect(row).toBe(first.rows[index]))

        // The next result arrives: the remaining placeholders move up by
        // one and keep their objects.
        const third = rows({ loaded: 2, total: 4 }, second)
        expect(third.rows).toHaveLength(6)
        expect(third.rows[4]).toBe(second.rows[5])
        expect(third.rows[5]).toBe(second.rows[6])
    })
})
