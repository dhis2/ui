import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a filterable SingleSelect with options is rendered', () => {
    cy.visitStory('SingleSelect', 'With filter field')
})

When('the user enters a filter string', () => {
    cy.focused().type('one')
})

When("the user enters a filter string that doesn't match any options", () => {
    cy.focused().type('does not exist')
})

Then('the matching options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('not.be.visible')
    cy.contains('option three').should('not.be.visible')
})

Then('the no match text is displayed', () => {
    cy.contains('No match found').should('be.visible')
})
