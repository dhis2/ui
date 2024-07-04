import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MenuItem } from '../../menu-item/menu-item.js'
import { FlyoutMenu } from '../flyout-menu.js'

describe('Flyout Menu Component', () => {
    it('can handle navigation of submenus', () => {
        const { getByText, queryByText, getAllByRole } = render(
            <FlyoutMenu>
                <MenuItem label="Item 1" />
                <MenuItem label="Item 2">
                    <MenuItem label="Item 2 a" />
                </MenuItem>
            </FlyoutMenu>
        )

        const itemOne = getByText(/Item 1/i)
        const itemTwo = getByText(/Item 2/i)
        let submenuChild = queryByText(/Item 2 a/i)

        const menuItems = getAllByRole('menuitem')

        expect(menuItems.length).toBe(2)
        expect(menuItems[0]).toBe(itemOne.parentNode)
        expect(menuItems[1]).toBe(itemTwo.parentNode)

        expect(submenuChild).not.toBeInTheDocument()

        userEvent.tab()
        expect(menuItems[0].parentNode).toHaveFocus()
        expect(menuItems[1].parentNode).not.toHaveFocus()

        userEvent.keyboard('{ArrowDown}')
        expect(menuItems[0].parentNode).not.toHaveFocus()
        expect(menuItems[1].parentNode).toHaveFocus()

        userEvent.keyboard('{ArrowRight}')
        submenuChild = getByText(/Item 2 a/i)

        expect(submenuChild).toBeInTheDocument()
        expect(submenuChild.parentElement.parentElement).toHaveFocus()

        userEvent.keyboard('{ArrowLeft}')
        expect(queryByText(/Item 2 a/i)).not.toBeInTheDocument()
        expect(menuItems[1].parentNode).toHaveFocus()
    })
})
