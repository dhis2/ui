import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an empty MultiSelect is rendered', () => {
    cy.visitStory('MultiSelect', 'Empty')
})

Given('an empty MultiSelect with custom empty text is rendered', () => {
    cy.visitStory('MultiSelect', 'Empty with empty text')
})

Given('an empty MultiSelect with custom empty component is rendered', () => {
    cy.visitStory('MultiSelect', 'Empty with empty component')
})

Then('an empty menu is displayed', () => {
    cy.get('[data-test="dhis2-uicore-backdrop"]').should('exist')
})

Then('the custom empty text is displayed', () => {
    cy.get('[data-test="dhis2-uicore-multiselect-empty"]')
        .contains('Custom empty text')
        .should('be.visible')
})

Then('the custom empty component is displayed', () => {
    cy.contains('Custom empty component').should('be.visible')
    cy.get('.custom-empty').should('exist')
})
