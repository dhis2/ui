import { CustomDataProvider } from '@dhis2/app-runtime'
import { act, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import * as virtualizerMock from '../__fixtures__/virtualizer-mock'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import { OuTreeNodeStoreProvider, OuTreeProvider } from '../tree/index'
import { useTreeState } from '../tree/ou-tree-provider'
import { useOuTreeVirtualRows } from './use-ou-tree-virtual-rows'

jest.mock('@tanstack/react-virtual', () =>
    jest.requireActual('../__fixtures__/virtualizer-mock')
)

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CustomDataProvider data={data}>
        <OuTreeNodeStoreProvider>
            <OuTreeProvider roots={['ou-1']}>{children}</OuTreeProvider>
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

const useProbe = () => {
    const tree = useTreeState()
    const rows = useOuTreeVirtualRows({ scrollRef: { current: null } })
    return { tree, rows }
}

describe('useOuTreeVirtualRows', () => {
    beforeEach(() => virtualizerMock.useVirtualizer.mockClear())

    it('returns one item per row, keyed by row identity, and the measure callback', async () => {
        const { result } = renderHook(useProbe, { wrapper })
        await waitFor(() =>
            expect(result.current.rows.virtualItems).toHaveLength(1)
        )

        expect(result.current.rows.virtualItems[0]).toEqual({
            index: 0,
            start: 0,
            key: 'ou-1',
        })
        expect(result.current.rows.totalSize).toBe(24)
        expect(result.current.rows.measureElement).toBe(
            virtualizerMock.measureElement
        )
    })

    it('asks for the children pages of the virtual range whenever the tree changes', async () => {
        const { result } = renderHook(useProbe, { wrapper })
        await waitFor(() =>
            expect(result.current.rows.virtualItems).toHaveLength(1)
        )
        const spy = jest.spyOn(result.current.tree, 'ensureChildrenLoaded')

        act(() => result.current.tree.open('ou-1'))
        await waitFor(() =>
            expect(result.current.rows.virtualItems).toHaveLength(3)
        )

        expect(spy).toHaveBeenLastCalledWith(0, 2)
    })

    it('does not ask for pages while there are no rows', async () => {
        const { result } = renderHook(useProbe, { wrapper })
        const spy = jest.spyOn(result.current.tree, 'ensureChildrenLoaded')

        expect(result.current.rows.virtualItems).toHaveLength(0)
        expect(spy).not.toHaveBeenCalled()
        await waitFor(() =>
            expect(result.current.rows.virtualItems).toHaveLength(1)
        )
    })

    it('passes overscan, the scroll element and the 24px estimate to the virtualiser', async () => {
        const scrollRef = { current: document.createElement('div') }
        const { result } = renderHook(
            () => useOuTreeVirtualRows({ scrollRef, overscan: 3 }),
            {
                wrapper,
            }
        )

        const options = virtualizerMock.useVirtualizer.mock
            .calls[0][0] as unknown as {
            overscan: number
            getScrollElement: () => HTMLElement | null
            estimateSize: (index: number) => number
        }
        expect(options.overscan).toBe(3)
        expect(options.getScrollElement()).toBe(scrollRef.current)
        expect(options.estimateSize(0)).toBe(24)
        await waitFor(() => expect(result.current.virtualItems).toHaveLength(1))
    })
})
