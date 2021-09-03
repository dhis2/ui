import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a clearable MultiSelectField with selected option is rendered', () => {
    cy.visitStory('MultiSelectField', 'With clearable and selected option')
})

Then('the clear text is visible', () => {
    cy.contains('Clear').should('be.visible')
})
