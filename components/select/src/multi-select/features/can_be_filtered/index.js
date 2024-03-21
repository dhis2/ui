require('../common/index.js')
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a filterable MultiSelect with options is rendered', () => {
    cy.visitStory('MultiSelect', 'With filter field')
})

When('the user enters a filter string', () => {
    cy.focused().type('one')
})

When("the user enters a filter string that doesn't match any options", () => {
    cy.focused().type('does not exist')
})

Then('the matching options are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Then('the no match text is displayed', () => {
    cy.contains('No match found').should('be.visible')
})
