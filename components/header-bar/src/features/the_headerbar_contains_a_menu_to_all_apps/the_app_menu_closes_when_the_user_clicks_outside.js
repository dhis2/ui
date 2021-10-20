import '../common/index.js'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user opens the menu', () => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
})

When('the user clicks outside of the menu', () => {
    cy.get('[data-test="headerbar-title"]').click()
})
