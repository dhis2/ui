import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from '../Backdrop.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

storiesOf('Backdrop', module)
    .add('With onClick', () => <Backdrop onClick={window.onClick} />)
    .add('With children', () => (
        <Backdrop>
            <span>I am a child</span>
        </Backdrop>
    ))
