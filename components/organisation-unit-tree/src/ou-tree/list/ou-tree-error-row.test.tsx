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
import { OuTreeErrorRow } from './ou-tree-error-row'

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

describe('OuTreeErrorRow', () => {
    it('renders an error skeleton and retries its page through the store', async () => {
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
        expect(screen.getByTestId('t-retry-skeleton')).toHaveClass('error')
        await userEvent.click(screen.getByTestId('t-retry'))

        expect(retry).toHaveBeenCalledWith('ou-1', 2)
        await waitFor(() => undefined)
    })
})
