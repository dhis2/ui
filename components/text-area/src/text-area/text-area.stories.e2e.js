import React from 'react'
import { TextArea } from './index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'TextArea' }
export const WithOnChange = () => (
    <TextArea onChange={window.onChange} name="textarea" />
)
export const WithInitialFocusAndOnBlur = () => (
    <TextArea initialFocus name="textarea" onBlur={window.onBlur} />
)
export const WithOnFocus = () => (
    <TextArea name="textarea" onFocus={window.onFocus} />
)
export const WithInitialFocus = () => <TextArea name="textarea" initialFocus />
export const WithDisabled = () => <TextArea name="textarea" disabled />
