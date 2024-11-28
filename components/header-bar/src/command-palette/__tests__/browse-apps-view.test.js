import { fireEvent, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
    it('renders Browse Apps View', async () => {
        const user = userEvent.setup()
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
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

        const backButton = getByLabelText('Back Button')
        expect(backButton).toBeInTheDocument()

        expect(queryByText(/All Apps/i)).toBeInTheDocument()

        const listItems = queryAllByTestId('headerbar-list-item')
        // first item highlighted
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
        expect(listItems[0]).toHaveClass('highlighted')

        // go back to default view
        await user.click(getByLabelText('Back Button'))
        expect(queryByText(/Top Apps/i)).toBeInTheDocument()
        expect(queryByText(/Actions/i)).toBeInTheDocument()
    })

    it('handles navigation and hover state of list items', async () => {
        // const user = userEvent.setup()
        const {
            getAllByRole,
            queryByTestId,
            queryAllByTestId,
            queryByText,
            findByPlaceholderText,
            container,
            findByTestId,
            debug,
        } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        await userEvent.keyboard('{meta>}/')

        // ToDo: this is a workaround after upgrading react because otherwise / is typed into the Searchbox in the test
        await userEvent.keyboard('{backspace}')

        const browseAppsLink = await findByTestId('headerbar-browse-apps')

        await userEvent.click(browseAppsLink)

        // no filter view
        const searchField = await findByPlaceholderText('Search apps')
        expect(queryByText(/All Apps/i)).toBeInTheDocument()

        const listItems = queryAllByTestId('headerbar-list-item')
        // 9 apps
        expect(listItems.length).toBe(9)

        // first item highlighted
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        await userEvent.keyboard('{ArrowDown}')
        expect(listItems[0]).not.toHaveClass('highlighted')
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )

        await userEvent.keyboard('{ArrowDown}')
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[2]).toHaveClass('highlighted')
        expect(listItems[2].querySelector('span')).toHaveTextContent(
            'Test App 3'
        )

        await userEvent.keyboard('{ArrowUp}')
        expect(listItems[2]).not.toHaveClass('highlighted')
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )

        // filter items view
        await userEvent.type(searchField, 'Test App')
        expect(searchField).toHaveValue('Test App')
        expect(queryByText(/All Apps/i)).not.toBeInTheDocument()
        expect(queryByText(/Results for "Test App"/i)).toBeInTheDocument()

        // first item highlighted
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // simulate hover
        await userEvent.hover(listItems[8])
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[8]).toHaveClass('highlighted')
        expect(listItems[8].querySelector('span')).toHaveTextContent(
            'Test App 9'
        )

        const clearButton = getAllByRole('button')[1]
        await userEvent.click(clearButton)

        // back to normal list view/no filter view
        expect(queryByText(/All Apps/i)).toBeInTheDocument()
        expect(queryByText(/Results for "Test App"/i)).not.toBeInTheDocument()

        // first item highlighted
        expect(listItems[8]).not.toHaveClass('highlighted')
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
    })
})
