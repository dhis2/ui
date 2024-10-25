import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar displays a menu icon', () => {
    cy.get('[data-test="headerbar-apps-icon"]').should('exist')
})
