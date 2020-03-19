import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SwitchField with label and a required flag is rendered', () => {
    cy.visitStory('SwitchField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-switchfield-required"]').should(
        'be.visible'
    )
})
