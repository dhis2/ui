import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelectField with label and a required flag is rendered', () => {
    cy.visitStory('MultiSelectField', 'With label and required status')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-label-required"]').should('be.visible')
})
