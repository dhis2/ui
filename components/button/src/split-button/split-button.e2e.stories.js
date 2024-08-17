import React from 'react'
import { SplitButton } from './split-button.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

export default { title: 'SplitButton' }
export const Default = () => (
    <SplitButton name="Button" value="default" component={<div>Component</div>}>
        Label me!
    </SplitButton>
)
export const WithOnClick = () => (
    <SplitButton
        name="Button"
        value="default"
        component={<div>Component</div>}
        onClick={window.onClick}
    >
        Label me!
    </SplitButton>
)
export const WithChildren = () => (
    <SplitButton name="Button" value="default" component={<div>Component</div>}>
        I am a child
    </SplitButton>
)
export const WithIcon = () => (
    <SplitButton
        name="Button"
        value="default"
        component={<div>Component</div>}
        icon={<div>Icon</div>}
    >
        Children
    </SplitButton>
)
export const WithInitialFocus = () => (
    <SplitButton
        name="Button"
        value="default"
        component={<div>Component</div>}
        initialFocus
    >
        Children
    </SplitButton>
)
export const WithDisabled = () => (
    <SplitButton
        name="Button"
        value="default"
        component={<div>Component</div>}
        disabled
    >
        Children
    </SplitButton>
)
