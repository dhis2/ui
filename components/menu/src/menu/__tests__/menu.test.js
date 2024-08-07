import { Input } from '@dhis2-ui/input'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mount } from 'enzyme'
import React from 'react'
import { MenuDivider } from '../../menu-divider/menu-divider.js'
import { MenuItem } from '../../menu-item/menu-item.js'
import { MenuSectionHeader } from '../../menu-section-header/menu-section-header.js'
import { Menu } from '../menu.js'

describe('Menu Component', () => {
    const menuDataTest = 'data-test-menu'
    const menuItemDataTest = 'data-test-menu-item'
    const dividerDataTest = 'data-test-menu-divider'

    it('Menu and menu items have aria attributes', () => {
        const wrapper = mount(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuSectionHeader label="Header" />
                <MenuDivider dataTest={dividerDataTest} />
                <MenuItem dataTest={menuItemDataTest} label="Menu item" />
            </Menu>
        )
        const menuElement = wrapper.find({ 'data-test': menuDataTest })
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })
        const menuDivider = wrapper.find({ 'data-test': dividerDataTest })

        expect(menuElement.prop('role')).toBe('menu')

        expect(menuItem.childAt(0).props().role).toBe('menuitem')
        expect(menuItem.childAt(0).prop('aria-label')).toBe('Menu item')
        expect(menuDivider.find('[role="separator"]').exists()).toBe(true)
    })

    it('Empty menu has role menu', () => {
        const menuDataTest = 'data-test-menu'
        const wrapper = mount(<Menu dataTest={menuDataTest} dense={false} />)
        const menuElement = wrapper.find({ 'data-test': menuDataTest })
        expect(menuElement.prop('role')).toBe('menu')
    })

    it('can handle focus of first focusable element when tabbed to', () => {
        const { getByRole, getByText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuSectionHeader label="Header" />
                <MenuDivider dataTest={dividerDataTest} />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 1" />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 2" />
            </Menu>
        )

        const menu = getByRole('menu')
        const divider = getByRole('separator')
        const header = getByText(/Header/i)
        const menuItem1 = getByText(/Menu item 1/i)
        const menuItem2 = getByText(/Menu item 2/i)

        expect(menu).not.toHaveFocus()
        userEvent.tab()
        // check if LI parent node has focus or not
        // headers and dividers do not receive focus
        expect(header.parentNode.parentNode).not.toHaveFocus()
        expect(divider.parentNode.parentNode).not.toHaveFocus()
        expect(menuItem2.parentNode.parentNode).not.toHaveFocus()
        expect(menuItem1.parentNode.parentNode).toHaveFocus()
    })

    it('can handle arrow down key navigation', async () => {
        const { getByText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuSectionHeader label="Header" />
                <MenuDivider dataTest={dividerDataTest} />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 1" />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 2" />
            </Menu>
        )

        const menuItem1 = getByText(/Menu item 1/i)
        const menuItem2 = getByText(/Menu item 2/i)

        userEvent.tab()
        expect(menuItem1.parentNode.parentNode).toHaveFocus()
        // simulate arrowDown press
        userEvent.keyboard('{ArrowDown}')
        expect(menuItem1.parentNode.parentNode).not.toHaveFocus()
        expect(menuItem2.parentNode.parentNode).toHaveFocus()

        userEvent.keyboard('{ArrowDown}')
        expect(menuItem1.parentNode.parentNode).toHaveFocus()
        expect(menuItem2.parentNode.parentNode).not.toHaveFocus()
    })

    it('can handle arrow up key navigation', async () => {
        const { getByText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuSectionHeader label="Header" />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 1" />
                <MenuDivider dataTest={dividerDataTest} />
                <MenuItem dataTest={menuItemDataTest} label="Menu item 2" />
            </Menu>
        )

        const menuItem1 = getByText(/Menu item 1/i)
        const menuItem2 = getByText(/Menu item 2/i)

        userEvent.tab()
        expect(menuItem1.parentNode.parentNode).toHaveFocus()

        // simulate arrowUp press
        userEvent.keyboard('{ArrowUp}')
        expect(menuItem1.parentNode.parentNode).not.toHaveFocus()
        expect(menuItem2.parentNode.parentNode).toHaveFocus()

        userEvent.keyboard('{ArrowUp}')
        expect(menuItem1.parentNode.parentNode).toHaveFocus()
        expect(menuItem2.parentNode.parentNode).not.toHaveFocus()
    })

    it('can handle space and enter key presses for clickable menu items', async () => {
        const onClick = jest.fn()
        const { getByText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuItem
                    onClick={onClick}
                    value="myValue"
                    label="Click menu item"
                />
            </Menu>
        )

        const clickableItem = getByText(/Click menu item/i)

        userEvent.tab()
        expect(clickableItem.parentNode.parentNode).toHaveFocus()

        userEvent.keyboard('[Space]')
        expect(onClick).toHaveBeenCalledTimes(1)

        userEvent.keyboard('{Enter}')
        expect(onClick).toHaveBeenCalledTimes(2)
    })

    it('can handle non MenuItem components', () => {
        const onClick = jest.fn()
        const { getByText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <span role="menuitem" onClick={onClick}>
                    Span 1
                </span>
                <li tabIndex={-1}>
                    <a href="#" role="menuitem">
                        Link 2
                    </a>
                </li>
                <li>
                    <span onClick={onClick}>Span 2</span>
                </li>
            </Menu>
        )

        const nonListMenuItem = getByText(/span 1/i)
        const listMenuItem = getByText(/link 2/i)
        const plainListItem = getByText(/span 2/i)

        // all children must be list items
        expect(nonListMenuItem.parentElement.nodeName).toBe('LI')

        userEvent.tab()
        expect(nonListMenuItem.parentElement).toHaveFocus()
        expect(nonListMenuItem.parentElement.tabIndex).toBe(0)

        expect(onClick).toHaveBeenCalledTimes(0)
        userEvent.keyboard('[Space]')
        expect(onClick).toHaveBeenCalledTimes(1)

        userEvent.keyboard('{ArrowDown}')
        expect(listMenuItem.parentElement).toHaveFocus()

        userEvent.keyboard('{ArrowDown}')
        expect(nonListMenuItem.parentElement).toHaveFocus()
        // non menu items do not receive focus
        expect(plainListItem.parentElement).not.toHaveFocus()
    })

    it('does not hijack input change value if space entered [bug]', () => {
        const onChange = jest.fn()
        const { getByPlaceholderText } = render(
            <Menu dataTest={menuDataTest} dense={false}>
                <MenuItem value="myValue" label="Click menu item" />
                <Input onChange={onChange} placeholder="test"></Input>
            </Menu>
        )

        const inputField = getByPlaceholderText('test')
        inputField.focus()
        userEvent.keyboard('t')
        userEvent.keyboard('e')
        userEvent.keyboard(' ')
        userEvent.keyboard('st')

        expect(inputField.value).toBe('te st')
        expect(onChange).toHaveBeenCalled()
    })
})
