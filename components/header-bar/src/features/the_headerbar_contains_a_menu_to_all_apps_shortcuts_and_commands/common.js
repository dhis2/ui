import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar does not display the command palette', () => {
    cy.get('[data-test="headerbar-menu"]').should('not.exist')
})
