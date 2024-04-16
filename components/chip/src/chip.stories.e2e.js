import React from 'react'
import { Chip } from './chip.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()
window.onRemove = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Chip' }
export const Default = () => <Chip>Message</Chip>
export const WithOnClick = () => <Chip onClick={window.onClick}>Chippy</Chip>
  export const WithOnRemove = () => (
    <Chip onRemove={window.onRemove}>Chipmunk</Chip>
)
export const WithChildren = () => <Chip>I am a child</Chip>
export const WithIcon = () => <Chip icon={<div>Icon</div>}>Message</Chip>
