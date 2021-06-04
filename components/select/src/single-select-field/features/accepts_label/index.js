import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelectField with a label is rendered', () => {
    cy.visitStory('SingleSelectField', 'With label')
})

Then('the label is visible', () => {
    cy.contains('The label').should('be.visible')
})
