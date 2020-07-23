import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Tab with an icon is rendered', () => {
    cy.visitStory('Tab', 'With icon')
    cy.get('[data-test="dhis2-uicore-tab"]').should('be.visible')
})

Then('the icon is visible', () => {
    cy.get('[data-test="dhis2-uicore-tab"]')
        .contains('Icon')
        .should('be.visible')
})
