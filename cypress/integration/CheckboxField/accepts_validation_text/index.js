import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a CheckboxField with validation text is rendered', () => {
    cy.visitStory('CheckboxField', 'With validation text')
})

Then('the validation text is visible', () => {
    cy.get('[data-test="dhis2-uicore-checkboxfield-validation"]')
        .contains('Validation text')
        .should('be.visible')
})
