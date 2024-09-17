import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Menu with children is rendered', () => {
    cy.visitStory('Menu', 'With children')
    cy.get('[data-test="dhis2-uicore-menulist"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
