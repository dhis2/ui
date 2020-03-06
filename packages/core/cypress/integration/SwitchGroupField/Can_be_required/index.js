import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SwitchGroupField with label and a required flag is rendered', () => {
    cy.visitStory('SwitchGroupField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-legend-required"]').should('be.visible')
})
