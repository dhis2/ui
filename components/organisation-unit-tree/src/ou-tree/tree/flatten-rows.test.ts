import {
    childrenPage,
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { createNodeCache, NodeCache } from '../cache/index'
import { flattenRows } from './flatten-rows'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const openSet = (...ids: string[]) => {
    const open = new Set(ids)
    return (id: string) => open.has(id)
}
const summary = (cache: NodeCache, roots: string[], ...open: string[]) =>
    flattenRows({ roots, isOpen: openSet(...open), cache }).rows.map((row) =>
        row.kind === 'node'
            ? `${'  '.repeat(row.depth)}${row.id}:${row.children.status}`
            : `${'  '.repeat(row.depth)}${row.kind}${
                  row.kind === 'skeleton' ? `#${row.index}` : `@${row.page}`
              }`
    )

describe('flattenRows', () => {
    const zambia = async (...open: string[]) => {
        const { api } = createTestTreeApi({ orgUnits: zambiaOrgUnits })
        // Three entries per page fit a parent and two children.
        const cache = createNodeCache({ api, pageSize: 3 })
        await cache.loadNodes(['ou-1', 'ou-13'])
        for (const id of open) {
            cache.requestChildrenPage(id, 1)
        }
        await flush()
        return cache
    }

    it('lists closed roots as node rows at depth 0, with their children status', async () => {
        const cache = await zambia()

        expect(summary(cache, ['ou-1', 'ou-13'])).toEqual([
            'ou-1:none',
            'ou-13:none',
        ])
    })

    it('skips roots the cache does not know', async () => {
        const cache = await zambia()

        expect(summary(cache, ['nope', 'ou-13'])).toEqual(['ou-13:none'])
    })

    it('lists loaded children under an open node at depth + 1, in slot order', async () => {
        const cache = await zambia('ou-1')

        expect(summary(cache, ['ou-1'], 'ou-1')).toEqual([
            'ou-1:loaded',
            '  ou-2:none',
            '  ou-13:none',
        ])
    })

    it('shows nothing under an open node whose page one is loading or failed, and says so on the row', async () => {
        const { api, nodeRequests, treeRequests } = createManualTreeApi()
        const cache = createNodeCache({ api, pageSize: 2 })
        const loadingRoots = cache.loadNodes(['p'])
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

        cache.requestChildrenPage('p', 1)
        expect(summary(cache, ['p'], 'p')).toEqual(['p:loading'])

        treeRequests[0].reject(new Error('boom'))
        await flush()
        expect(summary(cache, ['p'], 'p')).toEqual(['p:failed'])
    })

    it('shows skeleton rows for holes under a loading later page, and error rows under a failed one', async () => {
        const { api, treeRequests } = createManualTreeApi()
        const cache = createNodeCache({ api, pageSize: 2 })
        const parent = { id: 'p', path: '/p', level: 1 }
        cache.requestChildrenPage('p', 1)
        treeRequests[0].resolve(
            childrenPage({
                parent,
                children: [{ id: 'c1', displayName: 'c1' }],
                total: 8,
                page: 1,
                pageSize: 2,
            })
        )
        await flush()
        cache.requestChildrenPage('p', 2)
        cache.requestChildrenPage('p', 3)
        treeRequests[2].reject(new Error('boom'))
        await flush()

        // 7 children over pages of two entries, the parent taking the first
        // slot of page one: page 2 loading, page 3 failed, page 4 not requested.
        expect(summary(cache, ['p'], 'p')).toEqual([
            'p:loaded',
            '  c1:none',
            '  skeleton#1',
            '  skeleton#2',
            '  error@3',
            '  error@3',
            '  skeleton#5',
            '  skeleton#6',
        ])
    })

    it('nests open nodes and renders nothing under a leaf', async () => {
        const cache = await zambia('ou-1', 'ou-2', 'ou-3')

        expect(
            summary(cache, ['ou-1'], 'ou-1', 'ou-2', 'ou-3', 'ou-5')
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
        const cache = await zambia('ou-1')

        const { indexById } = flattenRows({
            roots: ['ou-1'],
            isOpen: openSet('ou-1'),
            cache,
        })

        expect([...indexById.entries()]).toEqual([
            ['ou-1', 0],
            ['ou-2', 1],
            ['ou-13', 2],
        ])
    })
})
