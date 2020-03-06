import '../common/index'
import { Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given('there are 0 unread messages', () => {
    cy.fixture('HeaderBar/dashboard')
        .then(response => ({
            ...response,
            unreadMessages: 0,
        }))
        .as('dashboardFixture')
})

Then('the messages link does not contain a count', () => {
    cy.get('[data-test="headerbar-messages-count"]').should('not.exist')
})
