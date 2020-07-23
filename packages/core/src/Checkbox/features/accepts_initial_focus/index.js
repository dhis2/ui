import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox with initialFocus is rendered', () => {
    cy.visitStory('Checkbox', 'With initialFocus')
})

Then('the Checkbox is focused', () => {
    cy.focused()
        .parent('[data-test="dhis2-uicore-checkbox"]')
        .should('exist')
})
