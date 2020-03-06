import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a TextArea with initialFocus is rendered', () => {
    cy.visitStory('TextArea', 'With initialFocus')
})

Then('the TextArea is focused', () => {
    cy.focused()
        .parent('[data-test="dhis2-uicore-textarea"]')
        .should('exist')
})
