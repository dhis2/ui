import React from 'react'
import { Checkbox } from './index.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()
window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Checkbox' }
export const WithOnChange = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        value="default"
        onChange={window.onChange}
    />
)
export const WithInitialFocusAndOnBlur = () => (
    <Checkbox
        initialFocus
        name="Ex"
        label="Checkbox"
        value="default"
        onBlur={window.onBlur}
    />
)
export const WithOnFocus = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        value="default"
        onFocus={window.onFocus}
    />
)
export const DisabledWithOnClick = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        value="default"
        disabled
        onClick={window.onClick}
    />
)
export const WithLabel = () => (
    <Checkbox name="Ex" label="The label" value="default" />
)
export const WithInitialFocus = () => (
    <Checkbox name="Ex" label="The label" value="default" initialFocus />
)
export const IndeterminateProp = () => (
    <Checkbox name="Ex" label="The label" value="default" indeterminate />
)
export const NoIndeterminateProp = () => (
    <Checkbox name="Ex" label="The label" value="default" />
)
