import { Given } from '@badeball/cypress-cucumber-preprocessor'
require('../common/index.js')

Given(/the search contains a (.*)/, (character) => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
    cy.get('#filter').type(character)
})
