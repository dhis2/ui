import userEvent from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    render,
    testShortcuts,
} from './command-palette.test.js'

describe('Command Palette - List View - Browse Shortcuts', () => {
    it('renders Browse Shortcuts View', () => {
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
        } = render(
            <CommandPalette apps={[]} shortcuts={testShortcuts} commands={[]} />
        )
        // open command palette
        userEvent.click(getByTestId(headerBarIconTest))

        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        userEvent.click(getByTestId('headerbar-browse-shortcuts'))

        // Browse Shortcuts View
        // Search field
        const searchField = getByPlaceholderText('Search shortcuts')
        expect(searchField).toHaveValue('')

        const backButton = getByLabelText('Back Button')
        expect(backButton).toBeInTheDocument()

        expect(queryByText(/All Shortcuts/i)).toBeInTheDocument()

        const listItem = queryByTestId('headerbar-list-item')
        // first item highlighted
        expect(listItem.querySelector('span')).toHaveTextContent(
            'Test Shortcut 1'
        )
        expect(listItem).toHaveClass('highlighted')

        // go back to default view
        userEvent.click(getByLabelText('Back Button'))
        expect(queryByText(/All Shortcuts/i)).not.toBeInTheDocument()
        expect(queryByText(/Actions/i)).toBeInTheDocument()
    })
})
