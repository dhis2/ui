import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a closed Node with children is rendered', () => {
    cy.visitStory('Node', 'Closed with children')
    cy.get('[data-test="dhis2-uicore-node"]').should('be.visible')
})

Given('an open Node with children is rendered', () => {
    cy.visitStory('Node', 'Open with children')
    cy.get('[data-test="dhis2-uicore-node"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.get('[data-test="dhis2-uicore-node-leaves"]')
        .contains('I am a child')
        .should('be.visible')
})

Then('the children are not visible', () => {
    cy.get('[data-test="dhis2-uicore-node-leaves"]')
        .contains('I am a child')
        .should('not.be.visible')
})
