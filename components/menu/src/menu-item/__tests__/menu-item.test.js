import { mount } from 'enzyme'
import React from 'react'
import { MenuItem } from '../menu-item.js'

describe('Menu Component', () => {
    it('Default menu item has aria role', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem dataTest={menuItemDataTest} label="Menu item" />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })
        expect(menuItem.prop('role')).toBe('menuitem')
        expect(menuItem.prop('aria-disabled')).toBe(false)
        expect(menuItem.prop('role')).not.toBe('menuitemcheckbox')
    })

    it('Disabled menu item has aria disabled attribute', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem
                dataTest={menuItemDataTest}
                label="Disabled menu item"
                disabled={true}
            />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })
        expect(menuItem.prop('role')).toBe('menuitem')
        expect(menuItem.prop('role')).not.toBe('menuitemcheckbox')
        expect(menuItem.prop('aria-disabled')).toBe(true)
    })

    it('Toggle-able menu item has menuitemcheckbox role', () => {
        const menuItemDataTest = 'data-test-menu-item'
        const wrapper = mount(
            <MenuItem
                dataTest={menuItemDataTest}
                label="Toggle-able menu item"
                checkbox={true}
            />
        )
        const menuItem = wrapper.find({ 'data-test': menuItemDataTest })
        expect(menuItem.prop('role')).toBe('menuitemcheckbox')
        expect(menuItem.prop('aria-disabled')).toBe(false)
    })
})
