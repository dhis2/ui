import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SingleSelectField with label and a required flag is rendered', () => {
    cy.visitStory('SingleSelectField', 'With label and required status')
})

Then('the required indicator is visible', () => {
    cy.get(
        '[data-test="dhis2-uiwidgets-singleselectfield-label-required"]'
    ).should('be.visible')
})
