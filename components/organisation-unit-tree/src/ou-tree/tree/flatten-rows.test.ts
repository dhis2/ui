import {
    childrenPage,
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { createNodeStore, NodeStore } from '../node-store/index'
import { flattenRows } from './flatten-rows'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const openSet = (...ids: string[]) => {
    const open = new Set(ids)
    return (id: string) => open.has(id)
}
const summary = (store: NodeStore, roots: string[], ...open: string[]) =>
    flattenRows({ roots, isOpen: openSet(...open), store }).rows.map((row) =>
        row.kind === 'node'
            ? `${'  '.repeat(row.depth)}${row.id}:${row.children.status}`
            : `${'  '.repeat(row.depth)}${row.kind}${
                  row.kind === 'skeleton' ? `#${row.index}` : `@${row.page}`
              }`
    )

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

    it('skips roots the store does not know', async () => {
        const store = await zambia()

        expect(summary(store, ['nope', 'ou-13'])).toEqual(['ou-13:none'])
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
            '  skeleton#2',
            '  skeleton#3',
            '  error@3',
            '  error@3',
            '  skeleton#6',
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

    it('maps every node id to its row index', async () => {
        const store = await zambia('ou-1')

        const { indexById } = flattenRows({
            roots: ['ou-1'],
            isOpen: openSet('ou-1'),
            store,
        })

        expect([...indexById.entries()]).toEqual([
            ['ou-1', 0],
            ['ou-2', 1],
            ['ou-13', 2],
        ])
    })
})
