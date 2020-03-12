import '../common/index.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../src/validators/hasValue.js'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Testing:Switch', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

Then('an error message is shown', () => {
    cy.get('.switch .error').should('contain', hasValueMessage)
})
