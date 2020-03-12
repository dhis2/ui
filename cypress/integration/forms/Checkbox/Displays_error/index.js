import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../src/validators/hasValue.js'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

Then('an error message is shown', () => {
    cy.get('.checkbox .error').should('contain', hasValueMessage)
})
