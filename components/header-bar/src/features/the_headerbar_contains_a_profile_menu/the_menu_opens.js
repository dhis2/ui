import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('the user clicks on the profile icons', () => {
    cy.get(
        `
        [data-test="headerbar-profile-icon-text"],
        [data-test="headerbar-profile-icon-image"]
    `
    ).click()
})

Then('the menu opens', () => {
    cy.get('[data-test="headerbar-profile-menu"]').should('be.visible')
})
