import { mount } from 'enzyme'
import React from 'react'
import { MenuItem } from '../menu-item.js'

describe('Menu Component', () => {
    it('Default menu item has role', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem dataTest={menuItemDataTest} label="Menu item" />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })
        expect(menuItem.childAt(0).prop('role')).toBe('menuitem')
        expect(menuItem.childAt(0).prop('aria-disabled')).toBe(undefined)
        expect(menuItem.childAt(0).prop('aria-label')).toBe('Menu item')
    })

    it('Disabled menu item has aria-disabled attribute', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem
                dataTest={menuItemDataTest}
                label="Disabled menu item"
                disabled={true}
            />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })

        expect(menuItem.childAt(0).prop('role')).toBe('menuitem')
        expect(menuItem.childAt(0).prop('aria-disabled')).toBe(true)
        expect(menuItem.childAt(0).prop('aria-label')).toBe(
            'Disabled menu item'
        )
    })

    it('Toggle-able menu item has menuitemcheckbox role', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem
                dataTest={menuItemDataTest}
                label="Toggle-able menu item"
                checkbox
                checked={false}
            />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })

        expect(menuItem.childAt(0).prop('role')).not.toBe('menuitem')
        expect(menuItem.childAt(0).prop('role')).toBe('menuitemcheckbox')
        expect(menuItem.childAt(0).prop('aria-checked')).toBe(false)
        expect(menuItem.childAt(0).prop('aria-label')).toBe(
            'Toggle-able menu item'
        )
    })

    it('Submenu has relevant aria attributes', () => {
        const showSubMenu = false
        const wrapper = mount(
            <MenuItem
                showSubMenu={showSubMenu}
                toggleSubMenu={() => jest.fn()}
                label="Parent of submenus"
            >
                <MenuItem label="Test submenu child" />
            </MenuItem>
        )

        const menuItem = wrapper.find({ role: 'menuitem' })

        expect(menuItem.prop('aria-haspopup')).toBe('menu')
        expect(menuItem.prop('aria-expanded')).toBe(false)
        expect(menuItem.prop('aria-label')).toBe('Parent of submenus')
        expect(wrapper.find({ label: 'Test submenu child' }).exists()).toBe(
            false
        )
    })
})
