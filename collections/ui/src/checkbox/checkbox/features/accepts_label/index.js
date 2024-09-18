import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Checkbox with a label is rendered', () => {
    cy.visitStory('Checkbox', 'With label')
})

Then('the label is shown', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]')
        .contains('The label')
        .should('be.visible')
})
