import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Radio with a label is rendered', () => {
    cy.visitStory('Radio', 'With label')
})

Then('the label is shown', () => {
    cy.get('[data-test="dhis2-uicore-radio"]')
        .contains('The label')
        .should('be.visible')
})
