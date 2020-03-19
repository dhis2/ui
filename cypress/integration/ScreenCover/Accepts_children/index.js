import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a ScreenCover with children is rendered', () => {
    cy.visitStory('ScreenCover', 'With children')
    cy.get('[data-test="dhis2-uicore-screencover"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
