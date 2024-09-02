import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SingleSelectField with help text is rendered', () => {
    cy.visitStory('SingleSelectField', 'With help text')
})

Then('the help text is visible', () => {
    cy.contains('The help text').should('be.visible')
})
