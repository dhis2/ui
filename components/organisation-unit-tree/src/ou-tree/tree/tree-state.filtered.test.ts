import {
    createInMemoryGist,
    createInMemoryTreeEndpoint,
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import type { OuTreeQuery } from '../data/index'
import { createNodeStore } from '../node-store/index'
import { createTreeState, TreeState } from './tree-state'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))
const rows = (tree: TreeState) =>
    Array.from({ length: tree.getRowCount() }, (_, index) => {
        const row = tree.getRow(index)
        switch (row.kind) {
            case 'node':
                return `${row.id}${row.view === 'pruned' ? ':pruned' : ''}${
                    row.result ? '*' : ''
                }`
            case 'result-error':
            case 'error':
                return `${row.kind}@${row.page}`
            default:
                return row.kind
        }
    })

// Clinics in tree order: Chisembe (ou-5), Kanona (ou-8), Kafue (ou-15),
// Chelstone (ou-18). Children pages of three hold every parent but Serenje.
const endpoint = createInMemoryTreeEndpoint({ orgUnits: zambiaOrgUnits })
const gist = createInMemoryGist({ orgUnits: zambiaOrgUnits })
/** The stand-in's answer, paged by two results. */
const resultsPage = (query: OuTreeQuery) => endpoint({ ...query, pageSize: 2 })
const gistEntries = (ids: string[]) =>
    gist(ids, {}).map(({ children, ...entry }) => ({
        ...entry,
        childrenCount: children,
    }))
const PAGE_ONE_OF_CLINIC = [
    'ou-1:pruned',
    'ou-2:pruned',
    'ou-3:pruned',
    'ou-5:pruned*',
    'ou-6:pruned',
    'ou-8:pruned*',
    'result-skeleton',
    'result-skeleton',
]

const setup = (
    rootIds: string[],
    options: { initiallyOpen?: string[] } = {}
) => {
    const { api, childrenCalls, treeCalls } = createTestTreeApi({
        orgUnits: zambiaOrgUnits,
        pageSize: 3,
    })
    const store = createNodeStore({ api })
    const tree = createTreeState({
        store,
        rootIds,
        initiallyOpen: options.initiallyOpen,
    })
    tree.loadInitial()
    return { tree, store, childrenCalls, treeCalls }
}

const manual = (rootIds: string[], initiallyOpen: string[] = []) => {
    const { api, treeRequests, nodeRequests, childrenRequests } =
        createManualTreeApi()
    const store = createNodeStore({ api })
    const tree = createTreeState({ store, rootIds, initiallyOpen })
    tree.loadInitial()
    const answer = (index: number) =>
        treeRequests[index].resolve(resultsPage(treeRequests[index].input))
    return { tree, store, treeRequests, nodeRequests, childrenRequests, answer }
}

describe('tree state in filtered mode', () => {
    it('search resets the tree, requests page one with the scope and shows nothing until it answers', async () => {
        const { tree, treeCalls } = setup(['ou-1'], { initiallyOpen: ['ou-1'] })
        await flush()
        expect(rows(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])

        tree.search('Clinic')

        expect(tree.getMode()).toBe('filtered')
        expect(tree.getSearchTerm()).toBe('Clinic')
        expect(tree.isOpen('ou-1')).toBe(false)
        expect(rows(tree)).toEqual([])
        expect(treeCalls).toEqual([
            {
                search: 'Clinic',
                rootIds: ['ou-1'],
                page: 1,
                pageSize: 50,
                shortName: false,
            },
        ])
    })

    it('page one builds the pruned tree, sets total and shows placeholders; a stale answer is dropped', async () => {
        const { tree, treeRequests, nodeRequests, answer } = manual(['ou-1'])
        nodeRequests[0].resolve(gistEntries(['ou-1']))
        await flush()

        tree.search('cli')
        tree.search('Clinic')
        expect(treeRequests.map((request) => request.input.search)).toEqual([
            'cli',
            'Clinic',
        ])
        answer(0)
        await flush()
        expect(rows(tree)).toEqual([])
        expect(tree.getSearchTerm()).toBe('Clinic')

        answer(1)
        await flush()
        expect(rows(tree)).toEqual(PAGE_ONE_OF_CLINIC)
        expect(tree.isResult('ou-5')).toBe(true)
        expect(tree.isResult('ou-3')).toBe(false)
    })

    it('requests the next results page only when a placeholder is in range and the previous page is loaded', async () => {
        const { tree, treeRequests, nodeRequests, answer } = manual(['ou-1'])
        nodeRequests[0].resolve(gistEntries(['ou-1']))
        await flush()
        tree.search('Clinic')
        tree.ensureChildrenLoaded(0, 10)
        expect(treeRequests).toHaveLength(1)
        answer(0)
        await flush()

        tree.ensureChildrenLoaded(0, 5)
        expect(treeRequests).toHaveLength(1)
        tree.ensureChildrenLoaded(0, 7)
        tree.ensureChildrenLoaded(6, 7)
        expect(treeRequests).toHaveLength(2)
        expect(treeRequests[1].input).toMatchObject({
            page: 2,
            search: 'Clinic',
        })

        answer(1)
        await flush()
        expect(rows(tree)).toEqual([
            ...PAGE_ONE_OF_CLINIC.slice(0, 6),
            'ou-13:pruned',
            'ou-14:pruned',
            'ou-15:pruned*',
            'ou-17:pruned',
            'ou-18:pruned*',
        ])
    })

    it('a failed later page shows result-error rows for its slots and retryResultsPage requests it again', async () => {
        const { tree, treeRequests, nodeRequests, answer } = manual(['ou-1'])
        nodeRequests[0].resolve(gistEntries(['ou-1']))
        await flush()
        tree.search('Clinic')
        answer(0)
        await flush()
        tree.ensureChildrenLoaded(0, 7)
        treeRequests[1].reject(new Error('boom'))
        await flush()

        expect(rows(tree).slice(6)).toEqual([
            'result-error@2',
            'result-error@2',
        ])
        tree.ensureChildrenLoaded(0, 7)
        expect(treeRequests).toHaveLength(2)

        tree.retryResultsPage(2)
        expect(treeRequests).toHaveLength(3)
        expect(rows(tree).slice(6)).toEqual([
            'result-skeleton',
            'result-skeleton',
        ])
        answer(2)
        await flush()
        expect(rows(tree)).toHaveLength(11)
    })

    it('a failed page one shows one result-error row and retryResultsPage requests it again', async () => {
        const { tree, treeRequests, nodeRequests, answer } = manual(['ou-1'])
        nodeRequests[0].resolve(gistEntries(['ou-1']))
        await flush()
        tree.search('Clinic')
        treeRequests[0].reject(new Error('boom'))
        await flush()

        expect(rows(tree)).toEqual(['result-error@1'])

        tree.retryResultsPage(1)
        expect(treeRequests).toHaveLength(2)
        expect(rows(tree)).toEqual([])
        answer(1)
        await flush()
        expect(rows(tree)).toEqual(PAGE_ONE_OF_CLINIC)
    })

    it("toggleRevealed requests the node's first children page and shows them as browse rows; again hides them", async () => {
        const { tree, childrenCalls } = setup(['ou-1'])
        await flush()
        tree.search('Clinic')
        await flush()

        tree.toggleRevealed('ou-6')
        expect(tree.isRevealed('ou-6')).toBe(true)
        expect(childrenCalls).toEqual([
            { parentId: 'ou-6', page: 1, shortName: false },
        ])
        await flush()
        expect(rows(tree).slice(4, 11)).toEqual([
            'ou-6:pruned',
            'ou-12',
            'ou-10',
            'ou-8*',
            'skeleton',
            'skeleton',
            'skeleton',
        ])

        tree.toggleRevealed('ou-6')
        expect(tree.isRevealed('ou-6')).toBe(false)
        expect(rows(tree).slice(4, 7)).toEqual([
            'ou-6:pruned',
            'ou-8:pruned*',
            'ou-13:pruned',
        ])
    })

    it('open and toggle do nothing on a pruned row and work on a browse row under a revealed node', async () => {
        const { tree, childrenCalls } = setup(['ou-1'])
        await flush()
        tree.search('Clinic')
        await flush()

        tree.open('ou-3')
        tree.toggle('ou-2')
        expect(childrenCalls).toEqual([])
        expect(tree.isOpen('ou-3')).toBe(false)

        tree.toggleRevealed('ou-2')
        await flush()
        tree.open('ou-3')
        await flush()
        expect(tree.isOpen('ou-3')).toBe(true)
        expect(rows(tree).slice(1, 6)).toEqual([
            'ou-2:pruned',
            'ou-3',
            'ou-5*',
            'ou-4',
            'ou-6',
        ])
    })

    it('clearSearch restores browse mode with initiallyOpen, and a late page-one answer changes nothing', async () => {
        const { tree, nodeRequests, childrenRequests, answer } = manual(
            ['ou-1'],
            ['ou-1']
        )
        nodeRequests[0].resolve(gistEntries(['ou-1']))
        childrenRequests[0].resolve({
            pager: { page: 1, pageSize: 50, total: 2, pageCount: 1 },
            organisationUnits: gist(['ou-2', 'ou-13'], {}).map(
                ({ children, ...entry }) => ({ ...entry, leaf: children === 0 })
            ),
        })
        await flush()
        expect(rows(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])

        tree.search('Clinic')
        expect(rows(tree)).toEqual([])
        tree.clearSearch()

        expect(tree.getMode()).toBe('browse')
        expect(tree.getSearchTerm()).toBeUndefined()
        expect(rows(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
        expect(childrenRequests).toHaveLength(1)

        answer(0)
        await flush()
        expect(tree.getMode()).toBe('browse')
        expect(rows(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
    })

    it('search with the same term is a no-op', async () => {
        const { tree, treeCalls } = setup(['ou-1'])
        await flush()
        tree.search('Clinic')
        await flush()
        const before = rows(tree)

        tree.search('Clinic')

        expect(treeCalls).toHaveLength(1)
        expect(rows(tree)).toEqual(before)
    })

    it("search before the roots answered builds the pruned tree from the response's ancestors", async () => {
        const { tree, treeRequests, answer } = manual(['ou-2', 'ou-1'])

        tree.search('Clinic')
        expect(treeRequests[0].input.rootIds).toEqual(['ou-2', 'ou-1'])
        answer(0)
        await flush()

        expect(tree.getRootsStatus()).toEqual({ status: 'loading' })
        expect(rows(tree)).toEqual(PAGE_ONE_OF_CLINIC)
    })

    it('search with no root ids requests nothing and shows no rows', async () => {
        const { tree, treeCalls } = setup([])
        await flush()

        tree.search('Clinic')
        await flush()

        expect(tree.getMode()).toBe('filtered')
        expect(treeCalls).toEqual([])
        expect(rows(tree)).toEqual([])
    })
})
