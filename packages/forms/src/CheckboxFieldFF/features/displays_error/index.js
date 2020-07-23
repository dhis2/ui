import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../validators/hasValue.js'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('[data-test="dhis2-uiwidgets-checkboxfield-validation"]').should(
        'contain',
        hasValueMessage
    )
})
