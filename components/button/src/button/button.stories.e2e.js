import React from 'react'
import { Button } from './button.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Button' }

export const WithOnClick = () => (
    <Button name="Button" value="default" onClick={window.onClick}>
        Label me!
    </Button>
)
export const WithInitialFocusAndOnBlur = () => (
    <Button
        name="Button"
        value="default"
        initialFocus
        onBlur={window.onBlur}
    >
        Label me!
    </Button>
)
export const WithOnFocus = () => (
    <Button name="Button" value="default" onFocus={window.onFocus}>
        Label me!
    </Button>
)
