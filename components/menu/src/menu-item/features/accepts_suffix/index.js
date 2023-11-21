import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem supplied with a suffix is rendered', () => {
    cy.visitStory('MenuItem', 'With Suffix')
    cy.get('[data-test="dhis2-uicore-menuitem"]').should('be.visible')
})

Then('the suffix will be visible', () => {
    cy.contains('Suffix').should('be.visible')
})
