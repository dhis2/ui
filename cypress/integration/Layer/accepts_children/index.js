import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Layer with children is rendered', () => {
    cy.visitStory('Layer', 'Default')
})
Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
