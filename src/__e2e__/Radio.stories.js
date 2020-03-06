import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio } from '../index.js'

window.onChange = window.Cypress.cy.stub()
window.onBlur = window.Cypress.cy.stub()
window.onFocus = window.Cypress.cy.stub()

storiesOf('Radio', module)
    .add('With onChange', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            onChange={window.onChange}
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            initialFocus
            onBlur={window.onBlur}
        />
    ))
    .add('With onFocus', () => (
        <Radio
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onFocus={window.onFocus}
        />
    ))
    .add('With disabled', () => (
        <Radio name="Ex" label="Radio" value="default" disabled />
    ))
    .add('With label', () => (
        <Radio name="Ex" label="The label" value="default" />
    ))
    .add('With initialFocus', () => (
        <Radio name="Ex" label="The label" value="default" initialFocus />
    ))
