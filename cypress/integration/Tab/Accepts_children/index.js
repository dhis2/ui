import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tab with children is rendered', () => {
    cy.visitStory('Tab', 'With children')
    cy.get('[data-test="dhis2-uicore-tab"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.get('[data-test="dhis2-uicore-tab"]')
        .contains('I am a child')
        .should('be.visible')
})
