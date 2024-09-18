import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Legend with children is rendered', () => {
    cy.visitStory('Legend', 'With children')
    cy.get('[data-test="dhis2-uicore-legend"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
