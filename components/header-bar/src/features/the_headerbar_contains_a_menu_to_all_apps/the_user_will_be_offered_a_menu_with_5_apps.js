import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('the user clicks on the menu icons', () => {
    cy.get('[data-test="headerbar-apps-icon"]').click()
})

Then('the menu opens', () => {
    cy.get('[data-test="headerbar-apps-menu"]').should('be.visible')
})

Then('contains items with links', () => {
    cy.get('[data-test="headerbar-apps-menu-list"]')
        .find('a')
        .its('length')
        .should('be.greaterThan', 0)
})
