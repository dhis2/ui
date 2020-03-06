import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with a prefix and no selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With prefix')
})

Given('a SingleSelect with a prefix and a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With prefix and selection')
})

Then('the prefix is shown', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-prefix"]')
        .contains('Prefix text')
        .should('be.visible')
})

Then('the selection is shown', () => {
    cy.contains('option one').should('be.visible')
})
