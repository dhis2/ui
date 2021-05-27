import '../common/index.js'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../validators/hasValue.js'

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('[data-test="dhis2-uicore-field-validation"]').should(
        'contain',
        hasValueMessage
    )
})
