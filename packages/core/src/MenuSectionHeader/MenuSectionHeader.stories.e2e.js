import React from 'react'
import { Menu } from '../Menu/Menu.js'
import { MenuSectionHeader } from './MenuSectionHeader.js'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [story => <Menu>{story()}</Menu>],
}

export const WithLabel = () => <MenuSectionHeader label="label" />
