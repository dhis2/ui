import { CustomDataProvider } from '@dhis2/app-runtime'
import { act, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import { OuTreeNodeStoreProvider } from './ou-tree-node-store-provider'
import { OuTreeProvider } from './ou-tree-provider'
import { SEARCH_DEBOUNCE_MS } from './search-constants'
import { useOuTree } from './use-ou-tree'
import { useOuTreeActions } from './use-ou-tree-actions'
import { useOuTreeNode } from './use-ou-tree-node'
import { useOuTreeSearch } from './use-ou-tree-search'
import { useOuTreeSearchTerm } from './use-ou-tree-search-term'

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CustomDataProvider data={data}>
        <OuTreeNodeStoreProvider>
            <OuTreeProvider rootIds={['ou-1']}>{children}</OuTreeProvider>
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

describe('useOuTreeSearch', () => {
    beforeEach(() => jest.useFakeTimers())
    afterEach(() => jest.useRealTimers())

    it('gates, debounces and reports the search, with help text while too short', async () => {
        const { result } = renderHook(
            () => ({
                search: useOuTreeSearch(),
                term: useOuTreeSearchTerm(),
                tree: useOuTree(),
            }),
            { wrapper }
        )
        const { setTerm, clear } = result.current.search
        expect(result.current.search).toMatchObject({
            term: '',
            helpText: undefined,
            status: { status: 'idle' },
        })
        expect(result.current.term).toBeUndefined()
        expect(result.current.tree.mode).toBe('browse')

        act(() => setTerm('c'))
        expect(result.current.search).toMatchObject({
            term: 'c',
            helpText: 'Type at least 2 characters',
            status: { status: 'too-short', minLength: 2 },
        })

        act(() => setTerm('cli'))
        expect(result.current.search.helpText).toBeUndefined()
        act(() => jest.advanceTimersByTime(SEARCH_DEBOUNCE_MS))
        expect(result.current.search.status).toEqual({ status: 'loading' })
        expect(result.current.term).toBe('cli')
        expect(result.current.tree.mode).toBe('filtered')
        await waitFor(() =>
            expect(result.current.search.status).toEqual({
                status: 'loaded',
                total: 4,
                loaded: 4,
            })
        )
        expect(result.current.tree.searchStatus).toBe(
            result.current.search.status
        )

        act(() => clear())
        expect(result.current.search).toMatchObject({
            term: '',
            status: { status: 'idle' },
        })
        expect(result.current.term).toBeUndefined()
        expect(result.current.tree.mode).toBe('browse')
        expect(result.current.search.setTerm).toBe(setTerm)
        expect(result.current.search.clear).toBe(clear)
    })

    it('useOuTreeNode reports a result and a revealed node', async () => {
        const { result } = renderHook(
            () => ({
                clinic: useOuTreeNode('ou-5'),
                district: useOuTreeNode('ou-3'),
                actions: useOuTreeActions(),
            }),
            { wrapper }
        )
        expect(result.current.clinic.isResult).toBe(false)

        act(() => result.current.actions.search('Clinic'))
        await waitFor(() => expect(result.current.clinic.isResult).toBe(true))
        expect(result.current.district.isResult).toBe(false)
        expect(result.current.district.isRevealed).toBe(false)

        act(() => result.current.actions.toggleRevealed('ou-3'))
        expect(result.current.district.isRevealed).toBe(true)

        act(() => result.current.actions.clearSearch())
        expect(result.current.clinic.isResult).toBe(false)
        expect(result.current.district.isRevealed).toBe(false)
    })
})
