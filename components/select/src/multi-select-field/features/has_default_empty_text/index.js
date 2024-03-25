import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('an empty MultiSelectField is rendered', () => {
    cy.visitStory('MultiSelectField', 'Without options')
})

When('the Select is opened', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

Then('the empty text is visible', () => {
    cy.contains('No data found').should('be.visible')
})
