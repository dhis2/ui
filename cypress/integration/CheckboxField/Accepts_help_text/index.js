import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a CheckboxField with help text is rendered', () => {
    cy.visitStory('CheckboxField', 'With help text')
})

Then('the help text is visible', () => {
    cy.get('[data-test="dhis2-uicore-checkboxfield-help"]')
        .contains('Help text')
        .should('be.visible')
})
