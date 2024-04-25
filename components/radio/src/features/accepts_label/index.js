import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Radio with a label is rendered', () => {
    cy.visitStory('Radio', 'With label')
})

Then('the label is shown', () => {
    cy.get('[data-test="dhis2-uicore-radio"]')
        .contains('The label')
        .should('be.visible')
})
