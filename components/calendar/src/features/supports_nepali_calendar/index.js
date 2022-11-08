import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('A Calendar with nepali as a type', () => {
    cy.visitStory('Calendar', 'With Nepali')
    cy.get('[data-test="dhis2-uicore-card"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
