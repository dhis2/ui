import React from 'react'
import { Tab } from './tab.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Tab' }
export const WithOnClick = () => <Tab onClick={window.onClick}>Tab A</Tab>
export const WithChildren = () => <Tab>I am a child</Tab>
export const WithIcon = () => <Tab icon={<div>Icon</div>}>Children</Tab>
export const WithOnClickAndDisabled = () => (
    <Tab onClick={window.onClick} disabled>
        Tab A
    </Tab>
)
