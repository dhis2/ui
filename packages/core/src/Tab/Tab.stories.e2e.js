import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tab } from './Tab.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

storiesOf('Tab', module)
    .add('With onClick', () => <Tab onClick={window.onClick}>Tab A</Tab>)
    .add('With children', () => <Tab>I am a child</Tab>)
    .add('With icon', () => <Tab icon={<div>Icon</div>}>Children</Tab>)
    .add('With onClick and disabled', () => (
        <Tab onClick={window.onClick} disabled>
            Tab A
        </Tab>
    ))
