import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a CheckboxField with validation text is rendered', () => {
    cy.visitStory('CheckboxField', 'With validation text')
})

Then('the validation text is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-checkboxfield-validation"]')
        .contains('Validation text')
        .should('be.visible')
})
