import { storiesOf } from '@storybook/react'
import React from 'react'
import { MenuItem } from '../index.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

storiesOf('MenuItem', module)
    .add('With onClick and value', () => (
        <MenuItem label="Menu item" value="Value" onClick={window.onClick} />
    ))
    .add('With href', () => <MenuItem label="Menu item" href="url.test" />)
    .add('With target', () => (
        <MenuItem label="Menu item" href="url.test" target="_blank" />
    ))
    .add('With icon', () => (
        <MenuItem label="Menu item" icon={<div>Icon</div>} />
    ))
    .add('With label', () => <MenuItem label="Label" />)
