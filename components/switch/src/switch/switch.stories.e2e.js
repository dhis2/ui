import React from 'react'
import { Switch } from './index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Switch' }
export const WithOnChange = () => (
    <Switch
        name="Ex"
        label="Switch"
        value="default"
        onChange={window.onChange}
    />
)
export const WithInitialFocusAndOnBlur = () => (
    <Switch
        initialFocus
        name="Ex"
        label="Switch"
        value="default"
        onBlur={window.onBlur}
    />
)
export const WithOnFocus = () => (
    <Switch
        name="Ex"
        label="Switch"
        value="default"
        onFocus={window.onFocus}
    />
)
export const WithDisabled = () => (
    <Switch name="Ex" label="Switch" value="default" disabled />
)
export const WithLabel = () => (
    <Switch name="Ex" label="The label" value="default" />
)
export const WithInitialFocus = () => (
    <Switch name="Ex" label="The label" value="default" initialFocus />
)
