import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('the user clicks on the menu icons', () => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
})

Then('the menu opens', () => {
    cy.get('[data-test="headerbar-menu"]').should('be.visible')
})

Then('contains items with links', () => {
    cy.get('[data-test="headerbar-top-apps-list"]')
        .find('a')
        .its('length')
        .should('be.greaterThan', 0)

    cy.get('[data-test="headerbar-actions-menu"]').should('exist')
})
