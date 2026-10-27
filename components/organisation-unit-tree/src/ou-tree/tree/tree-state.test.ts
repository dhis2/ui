import {
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { createNodeStore } from '../node-store/index'
import { createTreeState, TreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const ids = (tree: TreeState) =>
    Array.from({ length: tree.getRowCount() }, (_, index) => {
        const row = tree.getRow(index)
        return row.kind === 'node' ? row.id : row.kind
    })

// Three children per page hold every Zambia parent but Serenje District.
const setup = (
    roots: string[],
    options: { initiallyOpen?: string[]; pageSize?: number } = {}
) => {
    const { api, childrenCalls, nodeCalls } = createTestTreeApi({
        orgUnits: zambiaOrgUnits,
        pageSize: options.pageSize ?? 3,
    })
    const store = createNodeStore({ api })
    const tree = createTreeState({
        store,
        roots,
        initiallyOpen: options.initiallyOpen,
    })
    tree.loadInitial()
    return { tree, store, childrenCalls, nodeCalls }
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

        it('keeps the requested roots as given, before and after loading', async () => {
            const { tree } = setup(['ou-3', 'nope', 'ou-1'])

            expect(tree.requestedRoots).toEqual(['ou-3', 'nope', 'ou-1'])
            expect(tree.roots).toEqual([])
            await flush()

            expect(tree.requestedRoots).toEqual(['ou-3', 'nope', 'ou-1'])
            expect(tree.roots).toEqual(['ou-1'])
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
            const store = createNodeStore({ api })
            const tree = createTreeState({ store, roots: ['ou-1'] })
            tree.loadInitial()
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
            const { tree, childrenCalls } = setup(['ou-1'], {
                initiallyOpen: ['ou-1', 'ou-2'],
            })
            await flush()

            expect(childrenCalls.map((call) => call.parentId)).toEqual([
                'ou-1',
                'ou-2',
            ])
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-3', 'ou-6', 'ou-13'])
        })
    })

    describe('open and close', () => {
        it('opening requests page one once and shows loading on the row', async () => {
            const { tree, childrenCalls } = setup(['ou-1'])
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

            expect(childrenCalls).toHaveLength(1)
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
        })

        it('closing hides children but keeps them stored; toggle flips', async () => {
            const { tree, store } = setup(['ou-1'])
            await flush()
            tree.open('ou-1')
            await flush()

            tree.toggle('ou-1')
            expect(ids(tree)).toEqual(['ou-1'])
            expect(store.getChildren('ou-1').status).toBe('loaded')
            tree.toggle('ou-1')
            expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
        })

        it('does not request children of a leaf', async () => {
            const { tree, childrenCalls } = setup(['ou-5'])
            await flush()

            tree.open('ou-5')
            await flush()

            expect(childrenCalls).toEqual([])
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
                'ou-10',
                'skeleton',
                'skeleton',
                'skeleton',
                'skeleton',
            ])
            expect(tree.getRowIndex('ou-10')).toBe(2)
            expect(tree.getRowIndex('ou-8')).toBeUndefined()
            expect(tree.getRow(3)).toEqual({
                kind: 'skeleton',
                parentId: 'ou-6',
                index: 2,
                depth: 1,
            })
        })

        it('ensureChildrenLoaded requests only the pages covering skeletons in range, once', async () => {
            const { tree, childrenCalls } = setup(['ou-6'], { pageSize: 2 })
            await flush()
            tree.open('ou-6')
            await flush()

            tree.ensureChildrenLoaded(3, 4)
            tree.ensureChildrenLoaded(3, 4)
            await flush()

            expect(childrenCalls.map((call) => call.page)).toEqual([1, 2])
            expect(ids(tree)).toEqual([
                'ou-6',
                'ou-12',
                'ou-10',
                'ou-8',
                'ou-9',
                'skeleton',
                'skeleton',
            ])
        })

        it('clamps an out-of-range ensureChildrenLoaded', async () => {
            const { tree, childrenCalls } = setup(['ou-6'], { pageSize: 2 })
            await flush()
            tree.open('ou-6')
            await flush()

            expect(() => tree.ensureChildrenLoaded(-5, 500)).not.toThrow()
            await flush()

            expect(childrenCalls.map((call) => call.page)).toEqual([1, 2, 3])
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
        it('notifies on open and on store changes, and stops after unsubscribe', async () => {
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
            expect(listener.mock.calls).toHaveLength(afterUnsubscribe)
        })

        it('reports a store change that happened while nobody listened', async () => {
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

describe('createTreeState before loadInitial', () => {
    it('requests nothing until loadInitial, which loads only once', async () => {
        const { api, childrenCalls, nodeCalls } = createTestTreeApi({
            orgUnits: zambiaOrgUnits,
            pageSize: 2,
        })
        const store = createNodeStore({ api })
        const tree = createTreeState({
            store,
            roots: ['ou-1'],
            initiallyOpen: ['ou-1'],
        })
        await flush()
        expect(nodeCalls).toEqual([])
        expect(childrenCalls).toEqual([])

        tree.loadInitial()
        tree.loadInitial()
        await flush()

        expect(nodeCalls).toEqual([['ou-1']])
        expect(childrenCalls).toHaveLength(1)
    })
})

describe('row identity', () => {
    it('keeps a row object across unrelated changes', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        tree.open('ou-1')
        await flush()
        const before = tree.getRow(tree.getRowIndex('ou-13') as number)

        tree.open('ou-2')
        await flush()

        expect(tree.getRow(tree.getRowIndex('ou-13') as number)).toBe(before)
        expect(tree.getRow(0)).toBe(tree.getRow(0))
    })
})
