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
import { OuTreeNodeStoreProvider, OuTreeProvider } from '../tree/index'
import { OuTreeSearchInput } from './ou-tree-search-input'

// A slow stand-in, so the loading state can be seen.
const data = {
    [TREE_RESOURCE]: createTreeResolver({
        orgUnits: zambiaOrgUnits,
        delay: 50,
    }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const renderInput = () =>
    render(
        <CustomDataProvider data={data}>
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={['ou-1']}>
                    <OuTreeSearchInput dataTest="t" />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )

describe('OuTreeSearchInput', () => {
    it('is a clearable search box with help text while the term is too short', async () => {
        renderInput()
        const input = screen.getByRole('searchbox')
        expect(input).toHaveAttribute('placeholder', 'Search')
        expect(screen.getByTestId('t-search')).toBeInTheDocument()

        await userEvent.type(input, 'c')
        expect(input).toHaveValue('c')
        expect(
            screen.getByText('Type at least 2 characters')
        ).toBeInTheDocument()

        await userEvent.type(input, 'li')
        expect(screen.queryByText('Type at least 2 characters')).toBeNull()

        await userEvent.click(
            screen
                .getByTestId('t-search')
                .querySelector('.clear-button') as HTMLElement
        )
        expect(input).toHaveValue('')
    })

    it('shows the loading indicator while page one is in flight', async () => {
        renderInput()

        await userEvent.type(screen.getByRole('searchbox'), 'Clinic')

        expect(
            await screen.findByTestId('dhis2-uicore-circularloader')
        ).toBeInTheDocument()
        await waitFor(() =>
            expect(
                screen.queryByTestId('dhis2-uicore-circularloader')
            ).toBeNull()
        )
    })
})
