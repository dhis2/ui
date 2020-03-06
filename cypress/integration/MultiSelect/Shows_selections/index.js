import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with options and a selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and a selection')
})

Given('a MultiSelect with options and multiple selections is rendered', () => {
    cy.visitStory('MultiSelect', 'With options and multiple selections')
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})

Then('the selections are displayed', () => {
    cy.contains('option one').should('be.visible')
    cy.contains('option two').should('be.visible')
})
