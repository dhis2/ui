import '../common/index'
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

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
