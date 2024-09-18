import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a InputField with label and a required flag is rendered', () => {
    cy.visitStory('InputField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-inputfield-label-required"]').should(
        'be.visible'
    )
})
