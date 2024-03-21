import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a DropdownButton with initialFocus is rendered', () => {
    cy.visitStory('DropdownButton', 'With initialFocus')
})

Then('the DropdownButton is focused', () => {
    cy.focused()
        .parent('[data-test="dhis2-uicore-dropdownbutton"]')
        .should('exist')
})
