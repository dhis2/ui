import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelectField with a label is rendered', () => {
    cy.visitStory('MultiSelectField', 'With label')
})

Then('the label is visible', () => {
    cy.contains('The label').should('be.visible')
})
