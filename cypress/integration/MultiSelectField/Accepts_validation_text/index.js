import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelectField with validation text is rendered', () => {
    cy.visitStory('MultiSelectField', 'With validation text')
})

Then('the validation text is visible', () => {
    cy.contains('The validation text').should('be.visible')
})
