import '../common/index'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given(
    'the HeaderBar loads without an error and the user does not have an avatar',
    () => {
        cy.visitStory('HeaderBarTesting', 'Default')
    }
)

Then('the headerbar contains a text icon', () => {
    cy.get('[data-test="headerbar-profile-icon-text"]').should('be.visible')
})

When('the user clicks on the text icon', () => {
    cy.get('[data-test="headerbar-profile-icon-text"]').click()
})

Then('the profile menu contains a text icon', () => {
    cy.get('[data-test="headerbar-profile-menu-icon-text"]').should(
        'be.visible'
    )
})
