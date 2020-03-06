import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton } from './DropdownButton.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('DropdownButton', module)
    .add('Default', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>Content</div>}
        >
            Button
        </DropdownButton>
    ))
    .add('With onClick', () => (
        <DropdownButton
            name="Button"
            value="default"
            onClick={window.onClick}
            component={<div>Content</div>}
        >
            Button
        </DropdownButton>
    ))
    .add('With children', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>Component</div>}
        >
            I am a child
        </DropdownButton>
    ))
    .add('With component', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>I am a component</div>}
        />
    ))
    .add('With icon', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>I am a component</div>}
            icon={'Icon'}
        />
    ))
    .add('With initialFocus', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>Content</div>}
            initialFocus
        />
    ))
    .add('Disabled with onClick', () => (
        <DropdownButton
            name="Button"
            value="default"
            component={<div>Content</div>}
            onClick={window.onClick}
            disabled
        />
    ))
