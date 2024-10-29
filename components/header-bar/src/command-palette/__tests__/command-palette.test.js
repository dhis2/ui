import { render as originalRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import React from 'react'
import CommandPalette from '../command-palette.js'
import { CommandPaletteContextProvider } from '../context/command-palette-context.js'

const CommandPaletteProviderWrapper = ({ children }) => {
    return (
        <CommandPaletteContextProvider>
            {children}
        </CommandPaletteContextProvider>
    )
}

CommandPaletteProviderWrapper.propTypes = {
    children: PropTypes.node,
}

const render = (ui, options) =>
    originalRender(ui, { wrapper: CommandPaletteProviderWrapper, ...options })

describe('Command Palette Component', () => {
    const headerBarIconTest = 'headerbar-apps-icon'
    const modalTest = 'headerbar-menu'

    const apps = new Array(9).fill({
        name: 'Test App',
        displayName: 'Test App',
        icon: '',
        defaultAction: '',
    })

    const commands = [
        {
            name: 'Test Command',
            displayName: 'Test Command',
            icon: '',
            defaultAction: '',
        },
    ]

    const shortcuts = [
        {
            name: 'Test Shortcut',
            displayName: 'Test Shortcut',
            icon: '',
            defaultAction: '',
        },
    ]

    it('renders bare default view when Command Palette is opened', () => {
        const { getByTestId, queryByTestId, getByPlaceholderText } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )

        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        const headerBarIcon = getByTestId(headerBarIconTest)
        userEvent.click(headerBarIcon)
        expect(queryByTestId(modalTest)).toBeInTheDocument()

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // Top Apps
        expect(queryByTestId('headerbar-top-apps-list')).not.toBeInTheDocument()

        // Actions menu
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        // since apps < 8
        expect(queryByTestId('headerbar-browse-apps')).not.toBeInTheDocument()
        // since commands < 1
        expect(
            queryByTestId('headerbar-browse-commands')
        ).not.toBeInTheDocument()
        // since shortcuts < 1
        expect(
            queryByTestId('headerbar-browse-shortcuts')
        ).not.toBeInTheDocument()
        expect(queryByTestId('headerbar-logout')).toBeInTheDocument()

        // click outside modal
        userEvent.click(headerBarIcon)
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('opens and closes Command Palette using meta/ctrl + /', () => {
        const { queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // ctrl + /
        // open modal
        userEvent.keyboard('{ctrl}/')
        expect(queryByTestId(modalTest)).toBeInTheDocument()
        // close modal
        userEvent.keyboard('{ctrl}/')
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('closes Command Palette using Esc key', () => {
        const { queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // open modal
        userEvent.keyboard('{ctrl}/')
        expect(queryByTestId(modalTest)).toBeInTheDocument()
        // Esc key closes the modal
        userEvent.keyboard('{esc}')
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('shows the full default view upon opening the Command Palette', () => {
        const {
            getByTestId,
            queryByTestId,
            getAllByText,
            getByPlaceholderText,
            queryByText,
            getAllByRole,
        } = render(
            <CommandPalette
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
            />
        )

        userEvent.click(getByTestId(headerBarIconTest))
        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // Top Apps
        expect(queryByTestId('headerbar-top-apps-list')).toBeInTheDocument()
        expect(getAllByText('Test App')).toHaveLength(8)

        // Actions menu
        // since apps > 8
        expect(queryByTestId('headerbar-browse-apps')).toBeInTheDocument()
        // since commands > 1
        expect(queryByTestId('headerbar-browse-commands')).toBeInTheDocument()
        // since shortcuts > 1
        expect(queryByTestId('headerbar-browse-shortcuts')).toBeInTheDocument()
        expect(queryByTestId('headerbar-logout')).toBeInTheDocument()

        // search for command
        userEvent.type(searchField, 'Command')
        expect(searchField).toHaveValue('Command')

        expect(queryByTestId('headerbar-top-apps-list')).not.toBeInTheDocument()
        expect(queryByText(/Results for "Command"/i)).toBeInTheDocument()
        expect(queryByText(/Test Command/)).toBeInTheDocument()
        expect(queryByText(/Test App/)).not.toBeInTheDocument()

        // clear field
        const clearButton = getAllByRole('button')[1]
        userEvent.click(clearButton)
        expect(searchField).toHaveValue('')
        // back to default view
        expect(queryByTestId('headerbar-top-apps-list')).toBeInTheDocument()
    })

    it('renders Browse Apps View', () => {
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
            queryAllByText,
        } = render(<CommandPalette apps={apps} shortcuts={[]} commands={[]} />)
        // open command palette
        userEvent.click(getByTestId(headerBarIconTest))

        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
        userEvent.click(getByTestId('headerbar-browse-apps'))

        // Browse Apps View
        // Search field
        const searchField = getByPlaceholderText('Search apps')
        expect(searchField).toHaveValue('')

        const backButton = getByLabelText('Back Button')
        expect(backButton).toBeInTheDocument()

        expect(queryByText(/All Apps/i)).toBeInTheDocument()
        expect(queryAllByText(/Test App/)).toHaveLength(9)

        // go back to default view
        userEvent.click(backButton)
        expect(queryByText(/All Apps/i)).not.toBeInTheDocument()
        expect(queryByText(/Top Apps/i)).toBeInTheDocument()
    })

    it('renders Browse Commands View', () => {
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
        } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={commands} />
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
        expect(queryByText(/Test Command/)).toBeInTheDocument()

        // Esc key goes back to default view
        userEvent.keyboard('{esc}')
        expect(queryByText(/All Commands/i)).not.toBeInTheDocument()
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
    })

    it('renders Browse Shortcuts View', () => {
        const {
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
        } = render(
            <CommandPalette apps={[]} shortcuts={shortcuts} commands={[]} />
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
        expect(queryByText(/Test Shortcut/)).toBeInTheDocument()
    })

    it('shows empty search results if no match is made', () => {
        const {
            getByTestId,
            getByPlaceholderText,
            queryByText,
            queryByTestId,
        } = render(
            <CommandPalette apps={[]} shortcuts={shortcuts} commands={[]} />
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
