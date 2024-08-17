import React from 'react'
import { Radio } from './radio.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Radio' }
export const WithOnChange = () => (
    <Radio name="Ex" label="Radio" value="default" onChange={window.onChange} />
)
export const WithInitialFocusAndOnBlur = () => (
    <Radio
        name="Ex"
        label="Radio"
        value="default"
        initialFocus
        onBlur={window.onBlur}
    />
)
export const WithOnFocus = () => (
    <Radio
        initialFocus
        name="Ex"
        label="Radio"
        value="default"
        onFocus={window.onFocus}
    />
)
export const WithDisabled = () => (
    <Radio name="Ex" label="Radio" value="default" disabled />
)
export const WithLabel = () => (
    <Radio name="Ex" label="The label" value="default" />
)
export const WithInitialFocus = () => (
    <Radio name="Ex" label="The label" value="default" initialFocus />
)
