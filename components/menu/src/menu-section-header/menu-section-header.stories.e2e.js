import React from 'react'
import { Menu } from '../menu.js'
import { MenuSectionHeader } from './menu-section-header.js'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [story => <Menu>{story()}</Menu>],
}

export const WithLabel = () => <MenuSectionHeader label="label" />
