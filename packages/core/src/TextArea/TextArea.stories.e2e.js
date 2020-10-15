import { storiesOf } from '@storybook/react'
import React from 'react'
import { TextArea } from './TextArea.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

storiesOf('TextArea', module)
    .add('With onChange', () => (
        <TextArea onChange={window.onChange} name="textarea" />
    ))
    .add('With initialFocus and onBlur', () => (
        <TextArea initialFocus name="textarea" onBlur={window.onBlur} />
    ))
    .add('With onFocus', () => (
        <TextArea name="textarea" onFocus={window.onFocus} />
    ))
    .add('With initialFocus', () => <TextArea name="textarea" initialFocus />)
    .add('With disabled', () => <TextArea name="textarea" disabled />)
