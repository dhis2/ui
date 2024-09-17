import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Box with multiple props is rendered', () => {
    cy.visitStory('Box', 'Multiple')
    cy.get('[data-test="dhis2-uicore-box"]').should('be.visible')
})

Then('the styles are all applied', () => {
    cy.get('[data-test="dhis2-uicore-box"]')
        .should('have.css', 'margin-top', '16px')
        .should('have.css', 'max-width', '400px')
})
