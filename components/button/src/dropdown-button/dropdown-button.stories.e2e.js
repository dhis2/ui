import React from 'react'
import { DropdownButton } from './index.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

export default { title: 'DropdownButton' }

export const Default = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>Content</div>}
    >
        Button
    </DropdownButton>
)
export const WithOnClick = () => (
    <DropdownButton
        name="Button"
        value="default"
        onClick={window.onClick}
        component={<div>Content</div>}
    >
        Button
    </DropdownButton>
)
export const WithChildren = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>Component</div>}
    >
        I am a child
    </DropdownButton>
)
export const WithComponent = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>I am a component</div>}
    />
)
export const WithIcon = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>I am a component</div>}
        icon={'Icon'}
    />
)
export const WithInitialFocus = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>Content</div>}
        initialFocus
    />
)
export const DisabledWithOnClick = () => (
    <DropdownButton
        name="Button"
        value="default"
        component={<div>Content</div>}
        onClick={window.onClick}
        disabled
    />
)
