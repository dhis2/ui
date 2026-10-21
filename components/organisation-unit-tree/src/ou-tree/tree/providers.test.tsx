import { CustomDataProvider } from '@dhis2/app-runtime'
import { act, render, renderHook, waitFor } from '@testing-library/react'
import React, { useEffect } from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import { OuTreeNodeCacheProvider } from './ou-tree-node-cache-provider'
import { OuTreeProvider } from './ou-tree-provider'
import { OuTreeHandle, useOuTree } from './use-ou-tree'
import { useOuTreeNode } from './use-ou-tree-node'

type Data = React.ComponentProps<typeof CustomDataProvider>['data']

const resolvers = () => {
    const tree = jest.fn(createTreeResolver({ orgUnits: zambiaOrgUnits }))
    const gist = jest.fn(createGistResolver({ orgUnits: zambiaOrgUnits }))
    return {
        tree,
        gist,
        data: { [TREE_RESOURCE]: tree, [GIST_RESOURCE]: gist },
    }
}

const Providers = ({
    data,
    children,
}: {
    data: Data
    children: React.ReactNode
}) => (
    <CustomDataProvider data={data}>
        <OuTreeNodeCacheProvider>{children}</OuTreeNodeCacheProvider>
    </CustomDataProvider>
)

describe('OuTree providers and hooks', () => {
    it('useOuTree throws outside an OuTreeProvider', () => {
        const spy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined)
        const { data } = resolvers()

        expect(() =>
            renderHook(() => useOuTree(), {
                wrapper: ({ children }) => (
                    <Providers data={data}>{children}</Providers>
                ),
            })
        ).toThrow('useOuTree must be used inside an OuTreeProvider')
        spy.mockRestore()
    })

    it('OuTreeProvider throws without an OuTreeNodeCacheProvider', () => {
        const spy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined)
        const { data } = resolvers()

        expect(() =>
            renderHook(() => useOuTree(), {
                wrapper: ({ children }) => (
                    <CustomDataProvider data={data}>
                        <OuTreeProvider roots={['ou-1']}>
                            {children}
                        </OuTreeProvider>
                    </CustomDataProvider>
                ),
            })
        ).toThrow('OuTree needs an OuTreeNodeCacheProvider above it')
        spy.mockRestore()
    })

    it('loads the roots and exposes rows, open state and node data', async () => {
        const { data } = resolvers()
        const { result } = renderHook(
            () => ({ tree: useOuTree(), root: useOuTreeNode('ou-1') }),
            {
                wrapper: ({ children }) => (
                    <Providers data={data}>
                        <OuTreeProvider roots={['ou-1']}>
                            {children}
                        </OuTreeProvider>
                    </Providers>
                ),
            }
        )

        await waitFor(() =>
            expect(result.current.tree.rootsStatus).toEqual({
                status: 'loaded',
            })
        )
        expect(result.current.tree.rowCount).toBe(1)
        expect(result.current.root.node?.displayName).toBe('Zambia')
        expect(result.current.root.isOpen).toBe(false)

        act(() => result.current.tree.open('ou-1'))
        await waitFor(() => expect(result.current.tree.rowCount).toBe(3))
        expect(result.current.root.isOpen).toBe(true)
        expect(result.current.tree.getRow(1)).toMatchObject({
            kind: 'node',
            id: 'ou-2',
        })
        expect(result.current.tree.getRowIndex('ou-13')).toBe(2)
    })

    it('shares the cache between trees with different roots', async () => {
        // Sibling districts: ou-3 is a root of both trees, ou-6 only of the
        // inner one. Nested roots would be excluded, so siblings it is.
        const { data, gist, tree } = resolvers()
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <Providers data={data}>
                <OuTreeProvider roots={['ou-3']}>
                    <OuTreeProvider roots={['ou-3', 'ou-6']}>
                        {children}
                    </OuTreeProvider>
                </OuTreeProvider>
            </Providers>
        )
        const { result } = renderHook(() => useOuTree(), { wrapper })

        await waitFor(() =>
            expect(result.current.rootsStatus).toEqual({ status: 'loaded' })
        )
        act(() => result.current.open('ou-3'))
        await waitFor(() => expect(result.current.rowCount).toBe(4))

        const gistIds = gist.mock.calls.map(
            (call) => (call[1].params as { filter: string }).filter
        )
        expect(gistIds).toEqual(['id:in:[ou-3]', 'id:in:[ou-6]'])
        expect(tree).toHaveBeenCalledTimes(1)
    })

    it('keeps separate caches for short and full names', async () => {
        const { data, gist } = resolvers()
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <Providers data={data}>
                <OuTreeProvider roots={['ou-1']}>
                    <OuTreeProvider roots={['ou-1']} shortName>
                        {children}
                    </OuTreeProvider>
                </OuTreeProvider>
            </Providers>
        )
        const { result } = renderHook(() => useOuTree(), { wrapper })

        await waitFor(() =>
            expect(result.current.rootsStatus).toEqual({ status: 'loaded' })
        )

        expect(gist).toHaveBeenCalledTimes(2)
        expect(result.current.cache.options.shortName).toBe(true)
    })

    it('does not recreate the tree when roots are a new but equal array', async () => {
        // renderHook's wrapper cannot take props, so render a probe.
        const { data, gist } = resolvers()
        const latest: { current?: OuTreeHandle } = {}
        const Probe = () => {
            const tree = useOuTree()
            useEffect(() => {
                latest.current = tree
            })
            return null
        }
        const App = ({ roots }: { roots: string[] }) => (
            <Providers data={data}>
                <OuTreeProvider roots={roots}>
                    <Probe />
                </OuTreeProvider>
            </Providers>
        )
        const { rerender } = render(<App roots={['ou-1']} />)
        await waitFor(() =>
            expect(latest.current?.rootsStatus).toEqual({ status: 'loaded' })
        )
        act(() => latest.current?.open('ou-1'))

        rerender(<App roots={['ou-1']} />)

        expect(latest.current?.isOpen('ou-1')).toBe(true)
        expect(gist).toHaveBeenCalledTimes(1)

        rerender(<App roots={['ou-13']} />)
        await waitFor(() => expect(latest.current?.isOpen('ou-1')).toBe(false))
        expect(gist).toHaveBeenCalledTimes(2)
    })

    it('works under StrictMode, which renders and mounts twice', async () => {
        const { data } = resolvers()
        const { result } = renderHook(() => useOuTree(), {
            wrapper: ({ children }) => (
                <React.StrictMode>
                    <Providers data={data}>
                        <OuTreeProvider roots={['ou-1']}>
                            {children}
                        </OuTreeProvider>
                    </Providers>
                </React.StrictMode>
            ),
        })

        await waitFor(() =>
            expect(result.current.rootsStatus).toEqual({ status: 'loaded' })
        )
        act(() => result.current.open('ou-1'))
        await waitFor(() => expect(result.current.rowCount).toBe(3))
    })
})
