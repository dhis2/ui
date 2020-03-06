import React from 'react'
import { storiesOf } from '@storybook/react'
import Chip from './Chip.js'

window.onClick = window.Cypress.cy.stub()
window.onRemove = window.Cypress.cy.stub()

storiesOf('Chip', module)
    .add('Default', () => <Chip>Message</Chip>)
    .add('With onClick', () => <Chip onClick={window.onClick}>Chippy</Chip>)
    .add('With onRemove', () => (
        <Chip onRemove={window.onRemove}>Chipmunk</Chip>
    ))
    .add('With children', () => <Chip>I am a child</Chip>)
    .add('With icon', () => <Chip icon={<div>Icon</div>}>Message</Chip>)
