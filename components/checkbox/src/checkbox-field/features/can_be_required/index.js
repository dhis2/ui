import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a CheckboxField with label and a required flag is rendered', () => {
    cy.visitStory('CheckboxField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-checkboxfield-required"]').should(
        'be.visible'
    )
})
