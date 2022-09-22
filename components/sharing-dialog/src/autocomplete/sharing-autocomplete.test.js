import { CustomDataProvider } from '@dhis2/app-runtime'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
        userEvent.type(screen.getByRole('textbox'), searchString)
        expect(screen.getByRole('textbox')).toHaveValue(searchString)

        await waitFor(() => screen.getByRole('listitem'))
        userEvent.click(screen.getByRole('listitem').querySelector('a'))
        expect(screen.getByRole('textbox')).toHaveValue(userDisplayName)

        try {
            await waitFor(() => screen.getByRole('listitem'), { timeout: 1 })
        } catch (error) {
            if (!error.message.startsWith('Unable to find role="listitem"')) {
                throw error
            }
        }
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    })
})
