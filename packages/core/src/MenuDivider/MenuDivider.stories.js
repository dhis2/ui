import React from 'react'
import { Menu } from '../Menu/Menu.js'
import { MenuDivider } from './MenuDivider.js'

export default {
    title: 'Actions/Menu/Menu Divider',
    component: MenuDivider,
    decorators: [storyFn => <Menu>{storyFn()}</Menu>],
}

export const Default = () => <MenuDivider />

export const Dense = () => <MenuDivider dense />
