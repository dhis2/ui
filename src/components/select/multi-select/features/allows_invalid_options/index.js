import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MultiSelect with invalid options is rendered', () => {
    cy.visitStory('MultiSelect', 'With invalid options')
})

Given('a MultiSelect with invalid filterable options is rendered', () => {
    cy.visitStory('MultiSelect', 'With invalid filterable options')
})

When('the user enters a filter string', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-filterinput"] input').type(
        'invalid'
    )
})

Then('the invalid options are displayed', () => {
    cy.contains('invalid one').should('be.visible')
    cy.contains('invalid two').should('be.visible')
    cy.contains('invalid three').should('be.visible')
})

Then('the invalid options are not rendered', () => {
    cy.contains('invalid one').should('not.exist')
    cy.contains('invalid two').should('not.exist')
    cy.contains('invalid three').should('not.exist')
})
