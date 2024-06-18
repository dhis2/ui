import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Switch with initialFocus is rendered', () => {
    cy.visitStory('Switch', 'With initial focus')
})

Then('the Switch is focused', () => {
    cy.focused().parent('[data-test="dhis2-uicore-switch"]').should('exist')
})
