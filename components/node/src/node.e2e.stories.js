import React from 'react'
import { Node } from './node.js'

window.onClose = window.Cypress && window.Cypress.cy.stub()
window.onOpen = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Node' }
export const OpenWithOnClose = () => (
    <Node open onClose={window.onClose} component={<div>Component</div>}>
        Children
    </Node>
)
export const ClosedWithOnOpen = () => (
    <Node onOpen={window.onOpen} component={<div>Component</div>}>
        Children
    </Node>
)
export const ClosedWithChildren = () => (
    <Node component={<div>Component</div>}>I am a child</Node>
)
export const OpenWithChildren = () => (
    <Node open component={<div>Component</div>}>
        I am a child
    </Node>
)
export const WithComponent = () => (
    <Node component={<div>I am a component</div>}>Children</Node>
)
export const WithIcon = () => (
    <Node component={<div>Component</div>} icon={<div>Icon</div>}>
        Children
    </Node>
)
