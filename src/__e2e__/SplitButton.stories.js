import React from 'react'
import { storiesOf } from '@storybook/react'
import { SplitButton } from '../index.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('SplitButton', module)
    .add('Default', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
        >
            Label me!
        </SplitButton>
    ))
    .add('With onClick', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
            onClick={window.onClick}
        >
            Label me!
        </SplitButton>
    ))
    .add('With children', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
        >
            I am a child
        </SplitButton>
    ))
    .add('With icon', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
            icon={<div>Icon</div>}
        >
            Children
        </SplitButton>
    ))
    .add('With initialFocus', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
            initialFocus
        >
            Children
        </SplitButton>
    ))
    .add('With disabled', () => (
        <SplitButton
            name="Button"
            value="default"
            component={<div>Component</div>}
            disabled
        >
            Children
        </SplitButton>
    ))
