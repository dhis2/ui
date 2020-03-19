import '../../common/submit.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../../packages/forms/src/validators/hasValue.js'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Testing:SwitchControl', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

Then('an error message is shown', () => {
    cy.get('.switch .error').should('contain', hasValueMessage)
})
