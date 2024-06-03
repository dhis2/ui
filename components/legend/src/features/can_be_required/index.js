import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Legend with content and a required flag is rendered', () => {
    cy.visitStory('Legend', 'With content and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-legend-required"]').should('be.visible')
})
