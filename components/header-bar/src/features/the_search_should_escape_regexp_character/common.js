import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(/the search contains a (.*)/, character => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.get('#filter').type(character)
})
