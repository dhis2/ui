import { fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    testApps,
    testCommands,
    testShortcuts,
    render,
    headerBarIconTest,
} from './command-palette.test.js'

describe('Command Palette - List View - Browse Apps View', () => {
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })

    it('renders Browse Apps View', async () => {
        const user = userEvent.setup()
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            queryAllByTestId,
        } = render(
            <CommandPalette apps={testApps} shortcuts={[]} commands={[]} />
        )
        // open command palette
        await user.click(getByTestId(headerBarIconTest))

        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        await user.click(getByTestId('headerbar-browse-apps'))

        // Browse Apps View
        const searchField = getByPlaceholderText('Search apps')
        expect(searchField).toHaveValue('')

        // check for navigation keys legend
        expect(
            queryByTestId('headerbar-navigation-keys-legend')
        ).toBeInTheDocument()
        // list view vertical navigation icon
        expect(queryByTestId('vertical-navigation-icon')).toBeInTheDocument()

        // back action
        const backActionListItem = getByTestId('headerbar-back-action')
        expect(backActionListItem).not.toHaveClass('highlighted')

        const appsListItems = queryAllByTestId('headerbar-list-item')

        // first item highlighted
        expect(appsListItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
        expect(appsListItems[0]).toHaveClass('highlighted')

        // go back to default view
        await user.click(getByTestId('headerbar-back-action'))
        expect(queryByText(/Top Apps/i)).toBeInTheDocument()
        expect(queryByText(/Actions/i)).toBeInTheDocument()
    })

    it('handles navigation and hover state of list items', async () => {
        const user = userEvent.setup()
        const {
            getAllByRole,
            queryAllByTestId,
            findByPlaceholderText,
            container,
            findByTestId,
            getByTestId,
        } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal with (meta + k) keys
        fireEvent.keyDown(container, { key: 'k', metaKey: true })

        // click browse-apps link
        const browseAppsLink = await findByTestId('headerbar-browse-apps')
        await user.click(browseAppsLink)

        // no filter view
        const searchField = await findByPlaceholderText('Search apps')

        // back action
        const list = queryAllByTestId('headerbar-list')
        const backActionListItem = getByTestId('headerbar-back-action')
        const appsListItems = queryAllByTestId('headerbar-list-item')

        const listItems = list[0].children
        // 9 apps + back action
        expect(listItems.length).toBe(10)
        expect(appsListItems.length).toBe(9)

        // first list item not to be highlighted
        expect(listItems[0]).toBe(backActionListItem)
        expect(backActionListItem).not.toHaveClass('highlighted')

        // first app item highlighted
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
        listItems[1].focus()

        await user.keyboard('{ArrowDown}')
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[2]).toHaveClass('highlighted')
        expect(listItems[2].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )
        listItems[1].focus()

        await user.keyboard('{ArrowDown}')
        expect(listItems[2]).not.toHaveClass('highlighted')
        expect(listItems[3]).toHaveClass('highlighted')
        expect(listItems[3].querySelector('span')).toHaveTextContent(
            'Test App 3'
        )
        listItems[2].focus()

        await user.keyboard('{ArrowUp}')
        expect(listItems[3]).not.toHaveClass('highlighted')
        expect(listItems[2]).toHaveClass('highlighted')
        expect(listItems[2].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )
        listItems[1].focus()

        // filter items view
        await user.type(searchField, 'Test App')
        expect(searchField).toHaveValue('Test App')

        // first item highlighted
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // simulate hover - no highlight
        await user.hover(listItems[8])
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[8]).not.toHaveClass('highlighted')
        expect(listItems[8].querySelector('span')).toHaveTextContent(
            'Test App 9'
        )

        const clearButton = getAllByRole('button')[1]
        await user.click(clearButton)

        // first app item - highlighted
        expect(backActionListItem).not.toHaveClass('highlighted')
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
    })
})
