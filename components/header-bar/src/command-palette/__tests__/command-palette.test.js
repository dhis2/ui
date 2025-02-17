import { fireEvent, render as originalRender } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import PropTypes from 'prop-types'
import React from 'react'
import CommandPalette from '../command-palette.js'
import { CommandPaletteContextProvider } from '../context/command-palette-context.js'
import { MIN_APPS_NUM } from '../utils/constants.js'

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

export const render = (ui, options) =>
    originalRender(ui, { wrapper: CommandPaletteProviderWrapper, ...options })

export const headerBarIconTest = 'headerbar-apps-icon'
export const modalTest = 'headerbar-menu'
export const minAppsNum = MIN_APPS_NUM // 8

export const testApps = new Array(minAppsNum + 1)
    .fill(null)
    .map((_, index) => ({
        name: `Test App ${index + 1}`,
        displayName: `Test App ${index + 1}`,
        icon: '',
        defaultAction: '',
    }))

export const testCommands = [
    {
        name: 'Test Command 1',
        displayName: 'Test Command 1',
        icon: '',
        defaultAction: '',
    },
]

export const testShortcuts = [
    {
        name: 'Test Shortcut 1',
        displayName: 'Test Shortcut 1',
        icon: '',
        defaultAction: '',
    },
]

describe('Command Palette Component', () => {
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })
    it('renders bare default view when Command Palette is opened', async () => {
        const user = userEvent.setup()
        const { getByTestId, queryByTestId, getByPlaceholderText } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )

        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        const headerBarIcon = getByTestId(headerBarIconTest)
        await user.click(headerBarIcon)
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
        // since apps < MIN_APPS_NUM (8)
        expect(queryByTestId('headerbar-browse-apps')).not.toBeInTheDocument()
        // since commands < 1
        expect(
            queryByTestId('headerbar-browse-commands')
        ).not.toBeInTheDocument()
        // since shortcuts < 1
        expect(
            queryByTestId('headerbar-browse-shortcuts')
        ).not.toBeInTheDocument()
        // default action: logout
        expect(queryByTestId('headerbar-logout')).toBeInTheDocument()

        // click outside modal
        await user.click(headerBarIcon)
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('opens and closes Command Palette using ctrl + k', async () => {
        const { container, queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // open modal with (Ctrl + k) keys
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })
        expect(queryByTestId(modalTest)).toBeInTheDocument()

        // close modal with (Ctrl + k) keys
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('opens and closes Command Palette using meta + k', async () => {
        const { container, queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // open modal with (Meta + k) keys
        fireEvent.keyDown(container, { key: 'k', metaKey: true })
        expect(queryByTestId(modalTest)).toBeInTheDocument()

        // close modal with (Ctrl + k) keys
        fireEvent.keyDown(container, { key: 'k', metaKey: true })
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('closes Command Palette using Esc key in default view', async () => {
        const user = userEvent.setup()
        const { container, queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // open modal with (Ctrl + k) keys
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })
        expect(queryByTestId(modalTest)).toBeInTheDocument()

        // Esc key closes the modal
        await user.keyboard('{Escape}')
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('closes Command Palette using Esc key in any list view', async () => {
        const user = userEvent.setup()
        const { container, getByTestId, queryByTestId, queryByText } = render(
            <CommandPalette apps={[]} shortcuts={testShortcuts} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // open modal with (Ctrl + k) keys
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })
        expect(queryByTestId(modalTest)).toBeInTheDocument()

        // go to All Shortcuts (list) view
        await user.click(getByTestId('headerbar-browse-shortcuts'))
        expect(queryByText(/Top Apps/i)).not.toBeInTheDocument()

        // Esc key closes the modal
        await user.keyboard('{Escape}')
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('deletes the search filter with the backspace key', async () => {
        const user = userEvent.setup()
        const { container, getByPlaceholderText } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // open modal
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })

        // Search field
        const searchField = await getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')
        searchField.focus()

        // backspace
        await user.type(searchField, '123')
        expect(searchField).toHaveValue('123')

        await user.keyboard('{Backspace}')
        expect(searchField).toHaveValue('12')

        await user.keyboard('{Backspace}')
        expect(searchField).toHaveValue('1')

        await user.keyboard('{Backspace}')
        expect(searchField).toHaveValue('')
    })

    it('moves to the default view with backspace key if there is no search filter', async () => {
        const user = userEvent.setup()
        const { container, getByPlaceholderText, getByTestId, queryByTestId } =
            render(
                <CommandPalette
                    apps={[]}
                    shortcuts={testShortcuts}
                    commands={[]}
                />
            )
        // open modal
        fireEvent.keyDown(container, { key: 'k', ctrlKey: true })

        // go to All Shortcuts (list) view
        await user.click(getByTestId('headerbar-browse-shortcuts'))

        expect(queryByTestId('headerbar-actions-menu')).not.toBeInTheDocument()

        // Search field
        const searchField = await getByPlaceholderText('Search shortcuts')
        expect(searchField).toHaveValue('')

        // Backspace key goes back to default view
        await user.keyboard('{Backspace}')
        expect(queryByTestId('headerbar-actions-menu')).toBeInTheDocument()
    })
})
