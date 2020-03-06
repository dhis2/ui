import React from 'react'
import { storiesOf } from '@storybook/react'
import { Node } from '../index.js'

window.onClose = window.Cypress.cy.stub()
window.onOpen = window.Cypress.cy.stub()

storiesOf('Node', module)
    .add('Open with onClose', () => (
        <Node open onClose={window.onClose} component={<div>Component</div>}>
            Children
        </Node>
    ))
    .add('Closed with onOpen', () => (
        <Node onOpen={window.onOpen} component={<div>Component</div>}>
            Children
        </Node>
    ))
    .add('Closed with children', () => (
        <Node component={<div>Component</div>}>I am a child</Node>
    ))
    .add('Open with children', () => (
        <Node open component={<div>Component</div>}>
            I am a child
        </Node>
    ))
    .add('With component', () => (
        <Node component={<div>I am a component</div>}>Children</Node>
    ))
    .add('With icon', () => (
        <Node component={<div>Component</div>} icon={<div>Icon</div>}>
            Children
        </Node>
    ))
