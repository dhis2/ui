import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Input with initialFocus is rendered', () => {
    cy.visitStory('Input', 'With initial focus')
})

Then('the Input is focused', () => {
    cy.focused().parent('[data-test="dhis2-uicore-input"]').should('exist')
})
