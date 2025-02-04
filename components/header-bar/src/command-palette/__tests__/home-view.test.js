import { fireEvent } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'
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
    beforeAll(() => {
        // Testing environment does not support the <dialog> component yet so it has to mocked
        // linked issue: https://github.com/jsdom/jsdom/issues/3294
        HTMLDialogElement.prototype.showModal = jest.fn()
        HTMLDialogElement.prototype.close = jest.fn()
    })
    it('shows the full default view upon opening the Command Palette', async () => {
        const user = userEvent.setup()
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
        await await user.click(getByTestId(headerBarIconTest))

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
        await await user.type(searchField, 'Test')
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
        await user.click(clearButton)
        expect(searchField).toHaveValue('')

        // back to default view
        expect(queryByTestId('headerbar-top-apps-list')).toBeInTheDocument()
        expect(queryByText(/Results for "Test"/i)).not.toBeInTheDocument()
    })

    it('handles right arrow navigation in the grid on the home view', async () => {
        const user = userEvent.setup()
        const { container, queryByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal with (Ctrl + /) keys
        fireEvent.keyDown(container, { key: '/', ctrlKey: true })

        // topApps
        const appsGrid = queryByTestId('headerbar-top-apps-list')
        expect(appsGrid).toBeInTheDocument()

        const topApps = appsGrid.querySelectorAll('a')
        expect(topApps.length).toBe(minAppsNum)
        const firstApp = topApps[0]

        // first highlighted item
        expect(firstApp).toHaveClass('highlighted')
        expect(firstApp.querySelector('span')).toHaveTextContent('Test App 1')

        // move right through the first row of items (0 - 3)
        for (
            let prevIndex = 0;
            prevIndex < topApps.length / 2 - 1;
            prevIndex++
        ) {
            const activeIndex = prevIndex + 1
            expect(topApps[prevIndex]).toHaveClass('highlighted')

            // move to next item
            await user.keyboard('{ArrowRight}')
            expect(topApps[prevIndex]).not.toHaveClass('highlighted')
            expect(topApps[activeIndex]).toHaveClass('highlighted')
            expect(
                topApps[activeIndex].querySelector('span')
            ).toHaveTextContent(`Test App ${activeIndex + 1}`)
        }

        // loops back to the first item
        await user.keyboard('{ArrowRight}')
        expect(firstApp).toHaveClass('highlighted')
    })

    it('handles left arrow navigation in the grid on the home view', async () => {
        const user = userEvent.setup()
        const { container, getByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal with (Ctrl + /) keys
        fireEvent.keyDown(container, { key: '/', ctrlKey: true })

        // topApps
        const appsGrid = getByTestId('headerbar-top-apps-list')

        const topApps = appsGrid.querySelectorAll('a')
        expect(topApps.length).toBe(minAppsNum)
        const firstApp = topApps[0]
        const lastAppInFirstRow = topApps[3]

        // first highlighted item
        expect(firstApp).toHaveClass('highlighted')
        expect(firstApp.querySelector('span')).toHaveTextContent('Test App 1')

        // loops to last item in the row
        await user.keyboard('{ArrowLeft}')
        expect(firstApp).not.toHaveClass('highlighted')
        expect(lastAppInFirstRow).toHaveClass('highlighted')
        expect(lastAppInFirstRow.querySelector('span')).toHaveTextContent(
            'Test App 4'
        )

        // move left through the first row of items (3 - 0)
        for (
            let prevIndex = topApps.length / 2 - 1;
            prevIndex > 0;
            prevIndex--
        ) {
            const activeIndex = prevIndex - 1
            expect(topApps[prevIndex]).toHaveClass('highlighted')

            // move to next item
            await user.keyboard('{ArrowLeft}')
            expect(topApps[prevIndex]).not.toHaveClass('highlighted')
            expect(topApps[activeIndex]).toHaveClass('highlighted')
            expect(
                topApps[activeIndex].querySelector('span')
            ).toHaveTextContent(`Test App ${activeIndex + 1}`)
        }
    })

    it('handles down arrow navigation on the home view', async () => {
        const user = userEvent.setup()
        const { queryByTestId, container } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal with (Ctrl + /) keys
        fireEvent.keyDown(container, { key: '/', ctrlKey: true })

        // topApps
        const appsGrid = queryByTestId('headerbar-top-apps-list')
        expect(appsGrid).toBeInTheDocument()

        const topApps = appsGrid.querySelectorAll('a')
        expect(topApps.length).toBe(minAppsNum)
        const rowOneFirstApp = topApps[0]
        const rowTwoFirstApp = topApps[4]

        // first highlighted item
        expect(rowOneFirstApp).toHaveClass('highlighted')
        expect(rowOneFirstApp.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        await user.keyboard('{ArrowDown}')
        expect(rowOneFirstApp).not.toHaveClass('highlighted')
        expect(rowTwoFirstApp).toHaveClass('highlighted')
        expect(rowTwoFirstApp.querySelector('span')).toHaveTextContent(
            'Test App '
        )

        // actions menu
        await user.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-apps')).toHaveClass(
            'highlighted'
        )

        await user.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-commands')).toHaveClass(
            'highlighted'
        )

        await user.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-browse-shortcuts')).toHaveClass(
            'highlighted'
        )

        await user.keyboard('{ArrowDown}')
        expect(queryByTestId('headerbar-logout')).toHaveClass('highlighted')

        // loop back to grid
        await user.keyboard('{ArrowDown}')
        expect(rowOneFirstApp).toHaveClass('highlighted')
    })

    it('handles up arrow navigation on the home view', async () => {
        const user = userEvent.setup()
        const { container, getByTestId, queryByTestId } = render(
            <CommandPalette
                apps={testApps}
                shortcuts={testShortcuts}
                commands={testCommands}
            />
        )

        // open modal with (Ctrl + /) keys
        fireEvent.keyDown(container, { key: '/', ctrlKey: true })

        // topApps
        const appsGrid = getByTestId('headerbar-top-apps-list')
        const topApps = appsGrid.querySelectorAll('a')

        const rowOneFirstApp = topApps[0]
        const rowTwoFirstApp = topApps[4]

        // first highlighted item
        expect(rowOneFirstApp).toHaveClass('highlighted')
        expect(rowOneFirstApp.querySelector('span')).toHaveTextContent(
            'Test App 1'
        )

        // goes to bottom of actions menu
        await user.keyboard('{ArrowUp}')
        expect(rowOneFirstApp).not.toHaveClass('highlighted')
        expect(queryByTestId('headerbar-logout')).toHaveClass('highlighted')

        await user.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-shortcuts')).toHaveClass(
            'highlighted'
        )

        await user.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-commands')).toHaveClass(
            'highlighted'
        )

        await user.keyboard('{ArrowUp}')
        expect(queryByTestId('headerbar-browse-apps')).toHaveClass(
            'highlighted'
        )

        // moves to grid
        await user.keyboard('{ArrowUp}')
        expect(rowTwoFirstApp).toHaveClass('highlighted')
        expect(rowTwoFirstApp.querySelector('span')).toHaveTextContent(
            'Test App 5'
        )

        await user.keyboard('{ArrowUp}')
        expect(rowOneFirstApp).toHaveClass('highlighted')
    })
})
