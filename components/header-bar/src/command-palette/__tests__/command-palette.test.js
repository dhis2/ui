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

const render = (ui, options) =>
    originalRender(ui, { wrapper: CommandPaletteProviderWrapper, ...options })

describe('Command Palette Component', () => {
    const headerBarIconTest = 'headerbar-apps-icon'
    const modalTest = 'headerbar-menu'
    const minAppsNum = MIN_APPS_NUM // 8

    const apps = new Array(minAppsNum + 1).fill(null).map((_, index) => ({
        name: `Test App ${index + 1}`,
        displayName: `Test App ${index + 1}`,
        icon: '',
        defaultAction: '',
    }))

    const commands = [
        {
            name: 'Test Command 1',
            displayName: 'Test Command 1',
            icon: '',
            defaultAction: '',
        },
    ]

    const shortcuts = [
        {
            name: 'Test Shortcut 1',
            displayName: 'Test Shortcut 1',
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
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
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

    it('renders Browse Apps View', () => {
        const {
            getAllByRole,
            getByTestId,
            queryByTestId,
            getByPlaceholderText,
            queryByText,
            getByLabelText,
            queryAllByTestId,
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

        let listItems = queryAllByTestId('headerbar-list-item')
        // first item highlighted
        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 1'
        )
        expect(listItems[0]).toHaveClass('highlighted')

        // search across apps
        userEvent.type(searchField, '6')
        expect(searchField).toHaveValue('6')

        expect(queryByText(/Results for "6"/i)).toBeInTheDocument()

        listItems = queryAllByTestId('headerbar-list-item')
        expect(listItems.length).toBe(1)
        expect(queryAllByText(/Test App/).length).toBe(1)

        expect(listItems[0].querySelector('span')).toHaveTextContent(
            'Test App 6'
        )
        expect(listItems[0]).toHaveClass('highlighted')

        // clear field
        const clearButton = getAllByRole('button')[1]
        userEvent.click(clearButton)
        expect(searchField).toHaveValue('')
        expect(queryByText(/All Apps/i)).toBeInTheDocument()
        expect(queryByText(/Results for "6"/i)).not.toBeInTheDocument()

        // go back to default view
        userEvent.click(getByLabelText('Back Button'))
        expect(queryByText(/Top Apps/i)).toBeInTheDocument()
        expect(queryByText(/Actions/i)).toBeInTheDocument()
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

    it('handles right arrow navigation in the grid on the home view', () => {
        const { getAllByRole } = render(
            <CommandPalette
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
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
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
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
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
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
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
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

    it('handles navigation and hover state in list view - browse apps', () => {
        const {
            getAllByRole,
            queryByTestId,
            getByPlaceholderText,
            queryAllByTestId,
            queryByText,
        } = render(
            <CommandPalette
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
            />
        )
        // open modal
        userEvent.keyboard('{ctrl}/')

        //open browse apps view
        userEvent.click(queryByTestId('headerbar-browse-apps'))

        // no filter view
        const searchField = getByPlaceholderText('Search apps')
        expect(searchField).toHaveValue('')
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

    it('handles a list with one item', () => {
        const { getByPlaceholderText, queryAllByTestId } = render(
            <CommandPalette
                apps={apps}
                shortcuts={shortcuts}
                commands={commands}
            />
        )
        // open modal
        userEvent.keyboard('{ctrl}/')

        // Search field
        const searchField = getByPlaceholderText(
            'Search apps, shortcuts, commands'
        )
        expect(searchField).toHaveValue('')

        // one item result
        userEvent.type(searchField, 'Shortcut')
        const listItems = queryAllByTestId('headerbar-list-item')
        expect(listItems.length).toBe(1)

        expect(listItems[0]).toHaveTextContent('Test Shortcut 1')
        expect(listItems[0]).toHaveClass('highlighted')

        userEvent.keyboard('{ArrowUp}')
        expect(listItems[0]).toHaveClass('highlighted')

        userEvent.keyboard('{ArrowDown}')
        expect(listItems[0]).toHaveClass('highlighted')
    })
})
