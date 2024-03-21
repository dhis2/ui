require('../common/index.js')
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { hasValueMessage } from '../../../validators/hasValue.js'

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', hasValueMessage)
})
