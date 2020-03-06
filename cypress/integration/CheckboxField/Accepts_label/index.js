import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a CheckboxField with a label is rendered', () => {
    cy.visitStory('CheckboxField', 'With label')
})

Then('the label is visible', () => {
    cy.get('[data-test="dhis2-uicore-checkboxfield"]')
        .contains('The label')
        .should('be.visible')
})
