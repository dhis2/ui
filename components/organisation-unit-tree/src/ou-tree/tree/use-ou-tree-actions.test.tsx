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
import { useOuTreeActions } from './use-ou-tree-actions'

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

describe('useOuTreeActions', () => {
    it('returns the same object across tree changes without re-rendering its caller', async () => {
        let renders = 0
        const { result } = renderHook(
            () => {
                renders += 1
                return useOuTreeActions()
            },
            { wrapper }
        )
        const first = result.current
        await waitFor(() => expect(first.store.getNode('ou-1')).toBeDefined())

        act(() => first.open('ou-1'))
        await waitFor(() =>
            expect(first.store.getChildren('ou-1').status).toBe('loaded')
        )

        expect(result.current).toBe(first)
        expect(renders).toBe(1)
    })

    it('throws outside an OuTreeProvider', () => {
        const spy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined)

        expect(() => renderHook(() => useOuTreeActions())).toThrow(
            'OuTree hooks need an OuTreeProvider above them'
        )
        spy.mockRestore()
    })
})
