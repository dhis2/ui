import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a CheckboxField with label and a required flag is rendered', () => {
    cy.visitStory('CheckboxField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-checkboxfield-required"]').should(
        'be.visible'
    )
})
