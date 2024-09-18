import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a SwitchField with label and a required flag is rendered', () => {
    cy.visitStory('SwitchField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-switchfield-required"]').should(
        'be.visible'
    )
})
