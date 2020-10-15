import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlertBar } from './AlertBar.js'

window.onHidden = window.Cypress && window.Cypress.cy.stub()

storiesOf('AlertBar', module)
    .add('Default', () => <AlertBar>Default</AlertBar>)
    .add('Custom duration', () => (
        <AlertBar duration={2000}>Custom duration</AlertBar>
    ))
    .add('Permanent with actions', () => (
        <AlertBar
            permanent
            actions={[
                { label: 'Save', onClick: () => {} },
                { label: 'Cancel', onClick: () => {} },
            ]}
        >
            With Actions
        </AlertBar>
    ))
    .add('Disabled icon', () => <AlertBar icon={false}>Message</AlertBar>)
    .add('Custom icon', () => (
        <AlertBar icon={<span>Custom icon</span>}>Message</AlertBar>
    ))
    .add('With message', () => <AlertBar>With a message</AlertBar>)
    .add('With onHidden', () => (
        <AlertBar onHidden={window.onHidden}>Message</AlertBar>
    ))
    .add('Permanent', () => <AlertBar permanent>Message</AlertBar>)
