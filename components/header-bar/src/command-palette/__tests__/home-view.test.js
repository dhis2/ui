import userEvent from '@testing-library/user-event'
import React from 'react'
import CommandPalette from '../command-palette.js'
import {
    headerBarIconTest,
    minAppsNum,
    render,
    testApps,
    testCommands,
    testShortcuts,
} from './command-palette.test.js'

describe('Command Palette - Home View', () => {
    it('shows the full default view upon opening the Command Palette', () => {
        const {
            getByTestId,
            queryByTestId,
            getAllByText,
            getByPlaceholderText,
            queryAllByText,
            queryByText,
            getAllByRole,
            queryAllByTestId,
        } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )
        // headerbar icon button
        userEvent.click(getByTestId(headerBarIconTest))

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // Top Apps
        expect(queryByTestId('headerbar-top-apps-list')).toBeInTheDocument()
        expect(getAllByText(/Test App/)).toHaveLength(8)

        // Actions menu
        // since apps > MIN_APPS_NUM(8)
        expect(queryByTestId('headerbar-browse-apps')).toBeInTheDocument()
        // since commands > 1
        expect(queryByTestId('headerbar-browse-commands')).toBeInTheDocument()
        // since shortcuts > 1
        expect(queryByTestId('headerbar-browse-shortcuts')).toBeInTheDocument()
        // default action
        expect(queryByTestId('headerbar-logout')).toBeInTheDocument()

        // full search across apps, shortcuts, commands
        userEvent.type(searchField, 'Test')
        expect(searchField).toHaveValue('Test')

        expect(queryByTestId('headerbar-top-apps-list')).not.toBeInTheDocument()
        expect(queryByText(/Results for "Test"/i)).toBeInTheDocument()

        const listItems = queryAllByTestId('headerbar-list-item')
        // 9 apps + 1 command + 1 shortcut
        expect(listItems.length).toBe(11)
        expect(queryAllByText(/Test App/).length).toBe(9)
        expect(queryByText(/Test Command/)).toBeInTheDocument()
        expect(queryByText(/Test Shortcut/)).toBeInTheDocument()

        // clear field
        const clearButton = getAllByRole('button')[1]
        userEvent.click(clearButton)
        expect(searchField).toHaveValue('')

        // back to default view
        expect(queryByTestId('headerbar-top-apps-list')).toBeInTheDocument()
        expect(queryByText(/Results for "Test"/i)).not.toBeInTheDocument()
    })

    it('handles right arrow navigation in the grid on the home view', () => {
        const { getAllByRole } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal
        userEvent.keyboard('{ctrl}/')

        // topApps
        const appLinks = getAllByRole('link')
        const firstAppLink = appLinks[0]
        expect(appLinks.length).toBe(minAppsNum)

        // first highlighted item
        expect(firstAppLink).toHaveClass('highlighted')
        expect(firstAppLink.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // move right through the first row of items (0 - 3)
        for (
            let prevIndex = 0;
            prevIndex < appLinks.length / 2 - 1;
            prevIndex++
        ) {
            const activeIndex = prevIndex + 1
            expect(appLinks[prevIndex]).toHaveClass('highlighted')

            // move to next item
            userEvent.keyboard('{ArrowRight}')
            expect(appLinks[prevIndex]).not.toHaveClass('highlighted')
            expect(appLinks[activeIndex]).toHaveClass('highlighted')
            expect(
                appLinks[activeIndex].querySelector('span')
            ).toHaveTextContent(`Test App ${activeIndex + 1}`)
        }

        // loops back to the first item
        userEvent.keyboard('{ArrowRight}')
        expect(firstAppLink).toHaveClass('highlighted')
    })

    it('handles left arrow navigation in the grid on the home view', () => {
        const { getAllByRole } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal
        userEvent.keyboard('{ctrl}/')

        // topApps
        const appLinks = getAllByRole('link')
        const firstAppLink = appLinks[0]
        const lastAppLinkFirstRow = appLinks[3]
        expect(appLinks.length).toBe(minAppsNum)

        // first highlighted item
        expect(firstAppLink).toHaveClass('highlighted')
        expect(firstAppLink.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // loops to last item in the row
        userEvent.keyboard('{ArrowLeft}')
        expect(firstAppLink).not.toHaveClass('highlighted')
        expect(lastAppLinkFirstRow).toHaveClass('highlighted')
        expect(lastAppLinkFirstRow.querySelector('span')).toHaveTextContent(
            'Test App 4'
        )

        // move left through the first row of items (3 - 0)
        for (
            let prevIndex = appLinks.length / 2 - 1;
            prevIndex > 0;
            prevIndex--
        ) {
            const activeIndex = prevIndex - 1
            expect(appLinks[prevIndex]).toHaveClass('highlighted')

            // move to next item
            userEvent.keyboard('{ArrowLeft}')
            expect(appLinks[prevIndex]).not.toHaveClass('highlighted')
            expect(appLinks[activeIndex]).toHaveClass('highlighted')
            expect(
                appLinks[activeIndex].querySelector('span')
            ).toHaveTextContent(`Test App ${activeIndex + 1}`)
        }
    })

    it('handles down arrow navigation on the home view', () => {
        const { getAllByRole, queryByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal
        userEvent.keyboard('{ctrl}/')

        // topApps
        const appLinks = getAllByRole('link')
        const rowOneFirstAppLink = appLinks[0]
        const rowTwoFirstAppLink = appLinks[4]

        // first highlighted item
        expect(rowOneFirstAppLink).toHaveClass('highlighted')
        expect(rowOneFirstAppLink.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(rowOneFirstAppLink).not.toHaveClass('highlighted')
        expect(rowTwoFirstAppLink).toHaveClass('highlighted')
        expect(rowTwoFirstAppLink.querySelector('span')).toHaveTextContent(
            'Test App '
        )

        // actions menu
        userEvent.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-apps')).toHaveClass(
            'highlighted'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-commands')).toHaveClass(
            'highlighted'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-shortcuts')).toHaveClass(
            'highlighted'
        )

        userEvent.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-logout')).toHaveClass('highlighted')

        // loop back to grid
        userEvent.keyboard('{ArrowDown}')
        expect(rowOneFirstAppLink).toHaveClass('highlighted')
    })

    it('handles up arrow navigation on the home view', () => {
        const { getAllByRole, queryByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal
        userEvent.keyboard('{ctrl}/')

        // topApps
        const appLinks = getAllByRole('link')
        const rowOneFirstAppLink = appLinks[0]
        const rowTwoFirstAppLink = appLinks[4]

        // first highlighted item
        expect(rowOneFirstAppLink).toHaveClass('highlighted')
        expect(rowOneFirstAppLink.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // goes to bottom of actions menu
        userEvent.keyboard('{ArrowUp}')
        expect(rowOneFirstAppLink).not.toHaveClass('highlighted')
        expect(queryByTestId('headerbar-logout')).toHaveClass('highlighted')

        userEvent.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-shortcuts')).toHaveClass(
            'highlighted'
        )

        userEvent.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-commands')).toHaveClass(
            'highlighted'
        )

        userEvent.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-apps')).toHaveClass(
            'highlighted'
        )

        // moves to grid
        userEvent.keyboard('{ArrowUp}')
        expect(rowTwoFirstAppLink).toHaveClass('highlighted')
        expect(rowTwoFirstAppLink.querySelector('span')).toHaveTextContent(
            'Test App 5'
        )

        userEvent.keyboard('{ArrowUp}')
        expect(rowOneFirstAppLink).toHaveClass('highlighted')
    })
})
