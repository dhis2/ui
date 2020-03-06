import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Constrictor with children is rendered', () => {
    cy.visitStory('Constrictor', 'With children')
    cy.get('[data-test="dhis2-uicore-constrictor"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
