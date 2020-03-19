import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user submits the form', () => {
    cy.get('button[type="submit"]').click()
})
