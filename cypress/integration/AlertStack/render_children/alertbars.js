import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertStack with multiple AlertBars is rendered', () => {
    cy.visitStory('Alertstack', 'Default')
    cy.get('[data-test="dhis2-uicore-alertstack"]').should('be.visible')
})

Then('the AlertBars will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('have.length', 3)
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})
