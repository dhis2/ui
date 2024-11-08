import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('a filterable MultiSelectField is rendered', () => {
    cy.visitStory('MultiSelectField', 'With filterable')
})

When('the Select is opened', () => {
    cy.get('[data-test="dhis2-uicore-select-input"]').click()
})

Then('the filter placeholder exists', () => {
    cy.get(
        '[data-test="dhis2-uicore-multiselect-filterinput"] [placeholder="Type to filter options"]'
    ).should('exist')
})
