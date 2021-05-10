import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a clearable SingleSelectField with selected option is rendered', () => {
    cy.visitStory('SingleSelectField', 'With clearable and selected option')
})

Then('the clear text is visible', () => {
    cy.contains('Clear').should('be.visible')
})
