import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Node with icon prop is rendered', () => {
    cy.visitStory('Node', 'With icon')
    cy.get('[data-test="dhis2-uicore-node"]').should('be.visible')
})

Then('the icon is visible', () => {
    cy.get('[data-test="dhis2-uicore-node-icon"]')
        .contains('Icon')
        .should('be.visible')
})
