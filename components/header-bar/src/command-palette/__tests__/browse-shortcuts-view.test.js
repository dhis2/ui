import { userEvent } from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    render,
    testShortcuts,
} from './command-palette.test.js'

describe('Command Palette - List View - Browse Shortcuts', () => {
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })
    it('renders Browse Shortcuts View', async () => {
        const user = userEvent.setup()
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
        } = render(
            <CommandPalette apps={[]} shortcuts={testShortcuts} commands={[]} />
        )
        // open command palette
        await user.click(getByTestId(headerBarIconTest))

        // click browse-shortcuts link
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        await user.click(getByTestId('headerbar-browse-shortcuts'))

        // Browse Shortcuts View
        // Search field
        const searchField = getByPlaceholderText('Search shortcuts')
        expect(searchField).toHaveValue('')

        // back action
        const backActionListItem = getByTestId('headerbar-back-action')
        expect(backActionListItem).not.toHaveClass('highlighted')

        const shortcutsListItem = queryByTestId('headerbar-list-item')
        // first item highlighted
        expect(shortcutsListItem.querySelector('span')).toHaveTextContent(
            'Test Shortcut 1'
        )
        expect(shortcutsListItem).toHaveClass('highlighted')

        // go back to default view
        await user.click(getByTestId('headerbar-back-action'))
        expect(queryByText(/Actions/i)).toBeInTheDocument()
    })
})
