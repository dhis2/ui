import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('a loading MultiSelectField is rendered', () => {
    cy.visitStory('MultiSelectField', 'With loading')
})

When('the Select is opened', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

Then('the loading text is visible', () => {
    cy.contains('Loading options').should('be.visible')
})
