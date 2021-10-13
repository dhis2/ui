import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { baseUrl } from '../common/index.js'

Before({ tags: '@avatar' }, () => {
    cy.get('@meWithAvatarFixture').then((fx) => {
        cy.route({
            url: `${baseUrl}/api/me?fields=authorities,avatar,email,name,settings`,
            response: fx,
        }).as('meWithAvatar')
    })
})

Given('the HeaderBar loads without an error and the user has an avatar', () => {
    cy.visitStory('HeaderBarTesting', 'Default')
})

Then('the headerbar contains an image icon of size 36px', () => {
    cy.get('[data-test="headerbar-profile-icon-image"]')
        .should('be.visible')
        .and('have.css', 'height', '36px')
        .and('have.css', 'width', '36px')
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
