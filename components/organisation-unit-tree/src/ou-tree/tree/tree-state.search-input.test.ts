import { createTestTreeApi, zambiaOrgUnits } from '../__fixtures__/index'
import { createNodeStore } from '../node-store/index'
import { SEARCH_DEBOUNCE_MS, SEARCH_MIN_LENGTH } from './search-constants'
import { createTreeState } from './tree-state'

/** Advances the fake clock, then lets settled promises run their handlers. */
const tick = async (ms: number) => {
    jest.advanceTimersByTime(ms)
    for (let i = 0; i < 6; i += 1) {
        await Promise.resolve()
    }
}

const setup = (options: { failSearch?: boolean } = {}) => {
    const { api, treeCalls } = createTestTreeApi({
        orgUnits: zambiaOrgUnits,
        failWith: (query) =>
            options.failSearch && query.search ? new Error('boom') : undefined,
    })
    const store = createNodeStore({ api })
    const tree = createTreeState({ store, rootIds: ['ou-1'] })
    tree.loadInitial()
    return { tree, treeCalls }
}

describe('tree state search input', () => {
    beforeEach(() => jest.useFakeTimers())
    afterEach(() => jest.useRealTimers())

    it('searches the trimmed input after the debounce, once', async () => {
        const { tree, treeCalls } = setup()

        tree.setSearchInput('  Clinic ')
        expect(tree.getSearchInput()).toBe('  Clinic ')
        await tick(SEARCH_DEBOUNCE_MS - 1)
        expect(treeCalls).toEqual([])
        expect(tree.getMode()).toBe('browse')

        await tick(1)
        expect(treeCalls.map((call) => call.search)).toEqual(['Clinic'])
        expect(tree.getSearchTerm()).toBe('Clinic')
    })

    it('restarts the debounce on every keystroke', async () => {
        const { tree, treeCalls } = setup()

        tree.setSearchInput('cl')
        await tick(200)
        tree.setSearchInput('cli')
        await tick(SEARCH_DEBOUNCE_MS - 1)
        expect(treeCalls).toEqual([])

        await tick(1)
        expect(treeCalls.map((call) => call.search)).toEqual(['cli'])
    })

    it('is too-short below the minimum and idle when blank, clearing a running search at once', async () => {
        const { tree } = setup()
        tree.search('Clinic')
        await tick(0)
        expect(tree.getMode()).toBe('filtered')

        tree.setSearchInput('c')
        expect(tree.getSearchStatus()).toEqual({
            status: 'too-short',
            minLength: SEARCH_MIN_LENGTH,
        })
        expect(tree.getMode()).toBe('browse')

        tree.setSearchInput('   ')
        expect(tree.getSearchStatus()).toEqual({ status: 'idle' })
        expect(tree.getMode()).toBe('browse')
    })

    it('status follows page one: loading, then loaded with total and loaded', async () => {
        const { tree } = setup()

        tree.setSearchInput('Clinic')
        expect(tree.getSearchStatus()).toEqual({ status: 'idle' })
        // The clock alone: the stand-in's answer is still a pending promise.
        jest.advanceTimersByTime(SEARCH_DEBOUNCE_MS)
        expect(tree.getSearchStatus()).toEqual({ status: 'loading' })

        await tick(0)
        expect(tree.getSearchStatus()).toEqual({
            status: 'loaded',
            total: 4,
            loaded: 4,
        })
    })

    it('status is failed with the error when page one fails', async () => {
        const { tree } = setup({ failSearch: true })

        tree.search('Clinic')
        await tick(0)

        expect(tree.getSearchStatus()).toEqual({
            status: 'failed',
            error: new Error('boom'),
        })
    })

    it('getSearchStatus returns the same object until something changes', async () => {
        const { tree } = setup()
        tree.search('Clinic')
        await tick(0)

        const loaded = tree.getSearchStatus()
        tree.toggleRevealed('ou-6')
        await tick(0)
        expect(tree.getSearchStatus()).toBe(loaded)

        tree.setSearchInput('')
        expect(tree.getSearchStatus()).not.toBe(loaded)
        expect(tree.getSearchStatus()).toBe(tree.getSearchStatus())
    })
})
