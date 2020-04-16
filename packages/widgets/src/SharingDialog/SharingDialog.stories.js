import React from 'react'
import { storiesOf } from '@storybook/react'

import { SharingDialog } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

storiesOf('Component/Widget/SharingDialog', module)
    .add('Simple', () => (
        <SharingDialog />
    ))
    .add('With name', () => (
        <SharingDialog name="Malaria cases" />
    ))