import React from 'react'

import { Menu } from '../Menu/Menu.js'
import { MenuSectionHeader } from './MenuSectionHeader.js'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [storyFn => <Menu>{storyFn()}</Menu>],
}

export const Default = () => <MenuSectionHeader label="Section header" />

export const Dense = () => <MenuSectionHeader dense label="Section header" />

export const WithoutDivider = () => (
    <MenuSectionHeader hideDivider label="Section header" />
)
