import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('an empty SingleSelectField is rendered', () => {
    cy.visitStory('SingleSelectField', 'Without options')
})

When('the Select is opened', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

Then('the empty text is visible', () => {
    cy.contains('No data found').should('be.visible')
})
