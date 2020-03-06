import { storiesOf } from '@storybook/react'
import React from 'react'
import { Switch } from './Switch.js'

window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Switch', module)
    .add('With onChange', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={window.onChange}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Switch
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onBlur={window.onBlur}
        />
    ))
    .add('With onFocus', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onFocus={window.onFocus}
        />
    ))
    .add('With disabled', () => (
        <Switch name="Ex" label="Switch" value="default" disabled />
    ))
    .add('With label', () => (
        <Switch name="Ex" label="The label" value="default" />
    ))
    .add('With initialFocus', () => (
        <Switch name="Ex" label="The label" value="default" initialFocus />
    ))
