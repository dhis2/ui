require('../common/index.js')
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('an empty SingleSelect is rendered', () => {
    cy.visitStory('SingleSelect', 'Empty')
})

Given('an empty SingleSelect with custom empty text is rendered', () => {
    cy.visitStory('SingleSelect', 'Empty with empty text')
})

Given('an empty SingleSelect with custom empty component is rendered', () => {
    cy.visitStory('SingleSelect', 'Empty with empty component')
})

Then('an empty menu is displayed', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').should('exist')
})

Then('the custom empty text is displayed', () => {
    cy.get('[data-test="dhis2-uicore-singleselect-empty"]')
        .contains('Custom empty text')
        .should('be.visible')
})

Then('the custom empty component is displayed', () => {
    cy.contains('Custom empty component').should('be.visible')
    cy.get('.custom-empty').should('exist')
})
