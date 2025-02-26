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
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // one item result
        await user.type(searchField, 'Test Shortcut')
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

    it('handles search for actions in the command palette', async () => {
        const user = userEvent.setup()
        const {
            getByPlaceholderText,
            queryAllByTestId,
            queryByPlaceholderText,
            getByTestId,
            queryByTestId,
            container,
        } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )

        const testActionSearch = async (searchTerm, action, dataTestId) => {
            await user.type(searchField, searchTerm)

            const listItems = queryAllByTestId(dataTestId)
            expect(listItems.length).toBe(1)
            expect(listItems[0]).toHaveTextContent(action)
            expect(listItems[0]).toHaveClass('highlighted')

            // clear search field
            await user.keyboard('{Backspace}'.repeat(searchTerm.length))
        }

        // search for logout action
        await testActionSearch('Logout', 'Logout', 'headerbar-logout')
        // search for category actions
        await testActionSearch('apps', 'Browse apps', 'headerbar-browse-apps')
        await testActionSearch(
            'commands',
            'Browse commands',
            'headerbar-browse-commands'
        )
        await testActionSearch(
            'shortcuts',
            'Browse shortcuts',
            'headerbar-browse-shortcuts'
        )

        // go to shortcuts
        await user.type(searchField, 'Browse shortcuts')
        await user.keyboard('{Enter}')
        expect(queryByPlaceholderText('Search shortcuts')).toBeInTheDocument()
        // back action
        const backActionListItem = getByTestId('headerbar-back-action')
        expect(backActionListItem).not.toHaveClass('highlighted')
        // first shortcut highlighted
        const shortcutsListItem = queryByTestId('headerbar-list-item')
        expect(shortcutsListItem.querySelector('span')).toHaveTextContent(
            'Test Shortcut 1'
        )
        expect(shortcutsListItem).toHaveClass('highlighted')
    })

    it('handles multiple search results in the HOME View', async () => {
        const user = userEvent.setup()
        const {
            getByPlaceholderText,
            queryAllByTestId,
            container,
            getByTestId,
            queryByTestId,
        } = render(
            <CommandPalette apps={testApps} shortcuts={[]} commands={[]} />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        const searchTerm = 'Test app'

        await user.type(searchField, searchTerm)
        expect(queryByTestId('headerbar-top-apps-list')).not.toBeInTheDocument()

        const resultsListItems = queryAllByTestId('headerbar-list-item')
        expect(resultsListItems.length).toBe(9)

        const firstResult = resultsListItems[0]
        const fifthResult = resultsListItems[4]

        expect(firstResult).toHaveTextContent('Test App 1')
        expect(firstResult).toHaveClass('highlighted')

        // scroll down to fifth result
        await user.keyboard('{ArrowDown}'.repeat(4))

        expect(fifthResult).toHaveTextContent('Test App 5')
        expect(fifthResult).toHaveClass('highlighted')

        // clear search field
        await user.keyboard('{Backspace}'.repeat(searchTerm.length))
        expect(searchField).toHaveValue('')

        const appsGrid = getByTestId('headerbar-top-apps-list')
        const firstGridApp = appsGrid.querySelectorAll('a')[0]

        expect(firstGridApp).toHaveClass('highlighted')
        expect(firstGridApp.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
    })

    it('highlights first action in "no grid home view" when search is cleared', async () => {
        const user = userEvent.setup()
        const {
            getByPlaceholderText,
            queryAllByTestId,
            container,
            queryByTestId,
        } = render(
            <CommandPalette
                apps={[]}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        const appsGrid = queryByTestId('headerbar-top-apps-list')
        const browseAppsAction = queryByTestId('headerbar-browse-apps')
        const browseCommandsAction = queryByTestId('headerbar-browse-commands')

        // since there are no apps
        expect(appsGrid).not.toBeInTheDocument()
        // since apps < MIN_APPS_NUM(8)
        expect(browseAppsAction).not.toBeInTheDocument()
        // since commands > 1
        expect(browseCommandsAction).toBeInTheDocument()
        expect(browseCommandsAction).toHaveClass('highlighted')

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        const searchTerm = 'test'
        await user.type(searchField, searchTerm)

        const resultsListItems = queryAllByTestId('headerbar-list-item')
        expect(resultsListItems.length).toBe(2)
        expect(resultsListItems[0]).toHaveClass('highlighted')

        // clear search field
        await user.keyboard('{Backspace}'.repeat(searchTerm.length))

        expect(searchField).toHaveValue('')
        expect(browseCommandsAction).toHaveClass('highlighted')
    })
})
