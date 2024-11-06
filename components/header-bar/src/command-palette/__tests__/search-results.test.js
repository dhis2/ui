import userEvent from '@testing-library/user-event'
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
    it('filters for one item and handles navigation of singular item list', () => {
        const { getByPlaceholderText, queryAllByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        userEvent.keyboard('{ctrl}/')

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // one item result
        userEvent.type(searchField, 'Shortcut')
        const listItems = queryAllByTestId('headerbar-list-item')
        expect(listItems.length).toBe(1)

        expect(listItems[0]).toHaveTextContent('Test Shortcut 1')
        expect(listItems[0]).toHaveClass('highlighted')

        userEvent.keyboard('{ArrowUp}')
        expect(listItems[0]).toHaveClass('highlighted')

        userEvent.keyboard('{ArrowDown}')
        expect(listItems[0]).toHaveClass('highlighted')
    })

    it('shows empty search results if no match is made', () => {
        const {
            getByTestId,
            getByPlaceholderText,
            queryByText,
            queryByTestId,
        } = render(
            <CommandPalette apps={[]} shortcuts={testShortcuts} commands={[]} />
        )
        // open command palette
        userEvent.click(getByTestId(headerBarIconTest))

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        userEvent.type(searchField, 'abc')
        expect(searchField).toHaveValue('abc')

        expect(queryByTestId('headerbar-empty-search')).toBeInTheDocument()
        expect(queryByText(/Nothing found for "abc"/i)).toBeInTheDocument()
    })
})
