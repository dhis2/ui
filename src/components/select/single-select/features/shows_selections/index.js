import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SingleSelect with options and a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With options and a selection')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})
