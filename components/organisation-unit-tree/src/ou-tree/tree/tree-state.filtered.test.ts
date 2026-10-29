import {
    createInMemoryChildrenPages,
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
/** The stand-in's answer, paged by two results unless said otherwise. */
const resultsPage = (query: OuTreeQuery, pageSize = 2) =>
    endpoint({ ...query, pageSize })
const childrenPages = createInMemoryChildrenPages({
    orgUnits: zambiaOrgUnits,
    pageSize: 3,
})
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
    const answer = (index: number, pageSize?: number) =>
        treeRequests[index].resolve(
            resultsPage(treeRequests[index].input, pageSize)
        )
    const answerChildren = (index: number) => {
        const { parentId, page, shortName } = childrenRequests[index].input
        childrenRequests[index].resolve(
            childrenPages(parentId, { page, shortName })
        )
    }
    return {
        tree,
        store,
        treeRequests,
        nodeRequests,
        childrenRequests,
        answer,
        answerChildren,
    }
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

    it("toggleRevealed requests the node's first children page and lists them all; again hides them", async () => {
        const { tree, childrenCalls } = setup(['ou-1'])
        await flush()
        tree.search('Clinic')
        await flush()

        tree.toggleRevealed('ou-6')
        expect(tree.isRevealed('ou-6')).toBe(true)
        expect(childrenCalls).toEqual([
            { parentId: 'ou-6', page: 1, shortName: false },
        ])
        // The matching children stay until the complete list arrives.
        expect(rows(tree).slice(4, 7)).toEqual([
            'ou-6:pruned',
            'ou-8:pruned*',
            'ou-13:pruned',
        ])
        await flush()
        expect(rows(tree).slice(4, 11)).toEqual([
            'ou-6:pruned',
            'ou-12',
            'ou-10',
            'ou-8:pruned*',
            'skeleton',
            'skeleton',
            'skeleton',
        ])

        tree.toggleRevealed('ou-6')
        expect(tree.isRevealed('ou-6')).toBe(false)
        expect(tree.isOpen('ou-6')).toBe(true)
        expect(rows(tree).slice(4, 7)).toEqual([
            'ou-6:pruned',
            'ou-8:pruned*',
            'ou-13:pruned',
        ])

        tree.close('ou-6')
        tree.toggleRevealed('ou-6')
        expect(tree.isOpen('ou-6')).toBe(true)
        expect(rows(tree).slice(4, 6)).toEqual(['ou-6:pruned', 'ou-12'])
    })

    it('pruned ancestors are open on arrival; close hides the branch and open shows it again without a request', async () => {
        const { tree, childrenCalls } = setup(['ou-1'])
        await flush()
        tree.search('Clinic')
        await flush()
        expect(tree.isOpen('ou-3')).toBe(true)
        expect(tree.isOpen('ou-5')).toBe(false)

        tree.close('ou-3')
        expect(tree.isOpen('ou-3')).toBe(false)
        expect(rows(tree).slice(0, 5)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned',
            'ou-6:pruned',
            'ou-8:pruned*',
        ])

        tree.toggle('ou-3')
        expect(rows(tree).slice(0, 6)).toEqual(PAGE_ONE_OF_CLINIC.slice(0, 6))
        expect(childrenCalls).toEqual([])
    })

    it('opening a result with no matching children reveals it and requests its first page; closing keeps the reveal', async () => {
        const { tree, childrenCalls } = setup(['ou-1'])
        await flush()
        tree.search('District')
        await flush()
        expect(rows(tree).slice(0, 4)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned*',
            'ou-6:pruned*',
        ])

        tree.open('ou-3')
        expect(tree.isRevealed('ou-3')).toBe(true)
        expect(childrenCalls).toEqual([
            { parentId: 'ou-3', page: 1, shortName: false },
        ])
        await flush()
        expect(rows(tree).slice(2, 6)).toEqual([
            'ou-3:pruned*',
            'ou-5',
            'ou-4',
            'ou-6:pruned*',
        ])

        tree.close('ou-3')
        expect(tree.isOpen('ou-3')).toBe(false)
        expect(tree.isRevealed('ou-3')).toBe(true)
        expect(rows(tree).slice(2, 4)).toEqual(['ou-3:pruned*', 'ou-6:pruned*'])

        tree.open('ou-3')
        expect(rows(tree).slice(2, 5)).toEqual(['ou-3:pruned*', 'ou-5', 'ou-4'])
        expect(childrenCalls).toHaveLength(1)
    })

    it('a result opened before its own results arrive keeps showing all of its children', async () => {
        // Kabwe District first, its health centre on the next page.
        const { tree, answer, answerChildren } = manual(['ou-1'])
        tree.search('Kabwe')
        answer(0, 1)
        await flush()
        expect(rows(tree)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned*',
            'result-skeleton',
        ])

        tree.open('ou-3')
        answerChildren(0)
        await flush()
        tree.ensureChildrenLoaded(0, 5)
        answer(1, 1)
        await flush()

        expect(tree.hasMatchingChildren('ou-3')).toBe(true)
        expect(rows(tree)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned*',
            'ou-5',
            'ou-4:pruned*',
        ])
    })

    it('a later page opens an untouched result it places a result under, and leaves a closed one closed', async () => {
        const untouched = manual(['ou-1'])
        untouched.tree.search('Kabwe')
        untouched.answer(0, 1)
        await flush()
        untouched.tree.ensureChildrenLoaded(0, 5)
        untouched.answer(1, 1)
        await flush()
        expect(rows(untouched.tree)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned*',
            'ou-4:pruned*',
        ])

        const closed = manual(['ou-1'])
        closed.tree.search('Kabwe')
        closed.answer(0, 1)
        await flush()
        closed.tree.open('ou-3')
        closed.tree.close('ou-3')
        closed.tree.ensureChildrenLoaded(0, 5)
        closed.answer(1, 1)
        await flush()
        expect(rows(closed.tree)).toEqual([
            'ou-1:pruned',
            'ou-2:pruned',
            'ou-3:pruned*',
        ])
    })

    it('hasMatchingChildren is true only for a pruned-tree node with a result below it', async () => {
        const { tree } = setup(['ou-1'])
        await flush()
        expect(tree.hasMatchingChildren('ou-1')).toBe(false)
        tree.search('Clinic')
        await flush()

        expect(tree.hasMatchingChildren('ou-3')).toBe(true)
        expect(tree.hasMatchingChildren('ou-5')).toBe(false)
        expect(tree.hasMatchingChildren('ou-12')).toBe(false)
    })

    it('a revealed node whose first page failed stays open on its matching children, and open requests the page again', async () => {
        const { tree, childrenRequests, answer } = manual(['ou-1'])
        tree.search('Clinic')
        answer(0)
        await flush()

        tree.toggleRevealed('ou-3')
        childrenRequests[0].reject(new Error('boom'))
        await flush()
        expect(tree.isOpen('ou-3')).toBe(true)
        expect(rows(tree).slice(2, 4)).toEqual(['ou-3:pruned', 'ou-5:pruned*'])

        tree.open('ou-3')
        expect(childrenRequests).toHaveLength(2)
        expect(childrenRequests[1].input).toEqual({
            parentId: 'ou-3',
            page: 1,
            shortName: false,
        })

        tree.toggleRevealed('ou-3')
        expect(tree.isOpen('ou-3')).toBe(true)
        expect(rows(tree).slice(2, 4)).toEqual(['ou-3:pruned', 'ou-5:pruned*'])
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

    it('search with a blank term clears any search instead of matching everything', async () => {
        const { tree, treeCalls } = setup(['ou-1'], { initiallyOpen: ['ou-1'] })
        await flush()
        tree.search('Clinic')
        await flush()
        expect(tree.getMode()).toBe('filtered')

        tree.search('   ')

        expect(tree.getMode()).toBe('browse')
        expect(treeCalls).toHaveLength(1)
        expect(rows(tree)).toEqual(['ou-1', 'ou-2', 'ou-13'])
    })
})
