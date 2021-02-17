import React from 'react'
import { Menu } from '../Menu/Menu.js'
import { MenuItem } from './MenuItem.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

export default {
    title: 'MenuItem',
    component: MenuItem,
    decorators: [story => <Menu>{story()}</Menu>],
}

export const WithLabel = () => <MenuItem label="label" />

export const WithOnClickAndValue = () => (
    <MenuItem value="Value" onClick={window.onClick} label="Menu item" />
)

export const WithHref = () => <MenuItem href="url.test" label="Menu item" />

export const WithTarget = () => (
    <MenuItem href="url.test" target="_blank" label="Menu item" />
)

export const WithIcon = () => (
    <MenuItem icon={<div>Icon</div>} label="Menu item" />
)
