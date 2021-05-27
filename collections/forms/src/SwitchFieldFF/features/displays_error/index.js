import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../validators/hasValue.js'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Testing:SwitchFieldFF', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('[data-test="dhis2-uiwidgets-switchfield-validation"]').should(
        'contain',
        hasValueMessage
    )
})
