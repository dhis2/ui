import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a CheckboxField with a label is rendered', () => {
    cy.visitStory('CheckboxField', 'With label')
})

Then('the label is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-checkboxfield"]')
        .contains('The label')
        .should('be.visible')
})
