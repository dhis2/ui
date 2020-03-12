import { storiesOf } from '@storybook/react'
import React from 'react'
import { Checkbox } from '../index.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()
window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

storiesOf('Checkbox', module)
    .add('With onChange', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={window.onChange}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Checkbox
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onBlur={window.onBlur}
        />
    ))
    .add('With onFocus', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onFocus={window.onFocus}
        />
    ))
    .add('Disabled with onClick', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            disabled
            onClick={window.onClick}
        />
    ))
    .add('With label', () => (
        <Checkbox name="Ex" label="The label" value="default" />
    ))
    .add('With initialFocus', () => (
        <Checkbox name="Ex" label="The label" value="default" initialFocus />
    ))
    .add('Indeterminate prop', () => (
        <Checkbox name="Ex" label="The label" value="default" indeterminate />
    ))
    .add('No indeterminate prop', () => (
        <Checkbox name="Ex" label="The label" value="default" />
    ))
