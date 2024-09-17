import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then('the HeaderBar does not display the profile menu', () => {
    cy.get('[data-test="headerbar-profile-menu"]').should('not.exist')
})

When('the user opens the menu', () => {
    cy.get(
        `
        [data-test="headerbar-profile-icon-text"],
        [data-test="headerbar-profile-icon-image"]
    `
    ).click()
})
