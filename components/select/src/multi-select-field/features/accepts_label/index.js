import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelectField with a label is rendered', () => {
    cy.visitStory('MultiSelectField', 'With label')
})

Then('the label is visible', () => {
    cy.contains('The label').should('be.visible')
})
