import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a ComponentCover with children is rendered', () => {
    cy.visitStory('ComponentCover', 'With children')
    cy.get('[data-test="dhis2-uicore-componentcover"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
