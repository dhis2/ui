import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../src/validators/hasValue.js'

Given('an empty, required Input is rendered', () => {
    cy.visitStory('Testing:Input', 'Required')
    cy.verifyFormValue('agree', undefined)
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', hasValueMessage)
})
