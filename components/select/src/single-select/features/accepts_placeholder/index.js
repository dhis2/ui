import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SingleSelect with a placeholder and no selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With placeholder')
})

Given('a SingleSelect with a placeholder and a selection is rendered', () => {
    cy.visitStory('SingleSelect', 'With placeholder and selection')
})

Then('the placeholder is shown', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-placeholder"]')
        .contains('Placeholder text')
        .should('be.visible')
})

Then('the placeholder is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-placeholder"]').should(
        'not.exist'
    )
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})
