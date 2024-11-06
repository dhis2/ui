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
    it('renders Browse Apps View', () => {
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
        userEvent.click(getByTestId(headerBarIconTest))

        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        userEvent.click(getByTestId('headerbar-browse-apps'))

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
        userEvent.click(getByLabelText('Back Button'))
        expect(queryByText(/Top Apps/i)).toBeInTheDocument()
        expect(queryByText(/Actions/i)).toBeInTheDocument()
    })

    it('handles navigation and hover state of list items', () => {
        const {
            getAllByRole,
            queryByTestId,
            getByPlaceholderText,
            queryAllByTestId,
            queryByText,
        } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        userEvent.keyboard('{ctrl}/')

        //open browse apps view
        userEvent.click(queryByTestId('headerbar-browse-apps'))

        // no filter view
        const searchField = getByPlaceholderText('Search apps')
        expect(queryByText(/All Apps/i)).toBeInTheDocument()

        const listItems = queryAllByTestId('headerbar-list-item')
        // 9 apps
        expect(listItems.length).toBe(9)

        // first item highlighted
        expect(listItems[0]).toHaveClass('highlighted')
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(listItems[0]).not.toHaveClass('highlighted')
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[2]).toHaveClass('highlighted')
        expect(listItems[2].querySelector('span')).toHaveTextContent(
            'Test App 3'
        )

        userEvent.keyboard('{ArrowUp}')
        expect(listItems[2]).not.toHaveClass('highlighted')
        expect(listItems[1]).toHaveClass('highlighted')
        expect(listItems[1].querySelector('span')).toHaveTextContent(
            'Test App 2'
        )

        // filter items view
        userEvent.type(searchField, 'Test App')
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
        userEvent.hover(listItems[8])
        expect(listItems[1]).not.toHaveClass('highlighted')
        expect(listItems[8]).toHaveClass('highlighted')
        expect(listItems[8].querySelector('span')).toHaveTextContent(
            'Test App 9'
        )

        const clearButton = getAllByRole('button')[1]
        userEvent.click(clearButton)

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
