import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Help component with children is rendered', () => {
    cy.visitStory('Help', 'With children')
    cy.get('[data-test="dhis2-uicore-help"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
