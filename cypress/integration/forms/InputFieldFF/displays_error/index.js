import '../../common/submit.js'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../../packages/forms/src/validators/hasValue.js'

Given('an empty, required Input is rendered', () => {
    cy.visitStory('Testing:InputFieldFF', 'Required')
    cy.verifyFormValue('agree', undefined)
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', hasValueMessage)
})
