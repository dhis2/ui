import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { hasValueMessage } from '../../../validators/hasValue.js'

Given('an empty, required Input is rendered', () => {
    cy.visitStory('Testing:InputFieldFF', 'Required')
    cy.verifyFormValue('agree', undefined)
})

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', hasValueMessage)
})
