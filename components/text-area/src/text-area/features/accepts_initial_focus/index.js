import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a TextArea with initialFocus is rendered', () => {
    cy.visitStory('TextArea', 'With initial focus')
})

Then('the TextArea is focused', () => {
    cy.focused().parent('[data-test="dhis2-uicore-textarea"]').should('exist')
})
