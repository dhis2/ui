import userEvent from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    render,
    testCommands,
} from './command-palette.test.js'

describe('Command Palette - List View - Browse Commands', () => {
    it('renders Browse Commands View', () => {
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
        } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={testCommands} />
        )
        // open command palette
        userEvent.click(getByTestId(headerBarIconTest))

        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        userEvent.click(getByTestId('headerbar-browse-commands'))

        // Browse Commands View
        // Search field
        const searchField = getByPlaceholderText('Search commands')
        expect(searchField).toHaveValue('')

        const backButton = getByLabelText('Back Button')
        expect(backButton).toBeInTheDocument()

        expect(queryByText(/All Commands/i)).toBeInTheDocument()

        const listItem = queryByTestId('headerbar-list-item')
        // first item highlighted
        expect(listItem.querySelector('span')).toHaveTextContent(
            'Test Command 1'
        )
        expect(listItem).toHaveClass('highlighted')

        // Esc key goes back to default view
        userEvent.keyboard('{esc}')
        expect(queryByText(/All Commands/i)).not.toBeInTheDocument()
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
    })
})
