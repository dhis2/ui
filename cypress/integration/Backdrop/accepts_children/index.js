import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Backdrop with children is rendered', () => {
    cy.visitStory('Backdrop', 'With children')
    cy.get('[data-test="dhis2-uicore-backdrop"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
