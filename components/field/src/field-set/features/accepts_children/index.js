import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FieldSet with children is rendered', () => {
    cy.visitStory('FieldSet', 'With children')
    cy.get('[data-test="dhis2-uicore-fieldset"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
