import '../../common/submit.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../../packages/forms/src/validators/hasValue.js'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

Then('an error message is shown', () => {
    cy.get('[data-test="dhis2-uicore-field-label-validation"]').should(
        'contain',
        hasValueMessage
    )
})
