import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import {
    OuTreeNodeStoreProvider,
    OuTreeProvider,
    useOuTreeActions,
} from '../tree/index'
import { useTreeState } from '../tree/ou-tree-provider'
import { OuTreeErrorRow } from './ou-tree-error-row'

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

describe('OuTreeErrorRow', () => {
    it('renders a retry skeleton and retries its page through the store', async () => {
        let retry: jest.SpyInstance | undefined
        const Probe = () => {
            const { store } = useOuTreeActions()
            retry ??= jest
                .spyOn(store, 'retryChildrenPage')
                .mockImplementation(() => undefined)
            return (
                <OuTreeErrorRow
                    row={{
                        kind: 'error',
                        parentId: 'ou-1',
                        index: 0,
                        page: 2,
                        error: new Error('x'),
                        depth: 1,
                    }}
                    dataTest="t"
                />
            )
        }
        render(
            <CustomDataProvider data={data}>
                <OuTreeNodeStoreProvider>
                    <OuTreeProvider rootIds={['ou-1']}>
                        <Probe />
                    </OuTreeProvider>
                </OuTreeNodeStoreProvider>
            </CustomDataProvider>
        )

        expect(screen.getByTestId('t-row')).toHaveAttribute(
            'data-row-kind',
            'error'
        )
        expect(screen.getByTestId('t-toggle-space')).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Retry' }))

        expect(retry).toHaveBeenCalledWith('ou-1', 2)
        await waitFor(() => undefined)
    })

    it('retries a results page through the tree for a result-error row', async () => {
        let retry: jest.SpyInstance | undefined
        const Probe = () => {
            const tree = useTreeState()
            retry ??= jest
                .spyOn(tree, 'retryResultsPage')
                .mockImplementation(() => undefined)
            return (
                <OuTreeErrorRow
                    row={{
                        kind: 'result-error',
                        index: 4,
                        page: 3,
                        error: new Error('x'),
                        depth: 2,
                    }}
                    dataTest="t"
                />
            )
        }
        render(
            <CustomDataProvider data={data}>
                <OuTreeNodeStoreProvider>
                    <OuTreeProvider rootIds={['ou-1']}>
                        <Probe />
                    </OuTreeProvider>
                </OuTreeNodeStoreProvider>
            </CustomDataProvider>
        )

        expect(screen.getByTestId('t-row')).toHaveAttribute(
            'data-row-kind',
            'result-error'
        )
        await userEvent.click(screen.getByTestId('t-retry'))
        expect(retry).toHaveBeenCalledWith(3)
    })
})
