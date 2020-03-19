import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Switch with initialFocus is rendered', () => {
    cy.visitStory('Switch', 'With initialFocus')
})

Then('the Switch is focused', () => {
    cy.focused()
        .parent('[data-test="dhis2-uicore-switch"]')
        .should('exist')
})
