import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FileInputField with label and a required flag is rendered', () => {
    cy.visitStory('FileInputField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-label-required"]').should('be.visible')
})
