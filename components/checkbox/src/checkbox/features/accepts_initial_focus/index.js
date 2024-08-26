import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Checkbox with initialFocus is rendered', () => {
    cy.visitStory('Checkbox', 'With initial focus')
})

Then('the Checkbox is focused', () => {
    cy.focused().parent('[data-test="dhis2-uicore-checkbox"]').should('exist')
})
