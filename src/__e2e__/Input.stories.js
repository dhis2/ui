import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

storiesOf('Input', module)
    .add('With onChange', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onChange={window.onChange}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            initialFocus
            onBlur={window.onBlur}
        />
    ))
    .add('With onFocus', () => (
        <Input
            label="Default label"
            name="Default"
            value=""
            onFocus={window.onFocus}
        />
    ))
    .add('With initialFocus', () => (
        <Input label="Default label" name="Default" value="" initialFocus />
    ))
    .add('With disabled', () => (
        <Input label="Default label" name="Default" value="" disabled />
    ))
