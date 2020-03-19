import '../common/index'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user clicks outside of the menu', () => {
    cy.get('[data-test="headerbar-title"]').click()
})
