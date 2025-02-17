import { userEvent } from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    render,
    testCommands,
} from './command-palette.test.js'

describe('Command Palette - List View - Browse Commands', () => {
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })
    it('renders Browse Commands View', async () => {
        const user = userEvent.setup()
        const { getByTestId, queryByTestId, getByPlaceholderText } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={testCommands} />
        )
        // open command palette
        await user.click(getByTestId(headerBarIconTest))

        // click browse-commands link
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        await user.click(getByTestId('headerbar-browse-commands'))

        // Browse Commands View
        // Search field
        const searchField = getByPlaceholderText('Search commands')
        expect(searchField).toHaveValue('')

        const backActionListItem = getByTestId('headerbar-back-action')
        expect(backActionListItem).not.toHaveClass('highlighted')

        const commandsListItem = queryByTestId('headerbar-list-item')
        // first item highlighted
        expect(commandsListItem.querySelector('span')).toHaveTextContent(
            'Test Command 1'
        )
        expect(commandsListItem).toHaveClass('highlighted')
        commandsListItem.focus()

        // Backspace key goes back to default view
        await user.keyboard('{Backspace}')
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
    })
})
