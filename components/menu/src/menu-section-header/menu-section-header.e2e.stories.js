import React from 'react'
import { Menu } from '../index.ts'
import { MenuSectionHeader } from './index.ts'

export default {
    title: 'MenuSectionHeader',
    component: MenuSectionHeader,
    decorators: [(story) => <Menu>{story()}</Menu>],
}

export const WithLabel = () => <MenuSectionHeader label="label" />
