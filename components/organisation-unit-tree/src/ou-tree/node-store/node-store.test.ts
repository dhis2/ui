import {
    childrenPage,
    createManualTreeApi,
    createTestTreeApi,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { createNodeStore } from './node-store'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('createNodeStore', () => {
    describe('children pages over the Zambia stand-in', () => {
        const setup = () => {
            const { api, childrenCalls } = createTestTreeApi({
                orgUnits: zambiaOrgUnits,
                pageSize: 2,
            })
            const store = createNodeStore({ api })
            return { store, childrenCalls }
        }

        it('is loading until page one answers, then loaded with count and first slots', async () => {
            const { store, childrenCalls } = setup()

            store.requestChildrenPage('ou-6', 1)

            expect(store.getChildren('ou-6')).toEqual({ status: 'loading' })
            expect(childrenCalls).toEqual([
                {
                    parentId: 'ou-6',
                    page: 1,
                    shortName: false,
                },
            ])

            await flush()

            expect(store.getChildren('ou-6')).toEqual({
                status: 'loaded',
                children: {
                    count: 6,
                    pageSize: 2,
                    slots: [
                        'ou-12',
                        'ou-10',
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                    ],
                    pages: new Map([[1, { status: 'loaded' }]]),
                },
            })
            expect(store.getNode('ou-10')).toEqual({
                id: 'ou-10',
                displayName: 'Chikupi Mission',
                path: '/ou-1/ou-2/ou-6/ou-10',
                level: 4,
                leaf: true,
                parentId: 'ou-6',
            })
        })

        it('fills the right slots for a later page', async () => {
            const { store } = setup()
            store.requestChildrenPage('ou-6', 1)
            await flush()

            store.requestChildrenPage('ou-6', 3)
            await flush()

            const status = store.getChildren('ou-6')
            expect(status.status === 'loaded' && status.children.slots).toEqual(
                ['ou-12', 'ou-10', undefined, undefined, 'ou-7', 'ou-11']
            )
        })

        it('ignores a request for a page that is loading or loaded', async () => {
            const { store, childrenCalls } = setup()

            store.requestChildrenPage('ou-6', 1)
            store.requestChildrenPage('ou-6', 1)
            await flush()
            store.requestChildrenPage('ou-6', 1)
            store.requestChildrenPage('ou-6', 2)
            store.requestChildrenPage('ou-6', 2)
            await flush()

            expect(childrenCalls.map((call) => call.page)).toEqual([1, 2])
        })

        it('ignores a later page before page one has answered', () => {
            const { store, childrenCalls } = setup()

            store.requestChildrenPage('ou-6', 2)

            expect(childrenCalls).toEqual([])
            expect(store.getChildren('ou-6')).toEqual({ status: 'none' })
        })

        it('gives a parent without children count 0 and no slots', async () => {
            const { store } = setup()

            store.requestChildrenPage('ou-5', 1)
            await flush()

            expect(store.getChildren('ou-5')).toEqual({
                status: 'loaded',
                children: {
                    count: 0,
                    pageSize: 2,
                    slots: [],
                    pages: new Map([[1, { status: 'loaded' }]]),
                },
            })
        })

        it('reports none for an unrequested parent', () => {
            const { store } = setup()

            expect(store.getChildren('ou-1')).toEqual({ status: 'none' })
        })
    })

    describe('children pages with manual settlement', () => {
        const parent = { path: '/p', level: 1 }
        const child = (n: number) => ({
            id: `c${n}`,
            displayName: `Child ${n}`,
        })

        it('keeps the pager page size of page one and places later pages with it', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })
            const parent = { path: '/p', level: 1 }
            store.requestChildrenPage('p', 1)
            childrenRequests[0].resolve(
                childrenPage({
                    parent,
                    children: [child(1), child(2), child(3)],
                    total: 7,
                    page: 1,
                    pageSize: 3,
                })
            )
            await flush()

            const first = store.getChildren('p')
            expect(first.status === 'loaded' && first.children.pageSize).toBe(3)

            store.requestChildrenPage('p', 3)
            childrenRequests[1].resolve(
                childrenPage({
                    parent,
                    children: [child(7)],
                    total: 7,
                    page: 3,
                    pageSize: 3,
                })
            )
            await flush()

            const loaded = store.getChildren('p')
            expect(loaded.status === 'loaded' && loaded.children.slots).toEqual(
                ['c1', 'c2', 'c3', undefined, undefined, undefined, 'c7']
            )
        })

        it('writes pages that answer out of order into their own slots', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })
            store.requestChildrenPage('p', 1)
            childrenRequests[0].resolve(
                childrenPage({
                    parent,
                    children: [child(1), child(2)],
                    total: 6,
                    page: 1,
                    pageSize: 2,
                })
            )
            await flush()

            store.requestChildrenPage('p', 2)
            store.requestChildrenPage('p', 3)
            childrenRequests[2].resolve(
                childrenPage({
                    parent,
                    children: [child(5), child(6)],
                    total: 6,
                    page: 3,
                    pageSize: 2,
                })
            )
            await flush()
            const midway = store.getChildren('p')
            expect(midway.status === 'loaded' && midway.children.slots).toEqual(
                ['c1', 'c2', undefined, undefined, 'c5', 'c6']
            )
            expect(
                midway.status === 'loaded' && midway.children.pages.get(2)
            ).toEqual({
                status: 'loading',
            })

            childrenRequests[1].resolve(
                childrenPage({
                    parent,
                    children: [child(3), child(4)],
                    total: 6,
                    page: 2,
                    pageSize: 2,
                })
            )
            await flush()
            const done = store.getChildren('p')
            expect(done.status === 'loaded' && done.children.slots).toEqual([
                'c1',
                'c2',
                'c3',
                'c4',
                'c5',
                'c6',
            ])
        })

        it('loads count 0 for a parent whose page one has no children', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })

            store.requestChildrenPage('p', 1)
            childrenRequests[0].resolve(
                childrenPage({
                    parent,
                    children: [],
                    total: 0,
                    page: 1,
                    pageSize: 2,
                })
            )
            await flush()

            expect(store.getChildren('p')).toEqual({
                status: 'loaded',
                children: {
                    count: 0,
                    pageSize: 2,
                    slots: [],
                    pages: new Map([[1, { status: 'loaded' }]]),
                },
            })
        })

        it('marks a failed page one as failed and retries it', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })
            const error = new Error('boom')

            store.requestChildrenPage('p', 1)
            childrenRequests[0].reject(error)
            await flush()
            expect(store.getChildren('p')).toEqual({ status: 'failed', error })

            store.retryChildrenPage('p', 1)
            expect(store.getChildren('p')).toEqual({ status: 'loading' })
            childrenRequests[1].resolve(
                childrenPage({
                    parent,
                    children: [child(1), child(2)],
                    total: 2,
                    page: 1,
                    pageSize: 2,
                })
            )
            await flush()
            expect(store.getChildren('p').status).toBe('loaded')
        })

        it('marks a failed later page as failed and retries it', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })
            const error = new Error('boom')
            store.requestChildrenPage('p', 1)
            childrenRequests[0].resolve(
                childrenPage({
                    parent,
                    children: [child(1), child(2)],
                    total: 4,
                    page: 1,
                    pageSize: 2,
                })
            )
            await flush()

            store.requestChildrenPage('p', 2)
            childrenRequests[1].reject(error)
            await flush()
            const failed = store.getChildren('p')
            expect(
                failed.status === 'loaded' && failed.children.pages.get(2)
            ).toEqual({
                status: 'failed',
                error,
            })

            store.retryChildrenPage('p', 2)
            const retrying = store.getChildren('p')
            expect(
                retrying.status === 'loaded' && retrying.children.pages.get(2)
            ).toEqual({
                status: 'loading',
            })
            expect(childrenRequests).toHaveLength(3)
        })

        it('notifies subscribers once per request start and once per settlement', async () => {
            const { api, childrenRequests } = createManualTreeApi()
            const store = createNodeStore({ api })
            const listener = jest.fn()
            store.subscribe(listener)

            store.requestChildrenPage('p', 1)
            expect(listener).toHaveBeenCalledTimes(1)
            childrenRequests[0].resolve(
                childrenPage({
                    parent,
                    children: [child(1), child(2)],
                    total: 2,
                    page: 1,
                    pageSize: 2,
                })
            )
            await flush()
            expect(listener).toHaveBeenCalledTimes(2)
            expect(store.getVersion()).toBe(2)
        })
    })

    describe('loadNodes', () => {
        it('fetches only not yet stored ids and stores them with leaf from the count', async () => {
            const { api, nodeCalls } = createTestTreeApi({
                orgUnits: zambiaOrgUnits,
            })
            const store = createNodeStore({ api })

            await store.loadNodes(['ou-1', 'ou-5'])
            await store.loadNodes(['ou-1', 'ou-13'])

            expect(nodeCalls).toEqual([['ou-1', 'ou-5'], ['ou-13']])
            expect(store.getNode('ou-1')).toEqual({
                id: 'ou-1',
                displayName: 'Zambia',
                path: '/ou-1',
                level: 1,
                leaf: false,
            })
            expect(store.getNode('ou-5')?.leaf).toBe(true)
            expect(store.getNode('ou-5')?.parentId).toBe('ou-3')
        })

        it('resolves without a request when everything is stored', async () => {
            const { api, nodeCalls } = createTestTreeApi({
                orgUnits: zambiaOrgUnits,
            })
            const store = createNodeStore({ api })
            await store.loadNodes(['ou-1'])

            await store.loadNodes(['ou-1'])
            await store.loadNodes([])

            expect(nodeCalls).toEqual([['ou-1']])
        })

        it('shares an in-flight request for the same ids', async () => {
            const { api, nodeRequests } = createManualTreeApi()
            const store = createNodeStore({ api })

            const first = store.loadNodes(['ou-1'])
            const second = store.loadNodes(['ou-1', 'ou-2'])

            expect(nodeRequests.map((request) => request.input)).toEqual([
                ['ou-1'],
                ['ou-2'],
            ])
            nodeRequests[0].resolve([
                {
                    id: 'ou-1',
                    displayName: 'Zambia',
                    path: '/ou-1',
                    level: 1,
                    childrenCount: 2,
                },
            ])
            nodeRequests[1].resolve([
                {
                    id: 'ou-2',
                    displayName: 'Central',
                    path: '/ou-1/ou-2',
                    level: 2,
                    childrenCount: 2,
                },
            ])
            await Promise.all([first, second])
            expect(store.getNode('ou-2')?.displayName).toBe('Central')
        })

        it('rejects when the request fails', async () => {
            const { api, nodeRequests } = createManualTreeApi()
            const store = createNodeStore({ api })

            const loading = store.loadNodes(['ou-1'])
            nodeRequests[0].reject(new Error('nope'))

            await expect(loading).rejects.toThrow('nope')
        })
    })
})
