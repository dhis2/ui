import '../common'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options is rendered', () => {
    cy.visitStory('MultiSelect', 'With options')
})

Given('the MultiSelect is closed', () => {
    cy.contains('option one').should('not.exist')
    cy.contains('option two').should('not.exist')
    cy.contains('option three').should('not.exist')
})

Given('the MultiSelect is focused', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').focus()
    cy.focused().should('have.attr', 'data-test', 'dhis2-uicore-select-input')
})

When('the down arrowkey is pressed on the focused element', () => {
    cy.focused().type('{downarrow}')
})

When('the spacebar is pressed on the focused element', () => {
    cy.focused().type(' ')
})

When('the up arrowkey is pressed on the focused element', () => {
    cy.focused().type('{uparrow}')
})

When('the escape key is pressed on the focused element', () => {
    cy.focused().type('{esc}')
})
