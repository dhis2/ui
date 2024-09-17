import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Box with children is rendered', () => {
    cy.visitStory('Box', 'With children')
    cy.get('[data-test="dhis2-uicore-box"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
