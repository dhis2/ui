import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Input with initialFocus is rendered', () => {
    cy.visitStory('Input', 'With initialFocus')
})

Then('the Input is focused', () => {
    cy.focused()
        .parent('[data-test="dhis2-uicore-input"]')
        .should('exist')
})
