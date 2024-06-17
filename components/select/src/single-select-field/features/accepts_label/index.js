import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SingleSelectField with a label is rendered', () => {
    cy.visitStory('SingleSelectField', 'With label')
})

Then('the label is visible', () => {
    cy.contains('The label').should('be.visible')
})
