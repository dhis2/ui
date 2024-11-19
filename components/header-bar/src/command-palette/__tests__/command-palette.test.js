import { render as originalRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import React from 'react'
import CommandPalette from '../command-palette.js'
import { CommandPaletteContextProvider } from '../context/command-palette-context.js'
import { MIN_APPS_NUM } from '../hooks/use-navigation.js'

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
        userEvent.click(headerBarIcon)
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()
    })

    it('opens and closes Command Palette using ctrl + /', () => {
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

    it('opens and closes Command Palette using meta + /', () => {
        const { queryByTestId } = render(
            <CommandPalette apps={[]} shortcuts={[]} commands={[]} />
        )
        // modal not rendered yet
        expect(queryByTestId(modalTest)).not.toBeInTheDocument()

        // meta + /
        // open modal
        userEvent.keyboard('{meta}/')
        expect(queryByTestId(modalTest)).toBeInTheDocument()
        // close modal
        userEvent.keyboard('{meta}/')
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
})
