import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a ButtonStrip with children is rendered', () => {
    cy.visitStory('ButtonStrip', 'With children')
    cy.get('[data-test="dhis2-uicore-buttonstrip"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
