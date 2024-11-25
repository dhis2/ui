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

    describe('aria-label attribute', () => {
        it('produces a log if the label prop is not a string', () => {
            // Prep to test logs
            const originalConsoleDebug = console.debug
            const consoleDebugMock = jest.fn()
            console.debug = consoleDebugMock

            const menuItemDataTest = 'data-test-menu-item'
            const wrapper = mount(
                <MenuItem
                    dataTest={menuItemDataTest}
                    label={<span>{'Node label'}</span>}
                />
            )
            const menuItem = wrapper.find({ 'data-test': menuItemDataTest })

            expect(menuItem.childAt(0).prop('role')).toBe('menuitem')
            expect(menuItem.childAt(0).prop('aria-label')).toBe(undefined)
            expect(consoleDebugMock).toHaveBeenCalledWith(
                'The label prop on MenuItem is not a string; a value for the ariaLabel prop should be provided'
            )

            // Teardown
            console.debug = originalConsoleDebug
        })

        it('uses the ariaLabel prop for aria-label if defined', () => {
            const menuItemDataTest = 'data-test-menu-item'
            const wrapper = mount(
                <MenuItem
                    dataTest={menuItemDataTest}
                    label={<span>{'Node label'}</span>}
                    ariaLabel="Aria label"
                />
            )
            const menuItem = wrapper.find({ 'data-test': menuItemDataTest })

            expect(menuItem.childAt(0).prop('role')).toBe('menuitem')
            expect(menuItem.childAt(0).prop('aria-label')).toBe('Aria label')
        })
    })
})
