import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Chip with children is rendered', () => {
    cy.visitStory('Chip', 'With children')
    cy.get('[data-test="dhis2-uicore-chip"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
