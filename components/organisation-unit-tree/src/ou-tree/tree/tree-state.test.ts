import {
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__'
import { createNodeStore } from '../node-store'
import { createTreeState, TreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const ids = (tree: TreeState) =>
    Array.from({ length: tree.getRowCount() }, (_, index) => {
        const row = tree.getRow(index)
        return row.kind === 'node' ? row.id : row.kind
    })

// Three children per page hold every Zambia parent but Serenje District.
const setup = (
    rootIds: string[],
    options: { initiallyOpen?: string[]; pageSize?: number } = {}
) => {
    const { api, childrenCalls, nodeCalls } = createTestTreeApi({
        orgUnits: zambiaOrgUnits,
        pageSize: options.pageSize ?? 3,
    })
    const store = createNodeStore({ api })
    const tree = createTreeState({
        store,
        rootIds,
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

            expect(tree.rootIds).toEqual(['ou-3', 'nope', 'ou-1'])
            expect(tree.rootNodes.map((node) => node.id)).toEqual([])
            await flush()

            expect(tree.rootIds).toEqual(['ou-3', 'nope', 'ou-1'])
            expect(tree.rootNodes.map((node) => node.id)).toEqual(['ou-1'])
        })

        it('excludes a root under another root and an id gist does not return', async () => {
            const { tree } = setup(['ou-3', 'nope', 'ou-1'])
            await flush()

            expect(tree.rootNodes.map((node) => node.id)).toEqual(['ou-1'])
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
            const tree = createTreeState({ store, rootIds: ['ou-1'] })
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
                view: 'full',
            })
            expect(tree.store.getChildren('ou-1').status).toBe('loading')
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

        it('is not open while page one failed, and opening again requests it again', async () => {
            const { api, nodeRequests, childrenRequests } =
                createManualTreeApi()
            const store = createNodeStore({ api })
            const tree = createTreeState({ store, rootIds: ['p'] })
            tree.loadInitial()
            nodeRequests[0].resolve([
                {
                    id: 'p',
                    displayName: 'p',
                    path: '/p',
                    level: 1,
                    childrenCount: 1,
                },
            ])
            await flush()
            tree.open('p')
            childrenRequests[0].reject(new Error('boom'))
            await flush()

            expect(tree.isOpen('p')).toBe(false)
            expect(tree.getRow(0)).toMatchObject({ id: 'p' })
            expect(tree.store.getChildren('p').status).toBe('failed')

            tree.toggle('p')

            expect(childrenRequests).toHaveLength(2)
            expect(tree.isOpen('p')).toBe(true)
            expect(tree.getRow(0)).toMatchObject({ view: 'full' })
            expect(tree.store.getChildren('p').status).toBe('loading')
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
                'children-skeleton',
                'children-skeleton',
                'children-skeleton',
                'children-skeleton',
            ])
            expect(tree.getRowIndex('ou-10')).toBe(2)
            expect(tree.getRowIndex('ou-8')).toBeUndefined()
            expect(tree.getRow(3)).toEqual({
                kind: 'children-skeleton',
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
                'children-skeleton',
                'children-skeleton',
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
            expect(ids(tree)).not.toContain('children-skeleton')
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
            rootIds: ['ou-1'],
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

describe('hovered row', () => {
    it('setHovered marks one node hovered at a time, notifies, and clears', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        const listener = jest.fn()
        tree.subscribe(listener)
        expect(tree.isHovered('ou-1')).toBe(false)

        tree.setHovered('ou-1')
        expect(tree.isHovered('ou-1')).toBe(true)
        expect(listener).toHaveBeenCalledTimes(1)

        tree.setHovered('ou-2')
        expect(tree.isHovered('ou-1')).toBe(false)
        expect(tree.isHovered('ou-2')).toBe(true)

        tree.setHovered(undefined)
        expect(tree.isHovered('ou-2')).toBe(false)
        expect(listener).toHaveBeenCalledTimes(3)
    })

    it('setHovered with the current value notifies nobody', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        const listener = jest.fn()
        tree.subscribe(listener)

        tree.setHovered(undefined)
        tree.setHovered('ou-1')
        tree.setHovered('ou-1')

        expect(listener).toHaveBeenCalledTimes(1)
    })
})

describe('focused row', () => {
    it('has no focused row until one is set', async () => {
        const { tree } = setup(['ou-1'])
        expect(tree.getFocusedIndex()).toBeUndefined()
        await flush()

        expect(tree.getFocusedIndex()).toBeUndefined()
        expect(tree.getFocusedKey()).toBeUndefined()
        expect(tree.focusRow(0)).toBe(0)
        expect(tree.getFocusedIndex()).toBe(0)
        expect(tree.getFocusedKey()).toBe('ou-1')
    })

    it('moves with next, previous, first and last, and stays put at the ends', async () => {
        const { tree } = setup(['ou-1'], { initiallyOpen: ['ou-1'] })
        await flush()
        const listener = jest.fn()
        tree.subscribe(listener)

        expect(tree.focusFirst()).toBe(0)
        expect(tree.focusNext()).toBe(1)
        expect(tree.focusNext()).toBe(2)
        expect(tree.focusNext()).toBeUndefined()
        expect(tree.getFocusedIndex()).toBe(2)
        expect(tree.focusLast()).toBe(2)
        expect(tree.focusPrevious()).toBe(1)
        expect(tree.focusFirst()).toBe(0)
        expect(tree.focusPrevious()).toBeUndefined()
        expect(tree.getFocusedIndex()).toBe(0)
        // One notification per move, none for a move that went nowhere.
        expect(listener).toHaveBeenCalledTimes(6)
    })

    it('focusChild moves to the next row only when it is deeper; focusParent to the nearest shallower row', async () => {
        const { tree } = setup(['ou-1'], { initiallyOpen: ['ou-1'] })
        await flush()

        tree.focusRow(0)
        expect(tree.focusChild()).toBe(1)
        expect(tree.focusChild()).toBeUndefined()
        expect(tree.getFocusedIndex()).toBe(1)
        tree.focusRow(2)
        expect(tree.focusParent()).toBe(0)
        expect(tree.focusParent()).toBeUndefined()
        expect(tree.getFocusedIndex()).toBe(0)
    })

    it('keeps the row by key when rows above it change', async () => {
        const { tree } = setup(['ou-13', 'ou-2'])
        await flush()
        tree.focusRow(1)
        expect(tree.getFocusedKey()).toBe('ou-2')

        tree.open('ou-13')
        await flush()

        expect(tree.getRowIndex('ou-2')).toBeGreaterThan(1)
        expect(tree.getFocusedIndex()).toBe(tree.getRowIndex('ou-2'))
        expect(tree.getFocusedKey()).toBe('ou-2')
    })

    it('falls back to the index when the focused key is gone', async () => {
        const { tree } = setup(['ou-6'], { pageSize: 2 })
        await flush()
        tree.open('ou-6')
        await flush()
        tree.setFocused('children-skeleton:ou-6:2')
        expect(tree.getFocusedIndex()).toBe(3)

        tree.ensureChildrenLoaded(3, 3)
        await flush()

        expect(tree.getRow(3).kind).toBe('node')
        expect(tree.getFocusedIndex()).toBe(3)
        expect(tree.getFocusedKey()).toBe(ids(tree)[3])
    })

    it('falls back to where the key was last found, after rows above it moved it', async () => {
        const { tree } = setup(['ou-13', 'ou-6'], { pageSize: 2 })
        await flush()
        tree.open('ou-6')
        await flush()
        tree.setFocused('children-skeleton:ou-6:2')
        expect(tree.getFocusedIndex()).toBe(4)

        tree.open('ou-13')
        await flush()
        const shifted = tree.getFocusedIndex() as number
        expect(shifted).toBeGreaterThan(4)
        tree.ensureChildrenLoaded(shifted, shifted)
        await flush()

        expect(tree.getRow(shifted).kind).toBe('node')
        expect(tree.getFocusedIndex()).toBe(shifted)
    })

    it('clamps the remembered index to the rows that are left', async () => {
        const { tree } = setup(['ou-1'], { initiallyOpen: ['ou-1'] })
        await flush()
        tree.focusRow(2)

        tree.close('ou-1')

        expect(tree.getFocusedIndex()).toBe(0)
    })

    it('isFocused is true only while the tree has focus', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        const listener = jest.fn()
        tree.subscribe(listener)

        tree.setFocused('ou-1')
        expect(tree.isFocused('ou-1')).toBe(false)
        tree.setHasFocus(true)
        expect(tree.isFocused('ou-1')).toBe(true)
        expect(tree.isFocused('ou-13')).toBe(false)
        tree.setHasFocus(true)
        tree.setHasFocus(false)
        expect(tree.isFocused('ou-1')).toBe(false)
        expect(listener).toHaveBeenCalledTimes(3)
    })

    it('a search resets the focus, and so does clearing it', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        tree.focusRow(0)

        tree.search('Clinic')
        expect(tree.getFocusedIndex()).toBeUndefined()
        await flush()
        tree.focusRow(1)
        tree.clearSearch()

        expect(tree.getFocusedIndex()).toBeUndefined()
    })
})

describe('lit guide', () => {
    // ou-1 (0), ou-2 (1), ou-3 (2), ou-6 (2), ou-13 (1).
    const deep = async () => {
        const { tree } = setup(['ou-1'], { initiallyOpen: ['ou-1', 'ou-2'] })
        await flush()
        expect(ids(tree)).toEqual(['ou-1', 'ou-2', 'ou-3', 'ou-6', 'ou-13'])
        return tree
    }

    it('a hovered guide segment lights that level along the ancestor branch, and the ancestor toggle', async () => {
        const tree = await deep()
        const listener = jest.fn()
        tree.subscribe(listener)

        tree.setHoveredGuide({ key: 'ou-3', level: 0 })

        expect(tree.litLevel('ou-1')).toBeUndefined()
        expect(tree.litLevel('ou-2')).toBe(0)
        expect(tree.litLevel('ou-3')).toBe(0)
        expect(tree.litLevel('ou-13')).toBe(0)
        expect(tree.isGuideAncestor('ou-1')).toBe(true)
        expect(tree.isGuideAncestor('ou-2')).toBe(false)

        tree.setHoveredGuide({ key: 'ou-3', level: 1 })
        expect(tree.litLevel('ou-3')).toBe(1)
        expect(tree.litLevel('ou-6')).toBe(1)
        expect(tree.litLevel('ou-13')).toBeUndefined()
        expect(tree.isGuideAncestor('ou-2')).toBe(true)

        tree.setHoveredGuide(undefined)
        expect(tree.litLevel('ou-3')).toBeUndefined()
        expect(listener).toHaveBeenCalledTimes(3)
    })

    it("an open node's own toggle is its guide: hovering it lights its subtree", async () => {
        const tree = await deep()

        tree.setHoveredGuide({ key: 'ou-2', level: 1 })

        expect(tree.isGuideAncestor('ou-2')).toBe(true)
        expect(tree.litLevel('ou-3')).toBe(1)
        expect(tree.litLevel('ou-2')).toBeUndefined()
    })

    it("the focused row's parent branch is lit while the tree has focus; a hovered guide wins", async () => {
        const tree = await deep()
        tree.focusRow(2)
        expect(tree.litLevel('ou-6')).toBeUndefined()

        tree.setHasFocus(true)
        expect(tree.litLevel('ou-6')).toBe(1)
        expect(tree.litLevel('ou-3')).toBe(1)
        expect(tree.isGuideAncestor('ou-2')).toBe(true)

        tree.setHoveredGuide({ key: 'ou-13', level: 0 })
        expect(tree.litLevel('ou-6')).toBe(0)

        tree.setHoveredGuide(undefined)
        tree.focusRow(0)
        expect(tree.litLevel('ou-2')).toBeUndefined()
        expect(tree.isGuideAncestor('ou-1')).toBe(false)
    })

    it('closeGuideBranch closes the ancestor, focuses it and forgets the hovered guide', async () => {
        const tree = await deep()
        tree.setHoveredGuide({ key: 'ou-6', level: 0 })

        tree.closeGuideBranch({ key: 'ou-6', level: 0 })

        expect(tree.isOpen('ou-1')).toBe(false)
        expect(ids(tree)).toEqual(['ou-1'])
        expect(tree.getFocusedKey()).toBe('ou-1')
        expect(tree.litLevel('ou-1')).toBeUndefined()
    })
})
