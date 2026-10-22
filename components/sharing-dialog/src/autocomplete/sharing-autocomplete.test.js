import { CustomDataProvider } from '@dhis2/app-runtime'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useState } from 'react'
import { SharingAutocomplete } from './sharing-autocomplete.js'

jest.mock('../helpers/index.js', () => ({
    debounce: (fn) => fn,
}))

const Wrapper = () => {
    const [selected, setSelected] = useState()

    return (
        <SharingAutocomplete
            selected={selected}
            onSelection={(user) => setSelected(user?.displayName)}
        />
    )
}

describe('SharingAutocomplete', () => {
    it('supports keyboard navigation and selection from the search input', async () => {
        const userDisplayName = 'Some User'
        const dataProviderData = {
            'sharing/search': jest.fn(() => ({
                users: [
                    {
                        id: 'user-1',
                        displayName: userDisplayName,
                    },
                    {
                        id: 'user-2',
                        displayName: 'Someone Else',
                    },
                ],
            })),
        }
        render(
            <CustomDataProvider data={dataProviderData}>
                <Wrapper />
            </CustomDataProvider>
        )

        await userEvent.type(screen.getByRole('textbox'), 'Som')
        const [firstResult, secondResult] = await screen.findAllByRole(
            'menuitem'
        )

        expect(screen.getByRole('textbox')).toHaveFocus()
        await userEvent.keyboard('{ArrowDown}')
        expect(firstResult.parentElement).toHaveFocus()

        await userEvent.keyboard('{ArrowDown}')
        expect(secondResult.parentElement).toHaveFocus()

        await userEvent.keyboard('{ArrowUp}')
        expect(firstResult.parentElement).toHaveFocus()

        await userEvent.keyboard('{Enter}')
        expect(screen.getByRole('textbox')).toHaveValue(userDisplayName)
    })

    it('hides autocompletion results after selection', async () => {
        const userDisplayName = 'Some User'
        const dataProviderData = {
            'sharing/search': jest.fn(() => ({
                users: [
                    {
                        id: 'user-1',
                        displayName: userDisplayName,
                    },
                ],
            })),
        }
        render(
            <CustomDataProvider data={dataProviderData}>
                <Wrapper />
            </CustomDataProvider>
        )

        const searchString = userDisplayName.slice(0, 3)
        await userEvent.type(screen.getByRole('textbox'), searchString)
        expect(screen.getByRole('textbox')).toHaveValue(searchString)

        await userEvent.click(screen.getByRole('menuitem'))
        expect(screen.getByRole('textbox')).toHaveValue(userDisplayName)

        try {
            await waitFor(() => screen.getByRole('menuitem'), { timeout: 1 })
        } catch (error) {
            if (!error.message.startsWith('Unable to find role="menuitem"')) {
                throw error
            }
        }
        expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
    })
})
