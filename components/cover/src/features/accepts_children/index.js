import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Cover with children is rendered', () => {
    cy.visitStory('Cover', 'With Children')
    cy.get('[data-test="dhis2-uicore-componentcover"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
