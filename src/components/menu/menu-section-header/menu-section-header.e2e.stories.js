import React from 'react'
import { Menu } from '../index.js'
import { MenuSectionHeader } from './index.js'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [(story) => <Menu>{story()}</Menu>],
}

export const WithLabel = () => <MenuSectionHeader label="label" />
