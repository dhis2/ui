import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Label with children is rendered', () => {
    cy.visitStory('Label', 'With children')
    cy.get('[data-test="dhis2-uicore-label"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
