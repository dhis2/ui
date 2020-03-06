import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../index.js'

window.onClick = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Button', module)
    .add('With onClick', () => (
        <Button name="Button" value="default" onClick={window.onClick}>
            Label me!
        </Button>
    ))
    .add('With initialFocus and onBlur', () => (
        <Button
            name="Button"
            value="default"
            initialFocus
            onBlur={window.onBlur}
        >
            Label me!
        </Button>
    ))
    .add('With onFocus', () => (
        <Button name="Button" value="default" onFocus={window.onFocus}>
            Label me!
        </Button>
    ))
