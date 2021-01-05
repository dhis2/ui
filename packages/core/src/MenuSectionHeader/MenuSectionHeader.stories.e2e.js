import React from 'react'
import { Menu } from '../Menu/Menu.js'
import { MenuSectionHeader } from './MenuSectionHeader.js'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [storyFn => <Menu>{storyFn()}</Menu>],
}

export const WithLabel = () => <MenuSectionHeader label="label" />
