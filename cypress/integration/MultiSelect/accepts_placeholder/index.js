import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with a placeholder and no selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With placeholder')
})

Given('a MultiSelect with a placeholder and a selection is rendered', () => {
    cy.visitStory('MultiSelect', 'With placeholder and selection')
})

Then('the placeholder is shown', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-placeholder"]')
        .contains('Placeholder text')
        .should('be.visible')
})

Then('the placeholder is not shown', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-placeholder"]').should(
        'not.be.visible'
    )
})

Then('the selection is displayed', () => {
    cy.contains('option one').should('be.visible')
})
