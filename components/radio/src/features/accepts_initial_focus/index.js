import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Radio with initialFocus is rendered', () => {
    cy.visitStory('Radio', 'With initialFocus')
})

Then('the Radio is focused', () => {
    cy.focused().parent('[data-test="dhis2-uicore-radio"]').should('exist')
})
