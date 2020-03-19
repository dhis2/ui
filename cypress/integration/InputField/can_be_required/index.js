import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a InputField with label and a required flag is rendered', () => {
    cy.visitStory('InputField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-label-required"]').should('be.visible')
})
