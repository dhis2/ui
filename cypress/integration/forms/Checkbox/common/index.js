import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user clicks on the Checkbox', () => {
    cy.get('.checkbox label').click()
})
