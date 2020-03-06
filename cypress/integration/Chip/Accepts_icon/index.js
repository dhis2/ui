import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default Chip is rendered', () => {
    cy.visitStory('Chip', 'Default')
    cy.get('[data-test="dhis2-uicore-chip"]').should('be.visible')
})

Given('a Chip supplied with an icon is rendered', () => {
    cy.visitStory('Chip', 'With icon')
    cy.get('[data-test="dhis2-uicore-chip"]').should('be.visible')
})

Then('the icon will not be visible', () => {
    cy.get('[data-test="dhis2-uicore-chip-icon"]').should('not.be.visible')
})

Then('the icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-chip-icon"]')
        .contains('Icon')
        .should('be.visible')
})
