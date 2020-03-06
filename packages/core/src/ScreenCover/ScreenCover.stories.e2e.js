import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScreenCover } from './ScreenCover.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('ScreenCover', module)
    .add('With onClick', () => <ScreenCover onClick={window.onClick} />)
    .add('With children', () => <ScreenCover>I am a child</ScreenCover>)
