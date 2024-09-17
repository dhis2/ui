import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FieldGroup with label and a required flag is rendered', () => {
    cy.visitStory('FieldGroup', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uicore-field-label-required"]').should(
        'be.visible'
    )
})
