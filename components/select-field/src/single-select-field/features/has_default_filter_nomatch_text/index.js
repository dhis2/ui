import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('a filterable SingleSelectField is rendered', () => {
    cy.visitStory('SingleSelectField', 'With filterable')
})

When('the Select is opened', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

When('a filter that does not match any options is entered', () => {
    cy.focused().type('Two')
})

Then('the no match text is visible', () => {
    cy.contains('No options found').should('be.visible')
})
