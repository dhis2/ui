import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a CheckboxField with help text is rendered', () => {
    cy.visitStory('CheckboxField', 'With help text')
})

Then('the help text is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-checkboxfield-help"]')
        .contains('Help text')
        .should('be.visible')
})
