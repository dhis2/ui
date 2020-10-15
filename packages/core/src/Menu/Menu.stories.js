import React from 'react'
import { MenuItem } from '../MenuItem/MenuItem.js'
import { MenuSectionHeader } from '../MenuSectionHeader/MenuSectionHeader.js'
import { Menu } from './Menu.js'

export default {
    title: 'Menu',
    component: Menu,
}

export const Default = () => (
    <Menu>
        <MenuItem label="Menu item" />
        <MenuItem label="Menu item" />
    </Menu>
)

export const Dense = () => (
    <Menu dense>
        <MenuItem label="Menu item" />
        <MenuItem label="Menu item" />
    </Menu>
)

export const AutoHideFirstSectionHeaderDivider = () => (
    <Menu>
        <MenuSectionHeader label="First - no divider above" />
        <MenuSectionHeader label="Second - with divider above" />
    </Menu>
)

export const SideBarMenu = () => (
    <main
        style={{
            display: 'flex',
            height: '100%',
            border: '1px solid grey',
        }}
    >
        <aside style={{ width: 200, height: '100%', flexGrow: 0 }}>
            <Menu>
                <MenuItem label="Menu item" />
                <MenuItem label="Menu item" />
            </Menu>
        </aside>
        <section
            style={{
                backgroundColor: '#f3ffff',
                flexGrow: 1,
                padding: 20,
                borderLeft: '1px solid grey',
            }}
        >
            Main content
        </section>
    </main>
)
