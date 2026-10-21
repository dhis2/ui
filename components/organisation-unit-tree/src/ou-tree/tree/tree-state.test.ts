import {
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { createNodeCache } from '../cache/index'
import { createTreeState, TreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const ids = (tree: TreeState) =>
    Array.from({ length: tree.getRowCount() }, (_, index) => {
        const row = tree.getRow(index)
        return row.kind === 'node' ? row.id : row.kind
    })

// Three entries per page fit a parent and two children, the most any
// Zambia parent but Serenje District has.
const setup = (
    roots: string[],
    options: { initiallyOpen?: string[]; pageSize?: number } = {}
) => {
    const { api, treeCalls, nodeCalls } = createTestTreeApi({
        orgUnits: zambiaOrgUnits,
    })
    const cache = createNodeCache({ api, pageSize: options.pageSize ?? 3 })
    const tree = createTreeState({
        cache,
        roots,
        initiallyOpen: options.initiallyOpen,
    })
    tree.start()
    return { tree, cache, treeCalls, nodeCalls }
}

describe('createTreeState', () => {
    describe('roots', () => {
        it('loads the roots once and has no rows until then', async () => {
            const { tree, nodeCalls } = setup(['ou-13', 'ou-2'])

            expect(tree.getRootsStatus()).toEqual({ status: 'loading' })
            expect(tree.getRowCount()).toBe(0)
            await flush()

            expect(tree.getRootsStatus()).toEqual({ status: 'loaded' })
            expect(nodeCalls).toEqual([['ou-13', 'ou-2']])
            expect(ids(tree)).toEqual(['ou-13', 'ou-2'])
        })

        it('excludes a root under another root and an id gist does not return', async () => {
            const { tree } = setup(['ou-3', 'nope', 'ou-1'])
            await flush()

            expect(tree.roots).toEqual(['ou-1'])
            expect(ids(tree)).toEqual(['ou-1'])
        })

        it('is loaded without a request for an empty list', async () => {
            const { tree, nodeCalls } = setup([])
            await flush()

            expect(tree.getRootsStatus()).toEqual({ status: 'loaded' })
            expect(nodeCalls).toEqual([])
            expect(tree.getRowCount()).toBe(0)
        })

        it('reports a failed load and retries it', async () => {
            const { api, nodeRequests } = createManualTreeApi()
            const cache = createNodeCache({ api })
            const tree = createTreeState({ cache, roots: ['ou-1'] })
            tree.start()
            const error = new Error('nope')
            nodeRequests[0].reject(error)
            await flush()
            expect(tree.getRootsStatus()).toEqual({ status: 'failed', error })

            tree.retryRoots()
            expect(tree.getRootsStatus()).toEqual({ status: 'loading' })
            nodeRequests[1].resolve([
                {
                    id: 'ou-1',
                    displayName: 'Zambia',
                    path: '/ou-1',
                    level: 1,
                    childrenCount: 2,
                },
            ])
            await flush()
            expect(tree.getRootsStatus()).toEqual({ status: 'loaded' })
            expect(ids(tree)).toEqual(['ou-1'])
        })

        it('requests page one of initiallyOpen nodes, roots or not', async () => {
            const { tree, treeCalls } = setup(['ou-1'], {
                initiallyOpen: ['ou-1', 'ou-2'],
            })
            await flush()

            expect(treeCalls.map((call) => call.roots)).toEqual([
                ['ou-1'],
                ['ou-2'],
            ])
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-3', 'ou-6', 'ou-13'])
        })
    })

    describe('open and close', () => {
        it('opening requests page one once and shows loading on the row', async () => {
            const { tree, treeCalls } = setup(['ou-1'])
            await flush()

            tree.open('ou-1')
            expect(tree.isOpen('ou-1')).toBe(true)
            expect(tree.getRow(0)).toEqual({
                kind: 'node',
                id: 'ou-1',
                depth: 0,
                children: { status: 'loading' },
            })
            tree.close('ou-1')
            tree.open('ou-1')
            await flush()

            expect(treeCalls).toHaveLength(1)
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
        })

        it('closing hides children but keeps them cached; toggle flips', async () => {
            const { tree, cache } = setup(['ou-1'])
            await flush()
            tree.open('ou-1')
            await flush()

            tree.toggle('ou-1')
            expect(ids(tree)).toEqual(['ou-1'])
            expect(cache.getChildren('ou-1').status).toBe('loaded')
            tree.toggle('ou-1')
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
        })

        it('does not request children of a leaf', async () => {
            const { tree, treeCalls } = setup(['ou-5'])
            await flush()

            tree.open('ou-5')
            await flush()

            expect(treeCalls).toEqual([])
            expect(ids(tree)).toEqual(['ou-5'])
        })
    })

    describe('rows', () => {
        it('exposes count, row and index, and skeletons for unloaded slots', async () => {
            const { tree } = setup(['ou-6'], { pageSize: 2 })
            await flush()
            tree.open('ou-6')
            await flush()

            expect(tree.getRowCount()).toBe(7)
            expect(ids(tree)).toEqual([
                'ou-6',
                'ou-12',
                'skeleton',
                'skeleton',
                'skeleton',
                'skeleton',
                'skeleton',
            ])
            expect(tree.getRowIndex('ou-12')).toBe(1)
            expect(tree.getRowIndex('ou-10')).toBeUndefined()
            expect(tree.getRow(3)).toEqual({
                kind: 'skeleton',
                parentId: 'ou-6',
                index: 2,
                depth: 1,
            })
        })

        it('ensureChildrenLoaded requests only the pages covering skeletons in range, once', async () => {
            const { tree, treeCalls } = setup(['ou-6'], { pageSize: 2 })
            await flush()
            tree.open('ou-6')
            await flush()

            tree.ensureChildrenLoaded(2, 3)
            tree.ensureChildrenLoaded(2, 3)
            await flush()

            expect(treeCalls.map((call) => call.page)).toEqual([1, 2])
            expect(ids(tree)).toEqual([
                'ou-6',
                'ou-12',
                'ou-10',
                'ou-8',
                'skeleton',
                'skeleton',
                'skeleton',
            ])
        })

        it('clamps an out-of-range ensureChildrenLoaded', async () => {
            const { tree, treeCalls } = setup(['ou-6'], { pageSize: 2 })
            await flush()
            tree.open('ou-6')
            await flush()

            expect(() => tree.ensureChildrenLoaded(-5, 500)).not.toThrow()
            await flush()

            expect(treeCalls.map((call) => call.page)).toEqual([1, 2, 3, 4])
            expect(tree.getRowCount()).toBe(7)
            expect(ids(tree)).not.toContain('skeleton')
        })

        it('throws for a row index out of range', async () => {
            const { tree } = setup(['ou-1'])
            await flush()

            expect(() => tree.getRow(1)).toThrow('Row 1 is out of range')
        })
    })

    describe('subscription', () => {
        it('notifies on open and on cache changes, and stops after unsubscribe', async () => {
            const { tree } = setup(['ou-1'])
            const listener = jest.fn()
            const unsubscribe = tree.subscribe(listener)
            await flush()
            const afterRoots = listener.mock.calls.length
            expect(afterRoots).toBeGreaterThan(0)

            tree.open('ou-1')
            expect(listener.mock.calls.length).toBeGreaterThan(afterRoots)
            const afterOpen = listener.mock.calls.length
            await flush()
            expect(listener.mock.calls.length).toBeGreaterThan(afterOpen)

            unsubscribe()
            const afterUnsubscribe = listener.mock.calls.length
            tree.open('ou-2')
            await flush()
            expect(listener.mock.calls.length).toBe(afterUnsubscribe)
        })

        it('reports a cache change that happened while nobody listened', async () => {
            const { tree } = setup(['ou-1'])
            const before = tree.getVersion()

            await flush()

            expect(tree.getVersion()).toBeGreaterThan(before)
        })

        it('bumps the version whenever it notifies', async () => {
            const { tree } = setup(['ou-1'])
            const before = tree.getVersion()
            await flush()

            expect(tree.getVersion()).toBeGreaterThan(before)
        })
    })
})

describe('createTreeState before start', () => {
    it('requests nothing until started, and starts only once', async () => {
        const { api, treeCalls, nodeCalls } = createTestTreeApi({
            orgUnits: zambiaOrgUnits,
        })
        const cache = createNodeCache({ api, pageSize: 2 })
        const tree = createTreeState({
            cache,
            roots: ['ou-1'],
            initiallyOpen: ['ou-1'],
        })
        await flush()
        expect(nodeCalls).toEqual([])
        expect(treeCalls).toEqual([])

        tree.start()
        tree.start()
        await flush()

        expect(nodeCalls).toEqual([['ou-1']])
        expect(treeCalls).toHaveLength(1)
    })
})
