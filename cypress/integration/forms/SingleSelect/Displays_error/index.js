import '../common/index.js'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { hasValueMessage } from '../../../../src/validators/hasValue.js'

Then('an error message is shown', () => {
    cy.get('.error').should('contain', hasValueMessage)
})
