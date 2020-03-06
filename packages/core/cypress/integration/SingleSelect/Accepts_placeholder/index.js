import '../common'
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

Then('the placeholder is not shown', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-placeholder"]').should(
        'not.be.visible'
    )
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})
