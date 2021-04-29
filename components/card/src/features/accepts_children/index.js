import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Card with children is rendered', () => {
    cy.visitStory('Card', 'With children')
    cy.get('[data-test="dhis2-uicore-card"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
