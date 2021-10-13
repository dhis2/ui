import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Modal contains a tooltip', () => {
    cy.visitStory('Tooltip', 'Modal With Tooltip')
})

Then('the Tooltip is fully visible', () => {
    cy.get('[data-test="dhis2-uicore-popper"]').should('be.visible')
})
