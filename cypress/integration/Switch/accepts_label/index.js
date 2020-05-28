import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Switch with a label is rendered', () => {
    cy.visitStory('Switch', 'With label')
})

Then('the label is shown', () => {
    cy.get('[data-test="dhis2-uicore-switch"]')
        .contains('The label')
        .should('be.visible')
})
