import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Node with component prop is rendered', () => {
    cy.visitStory('Node', 'With component')
    cy.get('[data-test="dhis2-uicore-node"]').should('be.visible')
})

Then('the component is visible', () => {
    cy.get('[data-test="dhis2-uicore-node-label"]')
        .contains('I am a component')
        .should('be.visible')
})
