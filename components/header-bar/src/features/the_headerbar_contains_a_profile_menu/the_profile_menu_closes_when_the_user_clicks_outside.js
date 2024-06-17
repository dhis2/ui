import { When } from '@badeball/cypress-cucumber-preprocessor'

When('the user clicks outside of the menu', () => {
    cy.get('[data-test="headerbar-title"]').click()
})
