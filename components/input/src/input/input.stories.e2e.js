import React from 'react'
import { Input } from './index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Input' }
export const WithOnChange = () => (
    <Input
        label="Default label"
        name="Default"
        value=""
        onChange={window.onChange}
    />
)
export const WithInitialFocusAndOnBlur = () => (
    <Input
        label="Default label"
        name="Default"
        value=""
        initialFocus
        onBlur={window.onBlur}
    />
)
export const WithOnFocus = () => (
    <Input
        label="Default label"
        name="Default"
        value=""
        onFocus={window.onFocus}
    />
)
export const WithInitialFocus = () => (
    <Input label="Default label" name="Default" value="" initialFocus />
)
export const WithDisabled = () => (
    <Input label="Default label" name="Default" value="" disabled />
)
