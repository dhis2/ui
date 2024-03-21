import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelectField with help text is rendered', () => {
    cy.visitStory('MultiSelectField', 'With help text')
})

Then('the help text is visible', () => {
    cy.contains('The help text').should('be.visible')
})
