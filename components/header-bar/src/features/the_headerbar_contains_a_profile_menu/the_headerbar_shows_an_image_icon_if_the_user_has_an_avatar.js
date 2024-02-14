import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('the HeaderBar loads without an error and the user has an avatar', () => {
    cy.visitStory('HeaderBarTesting', 'Me With Avatar')
})

Then('the headerbar contains an image icon of size 24px', () => {
    cy.get('[data-test="headerbar-profile-icon-image"]')
        .should('be.visible')
        .and('have.css', 'height', '24px')
        .and('have.css', 'width', '24px')
})

When('the user clicks on the image icon', () => {
    cy.get('[data-test="headerbar-profile-icon-image"]').click()
})

Then('the profile menu contains an image icon of size 48px', () => {
    cy.get('[data-test="headerbar-profile-menu-icon-image"]')
        .should('be.visible')
        .and('have.css', 'height', '48px')
        .and('have.css', 'width', '48px')
})
