import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data'
import {
    OuTreeNodeStoreProvider,
    OuTreeProvider,
    useOuTree,
    useOuTreeRegisterFocusTarget,
} from '../tree'
import { OuTreeSearchInput } from './ou-tree-search-input'

// A slow stand-in, so the loading state can be seen.
const data = {
    [TREE_RESOURCE]: createTreeResolver({
        orgUnits: zambiaOrgUnits,
        delay: 50,
    }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

// Stands in for the list: a focusable element registered as the focus
// target, showing the tree's mode.
const TreeStandIn = () => {
    const register = useOuTreeRegisterFocusTarget()
    const { mode } = useOuTree()
    return (
        <div tabIndex={0} data-test="target" data-mode={mode} ref={register} />
    )
}
const mode = () => screen.getByTestId('target').getAttribute('data-mode')

const renderInput = () =>
    render(
        <CustomDataProvider data={data}>
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={['ou-1']}>
                    <OuTreeSearchInput dataTest="t" />
                    <TreeStandIn />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )

describe('OuTreeSearchInput', () => {
    it('is a clearable text box with help text while the term is too short', async () => {
        renderInput()
        // A text box, not a search box: Chromium draws its own clear cross
        // for type="search" next to the clearable button.
        const input = screen.getByRole('searchbox')
        expect(input).toHaveAttribute('type', 'text')
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

    it('Down moves focus to the tree, Escape clears the search', async () => {
        renderInput()
        const input = screen.getByRole('searchbox')
        await userEvent.type(input, 'clinic')
        await waitFor(() => expect(mode()).toBe('search'))

        expect(fireEvent.keyDown(input, { key: 'ArrowDown' })).toBe(false)
        expect(document.activeElement).toBe(screen.getByTestId('target'))

        act(() => input.focus())
        fireEvent.keyDown(input, { key: 'Escape' })
        expect(input).toHaveValue('')
        await waitFor(() => expect(mode()).toBe('browse'))
    })
})
