import '../common/index'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { getInitials } from '../../TextIcon'

Given(
    'the HeaderBar loads without an error and the user does not have an avatar',
    () => {
        cy.visitStory('HeaderBarTesting', 'Default')
    }
)

Then(
    `the headerbar contains a text icon of size 36px with the user's initials`,
    () => {
        cy.fixture('HeaderBar/me').then(({ name }) => {
            cy.get('[data-test="headerbar-profile-icon-text"]')
                .should('be.visible')
                .and('have.css', 'height', '36px')
                .and('have.css', 'width', '36px')
                .and('contain', getInitials(name))
        })
    }
)

When('the user clicks on the text icon', () => {
    cy.get('[data-test="headerbar-profile-icon-text"]').click()
})

Then(
    `the profile menu contains a text icon of size 48px with the user's initials`,
    () => {
        cy.fixture('HeaderBar/me').then(({ name }) => {
            cy.get('[data-test="headerbar-profile-menu-icon-text"]')
                .should('be.visible')
                .and('have.css', 'height', '48px')
                .and('have.css', 'width', '48px')
                .and('contain', getInitials(name))
        })
    }
)
