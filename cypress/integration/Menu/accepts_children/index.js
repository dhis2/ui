import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Menu with children is rendered', () => {
    cy.visitStory('Menu', 'With children')
    cy.get('[data-test="dhis2-uicore-menu"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
