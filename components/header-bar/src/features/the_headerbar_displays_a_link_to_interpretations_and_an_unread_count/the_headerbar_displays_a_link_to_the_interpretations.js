import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar contains a link to the interpretations', () => {
    cy.get('[data-test="headerbar-interpretations"]').should('be.visible')
})
