import { mount } from 'enzyme'
import React from 'react'
import { MenuDivider } from '../../menu-divider/menu-divider.js'
import { MenuItem } from '../../menu-item/menu-item.js'
import { MenuSectionHeader } from '../../menu-section-header/menu-section-header.js'
import { Menu } from '../menu.js'

describe('Menu Component', () => {
    it('Menu and menu items have aria attributes', () => {
        const menuDataTest = 'data-test-menu'
        const menuItemDataTest = 'data-test-menu-item'
        const dividerDataTest = 'data-test-menu-divider'
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
        expect(menuDivider.prop('role')).toBe('separator')
    })

    it('Empty menu has role menu', () => {
        const menuDataTest = 'data-test-menu'
        const wrapper = mount(<Menu dataTest={menuDataTest} dense={false} />)
        const menuElement = wrapper.find({ 'data-test': menuDataTest })
        expect(menuElement.prop('role')).toBe('menu')
    })
})
