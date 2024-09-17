import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a TextAreaField with label and a required flag is rendered', () => {
    cy.visitStory('TextAreaField', 'With label and required')
})

Then('the required indicator is visible', () => {
    cy.get('[data-test="dhis2-uiwidgets-textareafield-label-required"]').should(
        'be.visible'
    )
})
