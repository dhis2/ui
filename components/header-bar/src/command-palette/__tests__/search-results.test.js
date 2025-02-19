import { fireEvent } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    render,
    testApps,
    testCommands,
    testShortcuts,
} from './command-palette.test.js'

describe('Command Palette - List View - Search Results', () => {
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })
    it('filters for one item and handles navigation of singular item list', async () => {
        const user = userEvent.setup()
        const { getByPlaceholderText, queryAllByTestId, container } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        // Search field
        const searchField = await getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // one item result
        await user.type(searchField, 'Shortcut')
        const listItems = queryAllByTestId('headerbar-list-item')
        expect(listItems.length).toBe(1)

        expect(listItems[0]).toHaveTextContent('Test Shortcut 1')
        expect(listItems[0]).toHaveClass('highlighted')

        await user.keyboard('{ArrowUp}')
        expect(listItems[0]).toHaveClass('highlighted')

        await user.keyboard('{ArrowDown}')
        expect(listItems[0]).toHaveClass('highlighted')
    })

    it('shows empty search results if no match is made', async () => {
        const user = userEvent.setup()
        const {
            getByTestId,
            getByPlaceholderText,
            queryByText,
            queryByTestId,
        } = render(
            <CommandPalette apps={[]} shortcuts={testShortcuts} commands={[]} />
        )
        // open command palette
        await user.click(getByTestId(headerBarIconTest))

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        await user.type(searchField, 'abc')
        expect(searchField).toHaveValue('abc')

        expect(queryByTestId('headerbar-empty-search')).toBeInTheDocument()
        expect(queryByText(/Nothing found for "abc"/i)).toBeInTheDocument()
    })

    it('handles search for logout action in the command palette', async () => {
        const user = userEvent.setup()
        const { getByPlaceholderText, queryAllByTestId, container } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        // Search field
        const searchField = await getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )

        // result
        await user.type(searchField, 'Logout')
        const listItems = queryAllByTestId('headerbar-list-item')
        expect(listItems.length).toBe(1)

        expect(listItems[0]).toHaveTextContent('Logout')
        expect(listItems[0]).toHaveClass('highlighted')
    })
})
